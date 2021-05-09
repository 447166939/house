
import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { wrapper } from '../store'
import Layout from '../components/Layout';
import actions from '../store/modules/common/action'
import Button from '@/components/Button'
const {tempGetInfo}=actions
const useStyles = makeStyles(theme => ({
    root: {
        height:'100vh',
        padding:theme.spacing(5)
    }
}));
const  Index=()=> {
  const dispatch = useDispatch()
    const classes = useStyles();
  useEffect(() => {
  }, [dispatch])
  return (
      <Layout>
      <div className={classes.root}></div>
      </Layout>
  );
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
    if (!store.getState().placeholderData) {
        console.log('ttt===',tempGetInfo())
         store.dispatch(tempGetInfo())
    }
    return {

    }
})

export default Index
