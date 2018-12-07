import produce from 'immer';
import _ from 'lodash';
import { NavigationActions } from '../actions/navigationActions';

const defaultStore = {
    nextScreen: '/'
}

export default function navigationReducer(store = defaultStore, action) {
    return produce(store, draft => {
        switch (action.type) {
            case NavigationActions.GO_TO_RESULT: {
                const { screen } = action.payload;
                draft.nextScreen = screen;
                break;
            }
            case NavigationActions.GO_TO_SEARCH: {
                const { screen } = action.payload;
                draft.nextScreen = screen;
                break;
            }
        }
    });
}