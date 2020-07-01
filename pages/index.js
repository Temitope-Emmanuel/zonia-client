import React from 'react';
import Head from 'next/head'
import Navbar from "../components/navbar"
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from "../components/Drawer"
import Carousel from "../components/Carousel"
import Footer from "../components/footer"
import Wrapper from "../components/Wrapper"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    overflowX:"hidden",
    height:"auto",
    flexDirection:"column"
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

const Index = function() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
    <Head>
      Welcome to Zonia
    </Head>
    <div className={classes.root}>
      <CssBaseline/>
      <Navbar open={open} handleDrawerOpen={handleDrawer}/>
      <Drawer open={open} handleDrawer={handleDrawer}/>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Carousel/>
      </main>
        <Wrapper open={open}>
        <Footer/>
        </Wrapper>
    </div>
    </>
  );
}

export default Index