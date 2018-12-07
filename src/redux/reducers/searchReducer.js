import produce from 'immer';
import _ from 'lodash';
import { SearchActionsTypes } from '../actions/searchActions';

const defaultStore = {
    isAttempt: false,
    favourites: []
}

export default function searchReducer(store = defaultStore, action) {
    return produce(store, draft => {
        switch (action.type) {
            case SearchActionsTypes.ADD_TO_FAVOURITES_ATTEMPT: {
                draft.isAttempt = true;
                break;
            }
            case SearchActionsTypes.ADD_TO_FAVOURITES_SUCCESS: {
                draft.isAttempt = false;
                let { name, lang, id } = action.payload;
                draft.favourites.push({
                    name,
                    lang,
                    id
                });
                break;
            }
            case SearchActionsTypes.REMOVE_TO_FAVOURITES_ATTEMPT: {
                draft.isAttempt = true;
                break;
            }
            case SearchActionsTypes.REMOVE_TO_FAVOURITES_SUCCESS: {
                draft.isAttempt = false;
                let { id } = action.payload;
                _.remove(draft.favourites, (elem) => {
                    return elem.id === id;
                });
                break;
            }
        }
    });
}