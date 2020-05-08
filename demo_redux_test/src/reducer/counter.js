

const counter = (state = 0 ,action) =>{
    switch(action.type) {
        case 'ADD_COUNT':
            return state + action.score;
        case 'DEL_COUNT':
            return state - action.score;
        default:
            return state;
    }
}

export default counter;