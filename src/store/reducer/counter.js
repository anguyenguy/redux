import * as actionTypes from '../action';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.INCREMENT:
            return{
                ...state,
                counter:state.counter+1
            }
        case actionTypes.DECREMENT:
            return{
                ...state,
                counter:state.counter-1
            }
        case actionTypes.ADD5:
            return{
                ...state,
                counter:state.counter+5
            }
        case actionTypes.REMOVE5:
            return{
                ...state,
                counter:state.counter-5
            }
    }

    return state;
};

export default reducer;