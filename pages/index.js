
import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { wrapper } from '../store'
import Copyright from '../src/Copyright';

const  Index=()=> {
  const dispatch = useDispatch()

  useEffect(() => {
  }, [dispatch])
  return (
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
  );
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  await store.sagaTask.toPromise()
})

export default Index
