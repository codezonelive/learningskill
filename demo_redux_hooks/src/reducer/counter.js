const initial = {
    count: 0
}

const counter = (state = initial, action) =>{
    switch (action.type) {
        case 'ADD_COUNT':
            return {
                count: state.count + 1
            }
        case 'DEL_COUNT':
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}

export default counter