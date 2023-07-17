import React, {ReactElement, useEffect} from "react";
import Layout from '@/components/layout'
import Content from "@/components/Home/Content";
import Sider from "@/components/Home/Sider";
import Pannel from "@/components/Home/Pannel";
import {NextPage} from "next";
import {Grid} from "@mui/material";

export type IPage=NextPage&{getLayout:(props:ReactElement)=>ReactElement}
const index: IPage = (props) => {
    useEffect(() => {
        document.body.classList.remove('fade-out')
    }, [])
    return (
        <Grid css={{display:'flex',flexWrap:'nowrap'}} container>
            <Sider />
            <Content />
            <Pannel />
        </Grid>
    );
};
export default index;
index.getLayout = function getLayout(page:ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
