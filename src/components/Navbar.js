import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button'
import nextId from 'react-id-generator'
import firebase from 'firebase'

import {useDispatch, useSelector} from 'react-redux'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    navBar:{
      display: 'flex',
      justifyContent: 'space-between'
    },
    addNewBtn: {
      backgroundColor: 'green'
    }
  }));

const Navbar = () => {
    const classes = useStyles();

    const state = useSelector(state=> state.cards)
    const dispatch = useDispatch()

    const addCardHandler = (event) => {
      const id = nextId()
      const newCardIds = [...state.columns['column-1'].cardIds]
      newCardIds.push(id)
      const newCard = {
          id: id,
          title: 'Dubble click to add title',
          content: 'Dubble click to add content'
      }

      const newState ={
        ...state,
        cards:{
          ...state.cards,
          [id]: {...newCard},
        },
        columns:{
          ...state.columns,
          'column-1': {
            ...state.columns['column-1'],
            cardIds: newCardIds
          }

        }
      }

      console.log(newCard)
      console.log(newState)

      dispatch({
        type:'add_new_card',
        payload: newState
      })

      function writeData(newState) {
        firebase.database().ref().set(newState);
      }

      writeData(newState)
    }

    return (
      <div className={classes.root}>
        <AppBar  position="static">
          <Toolbar className={classes.navBar} variant="dense">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Scrum Board
            </Typography>
            <Button className={classes.addNewBtn} color="inherit" onClick={addCardHandler} >New Card</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  
}

export default Navbar
