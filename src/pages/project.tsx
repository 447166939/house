import React, {ReactElement, useEffect, useState} from "react";
import Box from '@mui/material/Box';
import * as styles from '@/style/projectStyle'
import Layout from "@/components/layout";
import {NextPage} from "next";
export type IPage=NextPage&{getLayout:(props:ReactElement)=>ReactElement}
const Project:IPage = (props) => {
    useEffect(() => {
        document.body.classList.remove('fade-out')
    }, [])
    return (
        <Box css={styles.container}>
           project
        </Box>
    );
};
export default Project;
Project.getLayout = function getLayout(page:ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
