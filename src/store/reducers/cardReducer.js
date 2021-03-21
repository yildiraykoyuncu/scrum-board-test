import { Switch } from "@material-ui/core"
import { databaseRef } from '../../config/fbConfig'





let initialState = {}




const cardReducer = (state = initialState, action)=>{

    switch(action.type){
        case 'card_moved':
            return {
                ...action.payload
            }

        case 'add_new_card':
            return{
                ...action.payload
            }

        case 'delete_card':
            return {
                ...action.payload
            }

        case 'card_update':
            return {
                ...action.payload
            }

        case 'fetch_cards':
            return {
                ...action.payload
            }
        default:
            return state
    }
}

export default cardReducer