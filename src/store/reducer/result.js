import React from 'react';
import * as actionTypes from '../action';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        case actionTypes.STORE_RESULT:
            return{
                ...state,
                results:state.results.concat({value:state.counter, id: new Date()})
            }
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.resultID );
            return{
                ...state,
                results : updatedArray
            }
    }

    return state;
};

export default reducer;