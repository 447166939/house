import React, { ReactElement, useEffect } from "react";
import Layout from "@/components/layout";
import { NextPage } from "next";
import { Box } from "@mui/material";
import ContactHeader from '@/components/Contact/ContactHeader'

export type IPage = NextPage & { getLayout: (props: ReactElement) => ReactElement };
const Contact: IPage = (props) => {
    useEffect(() => {
        document.body.classList.remove("fade-out");
    }, []);
    return (
        <Box css={{ display: "flex", flexWrap: "nowrap" }}>
<ContactHeader />
        </Box>
    );
};
export default Contact;
Contact.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
