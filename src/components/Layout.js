import React from 'react'
import Navbar from './Navbar'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    boardContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '25px',
        justifyContent: 'space-between'
    }
})



const Layout = ({children}) => {
    const classes = useStyles()

   
    return (
        <>
            <Navbar />
            <CssBaseline/>
            <Container maxWidth="lg" className={classes.boardContainer}>
                    {children}
            </Container>
            
        </>
    )
}

export default Layout
