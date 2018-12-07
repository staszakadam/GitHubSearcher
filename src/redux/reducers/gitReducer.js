import produce from 'immer';
import _ from 'lodash';
import { GitActionsTypes } from '../actions/gitActions';

const defaultStore = {
    isAttempt: false,
    desc: "",
    lang: "",
    page: 0,
    repositories: [],
    error: null
}

export default function gitReducer(store = defaultStore, action) {
    return produce(store, draft => {
        switch (action.type) {
            case GitActionsTypes.SEARCH_REPO_ATTEMPT: {
                const { desc, lang } = action.payload;
                draft.desc = action.payload.desc;
                draft.lang = action.payload.lang;
                if (store.desc != desc | store.lang != lang) {
                    //SERCH NEW REPO, OLD RESULT REMOVE FROM STORE
                    draft.repositories = [];
                }
                draft.isAttempt = true;
                break;
            }
            case GitActionsTypes.SEARCH_REPO_SUCCESS: {
                draft.isAttempt = false;
                const { data } = action.payload;
                data.forEach((repo) => {
                    draft.repositories.push({
                        id: repo.id,
                        name: repo.name,
                        owner: repo.full_name.split('/')[0],
                        description: repo.description,
                        stars: repo.stargazers_count,
                        isAttempt: false,
                        languages: [],
                        error: false
                    });
                });
                draft.page = draft.page + 1;
                break;
            }
            case GitActionsTypes.SEARCH_REPO_ERROR: {
                const { error } = action.payload;
                draft.isAttempt = false;
                draft.error = error;
                break;
            }
            case GitActionsTypes.LOAD_OTHER_LANGS_ATTEMPT: {
                let idx = draft.repositories.findIndex((repo) => {
                    return repo.id === action.payload.id
                })
                draft.repositories[idx].isAttempt = true;
                break;
            }

            case GitActionsTypes.LOAD_OTHER_LANGS_SUCCESS: {
                const { data } = action.payload;
                let idx = draft.repositories.findIndex((repo) => {
                    return repo.id === action.payload.id;
                })
                draft.repositories[idx].isAttempt = false;
                draft.repositories[idx].languages = Object.keys(data)
                break;
            }
            case GitActionsTypes.LOAD_OTHER_LANGS_ERROR: {
                const { error, id } = action.payload;
                let idx = draft.repositories.findIndex((repo) => {
                    return repo.id === id;
                })
                draft.repositories[idx].isAttempt = false;
                draft.repositories[idx].error = error;
                break;
            }
        }
    });
}