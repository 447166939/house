import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "@/components/Link";
import { Formik, Form, Field, useFormik } from "formik";
import * as styles from "@/style/loginStyle";
import rIcon from "@/assets/images/icon_r.png";
import atIcon from "@/assets/images/at.png";
import lockIcon from "@/assets/images/lock.png";
import googleIcon from "@/assets/images/google.png";
import facebookIcon from "@/assets/images/facebook.png";
import loginLogo from "@/assets/images/login_logo.png";
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
  Checkbox,
  Fab
} from "@mui/material";
import { useLogin } from "@/hooks/useLogin";
export interface IRegisterProps {}
const Register: React.FC<IRegisterProps> = (props) => {
  const [role, setRole] = useState("");
  const { mutate } = useLogin();
  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value);
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    onSubmit: async (values) => {
      console.log('values',values)
      await mutate(values);
    }
  });
  return (
    <Box css={styles.container}>
      <Box css={styles.leftBox}>
        <Image css={styles.rIcon} src={rIcon} alt={""} />
        <Box css={styles.title}>{`Find Your Perfect Place\nWith Homeey`}</Box>
      </Box>
      <Box css={styles.right}>
        <Box css={styles.rightBox}>
          <Image css={styles.loginLogo} src={loginLogo} alt={""} />
          <Box css={styles.formTitle}>{`Welcome to Remote`}</Box>
          <Box
            css={
              styles.formSubTitle
            }>{`Welcome back! login with your data that you entered \n during registration.`}</Box>

          <form onSubmit={formik.handleSubmit} css={styles.loginForm}>
            <FormControl css={styles.userControl}>
              <InputLabel css={styles.userLabel} shrink htmlFor="username-input">
                Email address
              </InputLabel>
              <InputBase
                required
                autoComplete="off"
                onChange={formik.handleChange}
                value={formik.values.username}
                name="username"
                placeholder={"Enter your email..."}
                id="username-input"
                css={styles.userInput}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton>
                      <Image css={styles.atIcon} src={atIcon} alt={"#"} />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl css={styles.passControl}>
              <InputLabel css={styles.passLabel} shrink htmlFor="password-input">
                Password
              </InputLabel>
              <InputBase
                autoComplete="new-password"
                onChange={formik.handleChange}
                value={formik.values.password}
                name="password"
                type={"password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton>
                      <Image css={styles.lockIcon} src={lockIcon} alt={""} />
                    </IconButton>
                  </InputAdornment>
                }
                css={styles.passInput}
              />
            </FormControl>
            <FormControl css={styles.rememberControl}>
              <Checkbox css={styles.remberCheckbox} />
              <Box css={styles.remberText}>Remember me</Box>
              <Link css={styles.signupText} href={"/register"}>
                Sign up
              </Link>
              <Link css={styles.forgetText} href={""}>
                Forgot your password?
              </Link>
            </FormControl>
            <FormControl css={styles.buttonControl}>
              <Button type="submit" variant="contained" color="primary" css={styles.registerButton}>
                Login
              </Button>
            </FormControl>
            <Box css={styles.orWrapper}>
              <span css={styles.leftBorder}></span>
              <span css={styles.orText}>or</span>
              <span css={styles.rightBorder}></span>
            </Box>
            <Box css={styles.buttonWrapper}>
              <Fab css={styles.googleFab} variant="extended">
                <Image css={styles.googleIcon} src={googleIcon} alt={""} />
                Login with google
              </Fab>
              <Fab css={styles.facebookFab} variant="extended">
                <Image css={styles.facebookIcon} src={facebookIcon} alt={""} />
                Login with facebook
              </Fab>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};
export default Register;
