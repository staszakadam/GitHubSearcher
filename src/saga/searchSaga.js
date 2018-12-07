import { call, put } from 'redux-saga/effects';
import uuid from 'uuid/v4';

import { addToFavouritesSuccess, removeFromFavouritesSuccess } from '../redux/actions/searchActions';

function* addToFavourites(action) {
    const { name, lang } = action.payload;
    let id = uuid();
    let newAction = addToFavouritesSuccess(name, lang, id);
    yield put(newAction);
}

function* removeFromFavourites(action) {
    const { id } = action.payload;
    let newAction = removeFromFavouritesSuccess(id);
    yield put(newAction);
}

export {
    addToFavourites,
    removeFromFavourites
}