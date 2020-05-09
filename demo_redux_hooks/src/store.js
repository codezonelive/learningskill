import { createStore } from 'redux'
import reducer from './reducer'

const loadstate = () =>{
    try {
        const serislizedState = localStorage.getItem('store')
        if(serislizedState === null){
            return undefined
        }else{
            return JSON.parse(serislizedState)
        }
    } catch (error) {
        return undefined
    }   
}

const seveState = (state) =>{
     try {
         const serislizedState = JSON.stringify(state)
         localStorage.setItem('store', serislizedState)
     } catch (error) {
         console.log(error)
     }
}


const persistState = loadstate()
const store = createStore(reducer, persistState)

store.subscribe(() => {
    seveState(store.getState())
})

export default store