import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Droppable } from 'react-beautiful-dnd'


import ScrumCard from './ScrumCard'


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '300px',
      backgroundColor: theme.palette.background.paper,
      margin: '0'
    },
    inline: {
      display: 'inline',
    },
  }));


const CardList = ({column, cards}) => {
    const classes = useStyles();

    return (

      <Droppable droppableId={column.id}> 
        {(provided)=> {
             return <List className={classes.root} aria-labelledby="nested-list-subheader" subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                              {column.title}
                            </ListSubheader>
                            }
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            >
                  
                            {cards?.map((card, index) => {
                              return card?.id ? <React.Fragment key={card?.id}> 
                              <ListItem alignItems="flex-start">
                            <ScrumCard card={card}  index={index} />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                          
                              </React.Fragment> : null
                            })}

                      {provided.placeholder}
             </List>
        }}
  
      </Droppable>
    
    );
}

export default CardList
