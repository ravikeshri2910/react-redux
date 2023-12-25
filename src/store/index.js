import {createContext} from 'react'
import { act } from 'react-dom/test-utils'

const createReducer = (state  = { counter : 0} , action) =>{

    if(action.type === 'increament'){
        return {
            counter : state.counter + 1,
        }
    }

    if(action.type === 'decreament') {
        return{
            counter : state.counter - 1
        }
    }

    return state
}

const store = createContext(createReducer)

export default store


// const counterSubscriber = () =>{

//     const latestState = store.getState()
//     console.log(latestState)
// }

// store.subscriber(counterSubscriber)