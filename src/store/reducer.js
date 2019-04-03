import React from 'react';

const initialState = {
    counter:5,
    results: []
}

const reducer = (state = initialState, action) => {
    if(action.type=== 'INCREMENT'){
        return{
            ...state,
            counter:state.counter+1
        }
    }
    if(action.type=== 'DECREMENT'){
        return{
            ...state,
            counter:state.counter-1
        }
    }
    if(action.type=== 'ADD5'){
        return{
            ...state,
            counter:state.counter+5
        }
    }
    if(action.type=== 'REMOVE5'){
        return{
            ...state,
            counter:state.counter-5
        }
    }
    if(action.type==='STORE_RESULT'){
        console.log("storing...");
        return{
            ...state,
            results:state.results.concat({value:state.counter, id: new Date()})
        }
    }
    if(action.type==='DELETE_RESULT'){
        // const newArray = [...state.results];
        // newArray.splice(id,1); 
        // state.results.splice(id,1)
        const updatedArray = state.results.filter(result => result.id !== action.resultID );
        return{
            ...state,
            results : updatedArray
        }
    }
    return state;
};

export default reducer;