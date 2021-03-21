import {databaseRef} from '../../config/fbConfig'

export const createCard = (newState) => {
    return (dispatch, getState) => {
        dispatch({type:'add_new_card', payload: newState})
    }
}

export const fetchCards = () => async dispatch => {
    await databaseRef.on("value", snapshot => {
        console.log(snapshot.val())
      dispatch({
        type: 'fetch_cards',
        payload: snapshot.val()
      });
    });
  };

export const updateCards = (newState) => async dispatch => {
    await databaseRef.set(newState)
    dispatch({
        type:'card_update',
        payload: newState
    })
}