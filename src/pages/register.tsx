import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import * as styles from "@/style/registerStyle";
import rIcon from "@/assets/images/icon_r.png";
import atIcon from "@/assets/images/at.png";
import lockIcon from "@/assets/images/lock.png";
import downIcon from "@/assets/images/down.png";
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
  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value);
  };
  return (
    <Box css={styles.container}>
      <Box css={styles.leftBox}>
        <Image css={styles.rIcon} src={rIcon} alt={""} />
        <Box css={styles.title}>{`Find Your Perfect Place\nWith Homeey`}</Box>
      </Box>
      <Box css={styles.rightBox}>
        <Box css={styles.formTitle}>{`Welcome to Remote`}</Box>
        <Box
          css={
            styles.formSubTitle
          }>{`Welcome back! login with your data that you entered \n during registration.`}</Box>
        <form css={styles.loginForm}>
          <FormControl css={styles.userControl}>
            <InputLabel css={styles.userLabel} shrink htmlFor="username-input">
              Username
            </InputLabel>
            <InputBase
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
              type={"password"}
              id="password-input"
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
          <FormControl css={styles.roleControl}>
            <InputLabel shrink css={styles.roleLabel}>
              Platform Role
            </InputLabel>
            <Select
              IconComponent={(props) => (
                <Image {...props} css={styles.downIcon} src={downIcon} alt={""} />
              )}
              value={role}
              onChange={handleChange}
              input={<InputBase css={styles.roleInput} name="role" id="role-select" />}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl css={styles.roleControl}>
            <InputLabel shrink css={styles.roleLabel}>
              Language
            </InputLabel>
            <Select
              IconComponent={(props) => (
                <Image {...props} css={styles.downIcon} src={downIcon} alt={""} />
              )}
              value={role}
              onChange={handleChange}
              input={<InputBase css={styles.roleInput} name="language" id="language-select" />}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl css={styles.roleControl}>
            <InputLabel shrink css={styles.roleLabel}>
              Location
            </InputLabel>
            <Select
              IconComponent={(props) => (
                <Image {...props} css={styles.downIcon} src={downIcon} alt={""} />
              )}
              value={role}
              onChange={handleChange}
              input={<InputBase css={styles.roleInput} name="location" id="location-select" />}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl css={styles.bioControl}>
            <InputLabel shrink css={styles.bioLabel}>
              Bio
            </InputLabel>
            <InputBase css={styles.bioInput} id="outlined-multiline-flexible" multiline />
          </FormControl>
          <FormControl css={styles.buttonControl}>
            <Button variant="contained" color="primary" css={styles.registerButton}>
              Sign Up
            </Button>
          </FormControl>
        </form>
      </Box>
    </Box>
  );
};
export default Register;
