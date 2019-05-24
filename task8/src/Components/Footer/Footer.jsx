import React from 'react';
import injectSheet from 'react-jss';

const styles =  {
    footer: {
        display: 'flex',
        alignItems: 'center',
        height: '40px',
        paddingLeft: '30px',
        fontWeight: 700,
        color: '#c15d69',
        background: '#414141'
    }
};

const  Footer = ({classes}) => (<div className={classes.footer}> netflixroulette</div>);

export default injectSheet(styles)(Footer)
