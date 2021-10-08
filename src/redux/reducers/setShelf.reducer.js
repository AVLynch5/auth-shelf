import React from 'react';

const setShelfItems = (state = [], action) => {
    if (action.type === 'SET_SHELF') {
        return action.payload;
    }
    return state;
}

export default setShelfItems;