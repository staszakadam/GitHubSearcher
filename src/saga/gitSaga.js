import { call, put } from 'redux-saga/effects';

import { searchRepoSuccess, searchRepoError, loadOtherLangsSuccess, loadOtherLangsError } from '../redux/actions/gitActions';

import { searchRepositoryService, getRepositoryLanguagesService } from '../services/gitHubService';

export function* searchRepoOnGit(action) {
    const { desc, lang, page } = action.payload;
    let result = yield searchRepositoryService(desc, lang, page);
    if (result.status === 'success') {
        let newAction = searchRepoSuccess(result.data);
        yield put(newAction);
    } else {
        let newAction = searchRepoError(result.error);
        yield put(newAction);
    }
}

export function* getRepoLanguages(action) {
    const { id, owner, name } = action.payload;
    let result = yield getRepositoryLanguagesService(owner, name);
    if (result.status === 'success') {
        let newAction = loadOtherLangsSuccess(result.data, id);
        yield put(newAction);
    } else {
        let newAction = loadOtherLangsError(result.error);
        yield put(newAction);
    }
}