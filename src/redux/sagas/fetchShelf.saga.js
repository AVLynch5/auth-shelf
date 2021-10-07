import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//main Saga: will be fired on 'FETCH_SHELF'

function* fetchShelf(){

    try {
        const config = {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        };

        const response = yield axios.get('/api/shelf')

}