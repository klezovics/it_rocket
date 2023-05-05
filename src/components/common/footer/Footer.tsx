import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme:Theme) => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(2),
        backgroundColor: theme.palette.primary.main,
    },
    title: {
        flexGrow: 1,
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.root}>
            <p>This a footer</p>
        </footer>
    );
}

export default Footer;
