import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

function* deleteItem(action) {
    try {
        const byeItem = action.payload
        console.log("Item to delete: ", byeItem);
        yield axios.delete(`/api/shelf/${byeItem}`);
        yield put({ type: 'FETCH_SHELF' });
    } catch (error) {
        console.log('could not delete', error);
    }
}

function* deleteSaga() {
    yield takeLatest('DELETE_AN_ITEM', deleteItem)
}

export default deleteSaga;