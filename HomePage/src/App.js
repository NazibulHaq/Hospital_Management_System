import React from'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MuiBottomNav } from './MuiBottomNav';
//import PatientForm from "./PatientForm.js";
//import Grid from '@material-ui/core/Grid';
//import { SwapVerticalCircleOutlined } from '@material-ui/icons';
//import { spacing } from '@mui/system';
//import { Box } from '@material-ui/core';
//import SaveIcon from '@material-ui/icons/Save';
/*import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';
import QueueOutlinedIcon from '@material-ui/icons/QueueOutlined';
import ImageSearchOutlinedIcon from '@material-ui/icons/ImageSearchOutlined';*/
//import background from "./img/gms.jpg";
//import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));


function App() {
  const classes = useStyles();

  return (
    <div className="App" align="center" //style={{ backgroundImage: `url(${background})` }}
    >
      <div className={classes.root}>
      <Typography component="h1" variant="h5">
          Welcome to Home Page
      </Typography>

        <Button variant='contained' color="primary" size="large" 
        style={{ fontSize:20 }}
        href = "/patient">Add Client</Button>

        <Button variant='contained' color="primary" size="large" 
        style={{ fontSize:20 }}
        href="#">Activity Schedule</Button>
      
        </div>
        <MuiBottomNav/>
    </div>
    
  );
}


export default App;
//        <img src={logo} className="App-logo" alt="logo" />
//      <header className="App-header">

