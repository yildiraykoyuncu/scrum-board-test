import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Draggable } from 'react-beautiful-dnd'
import TextField from '@material-ui/core/TextField';
import firebase from 'firebase'
import { updateCards } from '../store/actions/cardActions'

import { useSelector, useDispatch} from 'react-redux'


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    cardContent: {
        paddingTop: '0'
    }
  });
  

const ScrumCard = ({card, index}) => {
    const classes = useStyles();

    const state = useSelector(state => state.cards)
    const dispatch = useDispatch()

    const [editMode, setEditMode] = useState(false)
    const [cardContent, setCardContent] = useState({})

    const id = card?.id

    const deleteHandler = (event) => {
     
      const newState = {
        ...state
      }

      delete newState.cards[id]

      for(const column in newState.columns){

        const index = newState.columns[column].cardIds.indexOf(card?.id)
        if(index > -1){
          newState.columns[column].cardIds.splice(index, 1)
        }
      }

      dispatch(updateCards(newState))
    }

    const toggleEditMode = ()=>{
        setEditMode(!editMode)
    }

    const handleChange = (event) => {
      setCardContent({
        ...cardContent,
        [event.target.name]: event.target.value
      })
    }

    const updateHandler = (event) => {
      const newCard = {
        ...state.cards[id],
        title: cardContent.title,
        content: cardContent.content
      }

      const newState = {
        ...state,
        cards: {
          ...state.cards,
          [id]: newCard
        }
      }
     
      
      dispatch(updateCards(newState))
      setEditMode(false)
    }


    return (

       <Draggable draggableId={card?.id} index={index} > 
            {(provided)=>{
                
             return  <Card className={classes.root} {...provided.draggableProps} {...provided.dragHandleProps} innerRef={provided.innerRef} onDoubleClick={toggleEditMode} >
                        <CardContent className={classes.cardContent}>
                          {editMode ?
                          <form  noValidate autoComplete="off">
                          <TextField id="standard-basic" name="title" label="title" placeholder={card?.title} onChange={handleChange} fullWidth margin="normal" InputLabelProps={{ shrink: true, }}/>
                          <TextField  id="standard-multiline-flexible" name="content" label="content" multiline rowsMax={6} placeholder={card?.content} onChange={handleChange} fullWidth margin="normal" InputLabelProps={{ shrink: true, }}/>
                        </form> :
                        <>
                          <Typography variant="h6" component="h2">
                                {card?.title}
                            </Typography>
                            <Typography variant="body2" component="p">
                            {card?.content}
                            </Typography>
                        </>
                        }
                            
                        </CardContent>
                        <CardActions className={classes.buttonContainer}>
                          {editMode ? 
                          <Button size="small" variant="contained" color="primary" onClick={updateHandler} >save</Button>:
                          <Button size="small" variant="contained" color="secondary" onClick={deleteHandler} >delete</Button>
                          }
                            
                        </CardActions>
                    </Card> 
            }}
        </Draggable>
       
    );
}

export default ScrumCard
