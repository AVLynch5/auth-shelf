import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';


function* addItem(action) {
    try {
        yield axios.post('/api/shelf', action.payload)
        yield put({ type: 'FETCH_SHELF' })

    } catch (error) {
        console.log('Error adding an item', error);
    }
}

function* addItemSaga() {
    yield takeLatest('ADD_NEW_ITEM', addItem)
}

export default addItemSaga;