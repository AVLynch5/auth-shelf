import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

function* editItem(action) {
    try {
        const theItem = action.payload
        console.log("Item to edit is: ", theItem);
        yield axios.delete(`/api/shelf/${theItem}`);
        yield put({ type: 'FETCH_SHELF' });
    } catch (error) {
        console.log('ERROR IN EDIT ITEM SAGA', error);
    }
}

function* editSaga() {
    yield takeLatest('EDIT_AN_ITEM', editItem)
}

export default editSaga;