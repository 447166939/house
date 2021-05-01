import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
testBtn:{
    textTransform:'none',
    paddingLeft:theme.spacing(2),
    paddingRight:theme.spacing(2),
}
}));
export default function About() {
    const classes = useStyles();
    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Button className={classes.testBtn} variant="contained" color={'primary'}>Test</Button>

            </Box>
        </Container>
    );
}