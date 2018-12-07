export const GitActionsTypes = {
    SEARCH_REPO_ATTEMPT: "SEARCH_REPO_ATTEMPT",
    SEARCH_REPO_SUCCESS: "SEARCH_REPO_SUCCESS",
    SEARCH_REPO_ERROR: "SEARCH_REPO_ERROR",

    LOAD_OTHER_LANGS_ATTEMPT: "LOAD_OTHER_LANGS_ATTEMPT",
    LOAD_OTHER_LANGS_SUCCESS: "LOAD_OTHER_LANGS_SUCCESS",
    LOAD_OTHER_LANGS_ERROR: "LOAD_OTHER_LANGS_ERROR"


}
export function searchRepo(desc, lang, page = 1) {
    return {
        type: GitActionsTypes.SEARCH_REPO_ATTEMPT,
        payload: {
            desc,
            lang,
            page
        }
    }
}

export function searchRepoSuccess(data) {
    return {
        type: GitActionsTypes.SEARCH_REPO_SUCCESS,
        payload: {
            data
        }
    }
}

export function searchRepoError(error) {
    return {
        type: GitActionsTypes.SEARCH_REPO_ERROR,
        payload: {
            error
        }
    }
}

export function loadOtherLangs(id, owner, name) {
    return {
        type: GitActionsTypes.LOAD_OTHER_LANGS_ATTEMPT,
        payload: {
            id,
            owner,
            name
        }
    }
}

export function loadOtherLangsSuccess(data, id) {
    return {
        type: GitActionsTypes.LOAD_OTHER_LANGS_SUCCESS,
        payload: {
            data,
            id
        }
    }
}

export function loadOtherLangsError(error, id) {
    return {
        type: GitActionsTypes.LOAD_OTHER_LANGS_ERROR,
        payload: {
            error,
            id
        }
    }
}