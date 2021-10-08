import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//main Saga: will be fired on 'FETCH_SHELF'

function* fetchShelf() {
    try{
    const response = yield axios.get('/api/shelf');
    console.log('this is FETCHSHELF response', response.data);
    yield put({ type: 'SET_SHELF', payload: response.data });
}   catch (error) {
    console.log('Shelf get request failed', error);
}
  }

function* fetchSaga() {
    yield takeLatest('FETCH_SHELF', fetchShelf);
}

export default fetchSaga;