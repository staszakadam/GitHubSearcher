export const SearchActionsTypes = {
    ADD_TO_FAVOURITES_ATTEMPT: "ADD_TO_FAVOURITES_ATTEMPT",
    ADD_TO_FAVOURITES_SUCCESS: "ADD_TO_FAVOURITES_SUCCESS",

    REMOVE_TO_FAVOURITES_ATTEMPT: "REMOVE_TO_FAVOURITES_ATTEMPT",
    REMOVE_TO_FAVOURITES_SUCCESS: "REMOVE_TO_FAVOURITES_SUCCESS"
}

export function addToFavourites(name, lang) {
    return {
        type: SearchActionsTypes.ADD_TO_FAVOURITES_ATTEMPT,
        payload: {
            name,
            lang
        }
    }
}

export function addToFavouritesSuccess(name, lang, id) {
    return {
        type: SearchActionsTypes.ADD_TO_FAVOURITES_SUCCESS,
        payload: {
            name,
            lang,
            id
        }
    }
}

export function removeFromFavourites(id) {
    return {
        type: SearchActionsTypes.REMOVE_TO_FAVOURITES_ATTEMPT,
        payload: {
            id
        }
    }
}

export function removeFromFavouritesSuccess(id) {
    return {
        type: SearchActionsTypes.REMOVE_TO_FAVOURITES_SUCCESS,
        payload: {
            id
        }
    }
}