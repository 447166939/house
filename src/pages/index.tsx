import React from "react";
import { Box } from "@mui/material";
import Header from "@/components/Home/Header";
import Banner from "@/components/Home/Banner";
import * as styles from "@/components/Home/homeStyle";
import Section1 from "@/components/Home/Section1";
import Section2 from "@/components/Home/Section2";
import Section3 from "@/components/Home/Section3";
import Section4 from "@/components/Home/Section4";
import Section5 from "@/components/Home/Section5";
import Section6 from "@/components/Home/Section6";
import Footer from "@/components/Home/Footer";
export interface IHome {}
const Home: React.FC<IHome> = () => {
  return (
    <Box css={styles.container}>
      <Header />
      <Banner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </Box>
  );
};
export default Home;
