export default (state, action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transcation: state.transcation
                    .filter(transcation => transcation.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transcation: [action.payload, ...state.transcation]
            }
        default:
            return state;
    }
}