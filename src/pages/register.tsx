import React, { useState } from "react";
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
  MenuItem,
  SelectChangeEvent
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import { useRegister } from "@/hooks/useRegister";
export interface IRegisterProps {}
const Register: React.FC<IRegisterProps> = (props) => {
  const [role, setRole] = useState("");
  const [lang, setLang] = useState("");
  const [location, setLocation] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value);
  };
  const handleLangChange = (event: SelectChangeEvent) => {
    setLang(event.target.value);
  };
  const handleLocationChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value);
  };
  const { mutate } = useRegister();
  const handleSubmit = async () => {
    await mutate({
      email: "447166939@qq.com",
      firstName: "xingzai",
      lastName: "xingzai",
      password: "123456",
      username: "xingzai"
    });
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
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: ""
            }}
            onSubmit={handleSubmit}>
            <Form css={styles.loginForm}>
              <FormControl css={styles.userControl}>
                <Box css={styles.userLabel}>Email</Box>
                <Field
                  as={InputBase}
                  name={"email"}
                  required
                  placeholder={"Enter your email..."}
                  id="username-input"
                  css={styles.userInput}
                  endAdornment={
                    <InputAdornment position="end">
                      <Button css={styles.sendCaptBtn} variant={"contained"}>
                        发送邮箱验证
                      </Button>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl css={styles.captControl}>
                <Box css={styles.captLabel}>Captcha</Box>
                <Field
                  as={InputBase}
                  name={"captcha"}
                  placeholder={"Enter your Captcha..."}
                  id="captcha-input"
                  css={styles.captInput}
                />
              </FormControl>
              <FormControl css={styles.telControl}>
                <Box css={styles.telLabel}>Telephone</Box>
                <Field
                  name={"telphone"}
                  as={InputBase}
                  placeholder={"Enter your telephone..."}
                  id="tel-input"
                  css={styles.telInput}
                  endAdornment={
                    <InputAdornment position="end">
                      <Button css={styles.sendCaptBtn} variant={"contained"}>
                        发送验证码
                      </Button>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl css={styles.captControl}>
                <Box css={styles.captLabel}>Captcha</Box>
                <Field
                  name={"phoneCaptcha"}
                  as={InputBase}
                  placeholder={"Enter your Captcha..."}
                  id="username-input"
                  css={styles.captInput}
                />
              </FormControl>
              <FormControl css={styles.passControl}>
                <Box css={styles.passLabel}>Password</Box>
                <Field
                  as={InputBase}
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
                <Field
                  as={InputBase}
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
                <Field
                  as={Select}
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
                  value={role}
                  onChange={handleChange}
                  input={<InputBase css={styles.roleInput} name="role" id="role-select" />}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Property Manager</MenuItem>
                  <MenuItem value={20}>RealEstate Agent</MenuItem>
                  <MenuItem value={30}>Architect</MenuItem>
                  <MenuItem value={40}>Construction Contractor</MenuItem>
                  <MenuItem value={50}>Tax Advisor / Tax Accountant</MenuItem>
                  <MenuItem value={60}>LegalAdvisor / Lawyer)</MenuItem>
                  <MenuItem value={70}>Private Investor</MenuItem>
                  <MenuItem value={80}> Loaner & Lender</MenuItem>
                  <MenuItem value={90}>oint Venture</MenuItem>
                  <MenuItem value={100}>Other Service Provider</MenuItem>
                </Field>
              </FormControl>
              <FormControl css={styles.roleControl}>
                <Box css={styles.roleLabel}>Language</Box>
                <Field
                  as={Select}
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
                  value={lang}
                  onChange={handleLangChange}
                  input={<InputBase css={styles.roleInput} name="language" id="language-select" />}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>英语</MenuItem>
                  <MenuItem value={20}>中文</MenuItem>
                </Field>
              </FormControl>
              <FormControl css={styles.roleControl}>
                <Box css={styles.roleLabel}>Location</Box>
                <Field
                  as={Select}
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
                  value={location}
                  onChange={handleLocationChange}
                  input={<InputBase css={styles.roleInput} name="location" id="location-select" />}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Field>
              </FormControl>
              <FormControl css={styles.buttonControl}>
                <Button
                  type={"submit"}
                  css={styles.registerButton}
                  variant="contained"
                  color="primary">
                  Sign Up
                </Button>
              </FormControl>
            </Form>
          </Formik>
        </Box>
      </Box>
    </Box>
  );
};
export default Register;
