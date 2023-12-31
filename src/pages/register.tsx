import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import * as styles from "@/style/registerStyle";
import rIcon from "@/assets/images/icon_r.png";
import downIcon from "@/assets/images/down.png";
import eyeIcon from "@/assets/images/pass_eye.png";
import {
  FormControl,
  InputBase,
  Button,
  InputAdornment,
  IconButton,
  Select,
  MenuItem
} from "@mui/material";
import { useFormik, ErrorMessage } from "formik";
import { useRegister } from "@/hooks/useRegister";
import { useQueryCity, queryCity } from "@/hooks/useQueryCity";
import { useQueryCountries, queryCountries } from "@/hooks/useQueryCountry";
import { useQueryState, queryState } from "@/hooks/useQueryState";
import { useQueryRoles, queryRoles } from "@/hooks/useRoles";
import { useSendsms, sendSms } from "@/hooks/useSendSms";
import { useSendEmail, sendEmail } from "@/hooks/useSendEmail";
import { useQueryPk, queryPk } from "@/hooks/useQueryPk";
import { useQueryClient } from "@tanstack/react-query";
import { v4 as uuidv4 } from "uuid";
export interface IRegisterProps {}
const Register: React.FC<IRegisterProps> = (props) => {
  const { mutate } = useRegister();
  const queryClient = useQueryClient();
  const queryPkApi = useQueryPk();
  const formik = useFormik({
    initialValues: {
      email: "",
      emailCode: "",
      mobile: "",
      mobileCode: "",
      password: "",
      confirmPassword: "",
      roleId: "1",
      language: "en",
      countryId: "",
      stateId: "",
      cityId: ""
    },
    onSubmit: async (values) => {
      const { countryId, password, confirmPassword, ...submitValues } = values;
      let key: string = await queryClient.fetchQuery(["pk"], queryPk);
      const JSEncrypt = (await import("jsencrypt")).default;
      let encrypt = new JSEncrypt();
      encrypt.setPublicKey(key);
      let cipherPass = encrypt.encrypt(password) as string;
      cipherPass = cipherPass.replace(/\+/g, "%2B");
      let cipherConfirmPass = encrypt.encrypt(confirmPassword) as string;
      cipherConfirmPass = cipherConfirmPass.replace(/\+/g, "%2B");
      await mutate({ password: cipherPass, confirmPassword: cipherConfirmPass, ...submitValues });
      console.log("window", window);
    },
    validate: (values) => {
      let errors: any = {};
      if (!values.emailCode) {
        errors.emailCode = "必填: 请完成邮箱验证码验证";
      }
      if (!values.mobileCode) {
        errors.mobileCode = "必填: 请完成电话验证码验证";
      }
      return errors;
    }
  });
  const queryCityApi = useQueryCity(formik.values.stateId);
  const queryCountriesApi = useQueryCountries();
  const queryStateApi = useQueryState(formik.values.countryId);
  const queryRolesApi = useQueryRoles();
  const sendSmsApi = useSendsms();
  const sendEmailApi = useSendEmail();
  useEffect(() => {
    queryClient.fetchQuery(["countries"], queryCountries);
  }, []);
  useEffect(() => {
    if (!formik.values.countryId) return;
    queryClient.fetchQuery(["state", formik.values.countryId], () =>
      queryState(formik.values.countryId)
    );
  }, [formik.values.countryId]);
  useEffect(() => {
    if (!formik.values.stateId) return;
    queryClient.fetchQuery(["cities", formik.values.stateId], () =>
      queryCity(formik.values.stateId)
    );
  }, [formik.values.stateId]);
  useEffect(() => {
    queryClient.fetchQuery(["roles"], queryRoles);
  }, []);
  useEffect(() => {
    let str = sendSmsApi?.data?.replace(/\D+/g, "");
    formik.setFieldValue("mobileCode", str);
  }, [sendSmsApi.data]);
  const handleSendsms = async () => {
    const uuid = uuidv4();
    await queryClient.fetchQuery(["sendsms"], () =>
      sendSms({ uuid: "", phone: formik.values.mobile })
    );
  };
  const handleSendEmail = async () => {
    await sendEmailApi.mutate({ uuid: "", email: formik.values.email });
  };
  return (
    <Box css={styles.container}>
      <Box css={styles.leftBox}>
        <Image css={styles.rIcon} src={rIcon} alt={""} />
        <Box css={styles.title}>{`Find Your Perfect Place\nWith Homeey`}</Box>
      </Box>
      <Box css={styles.right}>
        <Box css={styles.rightBox}>
          <Box css={styles.formTitle}>{`Welcome to Remote`}</Box>
          <Box
            css={
              styles.formSubTitle
            }>{`Welcome back! login with your data that you entered \n during registration.`}</Box>
          <form onSubmit={formik.handleSubmit} css={styles.loginForm}>
            <FormControl css={styles.userControl}>
              <Box css={styles.userLabel}>Email</Box>
              <InputBase
                onChange={formik.handleChange}
                value={formik.values.email}
                autoComplete="off"
                name={"email"}
                placeholder={"Enter your email..."}
                id="username-input"
                onBlur={formik.handleBlur}
                css={styles.userInput({
                  error: formik.errors.email,
                  touched: formik.touched.email
                })}
                endAdornment={
                  <InputAdornment position="end">
                    <Button
                      onClick={handleSendEmail}
                      css={styles.sendCaptBtn}
                      variant={"contained"}>
                      发送邮箱验证
                    </Button>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl css={styles.captControl}>
              <Box css={styles.captLabel}>Captcha</Box>
              <InputBase
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.emailCode}
                autoComplete="off"
                name={"emailCode"}
                placeholder={"Enter your Captcha..."}
                id="captcha-input"
                css={styles.captInput({
                  error: formik.errors.emailCode,
                  touched: formik.touched.emailCode
                })}
              />
            </FormControl>
            <FormControl css={styles.telControl}>
              <Box css={styles.telLabel}>Telephone</Box>
              <InputBase
                value={formik.values.mobile}
                onChange={formik.handleChange}
                autoComplete="off"
                name={"mobile"}
                placeholder={"Enter your telephone..."}
                id="tel-input"
                css={styles.telInput}
                endAdornment={
                  <InputAdornment position="end">
                    <Button onClick={handleSendsms} css={styles.sendCaptBtn} variant={"contained"}>
                      发送验证码
                    </Button>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl css={styles.captControl}>
              <Box css={styles.captLabel}>Captcha</Box>
              <InputBase
                value={formik.values.mobileCode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="off"
                name={"mobileCode"}
                placeholder={"Enter your Captcha..."}
                id="username-input"
                css={styles.captInput({
                  error: formik.errors.mobileCode,
                  touched: formik.touched.mobileCode
                })}
              />
            </FormControl>
            <FormControl css={styles.passControl}>
              <Box css={styles.passLabel}>Password</Box>
              <InputBase
                value={formik.values.password}
                onChange={formik.handleChange}
                autoComplete="new-password"
                name={"password"}
                type={"password"}
                id="password-input"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton>
                      <Image css={styles.lockIcon} src={eyeIcon} alt={""} />
                    </IconButton>
                  </InputAdornment>
                }
                css={styles.passInput}
              />
            </FormControl>
            <FormControl css={styles.passControl}>
              <Box css={styles.passLabel}>Password</Box>
              <InputBase
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                autoComplete="new-password"
                name={"confirmPassword"}
                type={"password"}
                id="password-input"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton>
                      <Image css={styles.lockIcon} src={eyeIcon} alt={""} />
                    </IconButton>
                  </InputAdornment>
                }
                css={styles.passInput}
              />
            </FormControl>
            <FormControl css={styles.roleControl}>
              <Box css={styles.roleLabel}>Platform Role</Box>
              <Select
                value={formik.values.roleId}
                MenuProps={{
                  PaperProps: {
                    style: {
                      backgroundColor: "#111113",
                      color: "#A2AAB8",
                      fontSize: "15px",
                      border: "1px solid #36404E"
                    }
                  }
                }}
                IconComponent={(props: any) => (
                  <Image {...props} css={styles.downIcon} src={downIcon} alt={""} />
                )}
                onChange={formik.handleChange}
                input={<InputBase css={styles.roleInput} name="roleId" id="role-select" />}>
                {queryRolesApi?.data?.map((item: any, index: number) => (
                  <MenuItem value={item.id} css={styles.roleMenuItem} key={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
                {/* <MenuItem css={styles.roleMenuItem} value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem css={styles.roleMenuItem} value={10}>
                  Property Manager
                </MenuItem>
                <MenuItem css={styles.roleMenuItem} value={20}>
                  RealEstate Agent
                </MenuItem>
                <MenuItem css={styles.roleMenuItem} value={30}>
                  Architect
                </MenuItem>
                <MenuItem css={styles.roleMenuItem} value={40}>
                  Construction Contractor
                </MenuItem>
                <MenuItem css={styles.roleMenuItem} value={50}>
                  Tax Advisor / Tax Accountant
                </MenuItem>
                <MenuItem css={styles.roleMenuItem} value={60}>
                  LegalAdvisor / Lawyer)
                </MenuItem>
                <MenuItem css={styles.roleMenuItem} value={70}>
                  Private Investor
                </MenuItem>
                <MenuItem css={styles.roleMenuItem} value={80}>
                  {" "}
                  Loaner & Lender
                </MenuItem>
                <MenuItem css={styles.roleMenuItem} value={90}>
                  oint Venture
                </MenuItem>
                <MenuItem css={styles.roleMenuItem} value={100}>
                  Other Service Provider
                </MenuItem>*/}
              </Select>
            </FormControl>
            <FormControl css={styles.roleControl}>
              <Box css={styles.roleLabel}>Language</Box>
              <Select
                MenuProps={{
                  PaperProps: {
                    style: {
                      backgroundColor: "#111113",
                      color: "#A2AAB8",
                      fontSize: "15px",
                      border: "1px solid #36404E"
                    }
                  }
                }}
                IconComponent={(props: any) => (
                  <Image {...props} css={styles.downIcon} src={downIcon} alt={""} />
                )}
                value={formik.values.language}
                onChange={formik.handleChange}
                input={<InputBase css={styles.roleInput} name="language" id="language-select" />}>
                <MenuItem css={styles.langMenuItem} value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem css={styles.langMenuItem} value={"ch"}>
                  汉语
                </MenuItem>
                <MenuItem css={styles.langMenuItem} value={"en"}>
                  英语
                </MenuItem>
                <MenuItem css={styles.langMenuItem} value={"fr"}>
                  法语
                </MenuItem>
                <MenuItem css={styles.langMenuItem} value={"rus"}>
                  俄语
                </MenuItem>
                <MenuItem css={styles.langMenuItem} value={"arabic"}>
                  阿拉伯语
                </MenuItem>
                <MenuItem css={styles.langMenuItem} value={"spanish"}>
                  西班牙语
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl css={styles.locationControl}>
              <Box css={styles.roleLabel}>Country</Box>
              <Select
                MenuProps={{
                  PaperProps: {
                    style: {
                      backgroundColor: "#111113",
                      color: "#A2AAB8",
                      fontSize: "15px",
                      border: "1px solid #36404E"
                    }
                  }
                }}
                IconComponent={(props: any) => (
                  <Image {...props} css={styles.downIcon} src={downIcon} alt={""} />
                )}
                value={formik.values.countryId}
                onChange={formik.handleChange}
                input={
                  <InputBase css={styles.countriesInput} name="countryId" id="location-select" />
                }>
                {queryCountriesApi?.data?.map((item: any, index: number) => (
                  <MenuItem value={item.id} css={styles.locationMenuItem} key={item.id}>
                    {item.fullName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl css={styles.locationControl}>
              <Box css={styles.roleLabel}>State</Box>
              <Select
                MenuProps={{
                  PaperProps: {
                    style: {
                      backgroundColor: "#111113",
                      color: "#A2AAB8",
                      fontSize: "15px",
                      border: "1px solid #36404E"
                    }
                  }
                }}
                IconComponent={(props: any) => (
                  <Image {...props} css={styles.downIcon} src={downIcon} alt={""} />
                )}
                value={formik.values.stateId}
                onChange={formik.handleChange}
                input={<InputBase css={styles.countriesInput} name="stateId" />}>
                {queryStateApi?.data?.map((item: any, index: number) => (
                  <MenuItem value={item.id} css={styles.locationMenuItem} key={item.id}>
                    {item.codeFull}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl css={styles.locationControl}>
              <Box css={styles.roleLabel}>City</Box>
              <Select
                MenuProps={{
                  PaperProps: {
                    style: {
                      backgroundColor: "#111113",
                      color: "#A2AAB8",
                      fontSize: "15px",
                      border: "1px solid #36404E"
                    }
                  }
                }}
                IconComponent={(props: any) => (
                  <Image {...props} css={styles.downIcon} src={downIcon} alt={""} />
                )}
                value={formik.values.cityId}
                onChange={formik.handleChange}
                input={<InputBase css={styles.countriesInput} name="cityId" />}>
                {queryCityApi?.data?.map((item: any, index: number) => (
                  <MenuItem value={item.id} css={styles.locationMenuItem} key={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/* <FormControl css={styles.roleControl}>
              <Box css={styles.roleLabel}>Location</Box>
              <Select
                MenuProps={{
                  PaperProps: {
                    style: {
                      backgroundColor: "#111113",
                      color: "#A2AAB8",
                      fontSize: "15px",
                      border: "1px solid #36404E"
                    }
                  }
                }}
                IconComponent={(props: any) => (
                  <Image {...props} css={styles.downIcon} src={downIcon} alt={""} />
                )}
                value={formik.values.stateId}
                onChange={formik.handleChange}
                input={<InputBase css={styles.roleInput} name="stateId" id="location-select" />}>
                <MenuItem css={styles.locationMenuItem} value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem css={styles.locationMenuItem} value={10}>
                  Ten
                </MenuItem>
                <MenuItem css={styles.locationMenuItem} value={20}>
                  Twenty
                </MenuItem>
                <MenuItem css={styles.locationMenuItem} value={30}>
                  Thirty
                </MenuItem>
              </Select>
            </FormControl>*/}
            <FormControl css={styles.buttonControl}>
              <Button
                type={"submit"}
                css={styles.registerButton}
                variant="contained"
                color="primary">
                Sign Up
              </Button>
            </FormControl>
          </form>
        </Box>
      </Box>
    </Box>
  );
};
export default Register;
