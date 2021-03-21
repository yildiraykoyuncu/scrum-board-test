import React from 'react'
import { useState } from 'react'
import Layout from '../components/Layout'
import CardList from '../components/CardList'
import {initialData} from '../store/store'
import { DragDropContext } from 'react-beautiful-dnd'
import { useSelector, useDispatch } from 'react-redux'
import { updateCards } from '../store/actions/cardActions'

const Home = (props) => {
    const state = useSelector( state => state.cards)
    const dispatch = useDispatch()


   const onDragEnd = result => {

    const {destination, source, draggableId} = result

    if (!destination) return

    if (destination.droppableId === source.droppableId && destination.index === source.index) return

    const start = state.columns[source.droppableId]
    const finish = state.columns[destination.droppableId]

    if(start === finish){
        const newCardIds = [...start?.cardIds]
        newCardIds.splice(source.index, 1)
        newCardIds.splice(destination.index, 0, draggableId)
    
        const newColumn = {
            ...start,
            cardIds: newCardIds
        }
    
        const newState = {
            ...state,
            columns: {
                ...state.columns,
                [newColumn.id]: newColumn
    
            }
        }
        
        dispatch(updateCards(newState))

        
        
        return
    }

    const startCardIds = [...start?.cardIds]
    startCardIds.splice(source.index, 1)
    
    const newStart = {
        ...start,
        cardIds: startCardIds
    }

    console.log('ahsajak',finish)
    const finishCardIds = [...finish?.cardIds]
    finishCardIds.splice(destination.idex, 0, draggableId)

    const newFinish = {
        ...finish,
        cardIds: finishCardIds
    }

    const newState = {
        ...state,
        columns: {
            ...state.columns,
            [newStart.id]: newStart,
            [newFinish.id]: newFinish
        }
    }

    dispatch(updateCards(newState))

    


}



    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Layout> 
           {state.columnOrder?.map(columnId => {
               const column = state.columns[columnId]
               const cards = column.cardIds?.map(cardId => state.cards[cardId])

               return <CardList column={column} cards={cards} key={columnId} />
           })}
            </Layout>
        </DragDropContext>
        
    )
}

export default Home
