import 'regenerator-runtime/runtime'
import { takeLatest, takeEvery } from 'redux-saga/effects'

import { SearchActionsTypes } from '../redux/actions/searchActions';
import { GitActionsTypes } from '../redux/actions/gitActions';

import { addToFavourites, removeFromFavourites } from './searchSaga';
import { searchRepoOnGit, getRepoLanguages } from './gitSaga';


function* saga() {
    yield takeLatest(SearchActionsTypes.ADD_TO_FAVOURITES_ATTEMPT, addToFavourites);
    yield takeEvery(SearchActionsTypes.REMOVE_TO_FAVOURITES_ATTEMPT, removeFromFavourites);

    yield takeLatest(GitActionsTypes.SEARCH_REPO_ATTEMPT, searchRepoOnGit);
    yield takeLatest(GitActionsTypes.LOAD_OTHER_LANGS_ATTEMPT, getRepoLanguages);
}

export default saga;