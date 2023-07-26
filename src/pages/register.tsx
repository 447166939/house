import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import * as styles from "@/style/registerStyle";
import rIcon from "@/assets/images/icon_r.png";
import atIcon from "@/assets/images/at.png";
import lockIcon from "@/assets/images/lock.png";
import downIcon from "@/assets/images/down.png";
import eyeIcon from "@/assets/images/pass_eye.png";
import {
  FormControl,
  InputBase,
  InputLabel,
  Button,
  InputAdornment,
  IconButton,
  Select,
  MenuItem,
  SelectChangeEvent,
  TextField
} from "@mui/material";
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
          <form css={styles.loginForm}>
            <FormControl css={styles.userControl}>
              <Box css={styles.userLabel}>Email</Box>
              <InputBase
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
              <InputBase
                placeholder={"Enter your Captcha..."}
                id="captcha-input"
                css={styles.captInput}
              />
            </FormControl>
            <FormControl css={styles.telControl}>
              <Box css={styles.telLabel}>Telephone</Box>
              <InputBase
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
              <InputBase
                placeholder={"Enter your Captcha..."}
                id="username-input"
                css={styles.captInput}
              />
            </FormControl>
            <FormControl css={styles.passControl}>
              <Box css={styles.passLabel}>Password</Box>
              <InputBase
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
                IconComponent={(props) => (
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
                IconComponent={(props) => (
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
              </Select>
            </FormControl>
            <FormControl css={styles.roleControl}>
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
                IconComponent={(props) => (
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
              </Select>
            </FormControl>
            <FormControl css={styles.buttonControl}>
              <Button variant="contained" color="primary" css={styles.registerButton}>
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
