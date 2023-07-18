import React, { ReactElement, useEffect } from "react";
import Layout from "@/components/layout";
import { NextPage } from "next";
import { Box } from "@mui/material";
import ContactHeader from "@/components/Contact/ContactHeader";
import Project from "@/components/Contact/Project";
import ContactCenter from "@/components/Contact/ContactCenter";
import { useSelector } from "react-redux";
import { RootState } from "@/store/index";
import * as styles from "@/components/Contact/contactStyle";

export type IPage = NextPage & { getLayout: (props: ReactElement) => ReactElement };
const Contact: IPage = (props) => {
  useEffect(() => {
    document.body.classList.remove("fade-out");
  }, []);
  const { currentTab } = useSelector((state: RootState) => state.contact);
  return (
    <Box css={styles.container}>
      <ContactHeader />
      {[<Project />, <ContactCenter />][currentTab]}
    </Box>
  );
};
export default Contact;
Contact.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
