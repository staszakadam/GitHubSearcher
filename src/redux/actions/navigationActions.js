export const NavigationActions = {
    GO_TO_RESULT: "GO_TO_RESULT",
    GO_TO_SEARCH: "GO_TO_SEARCH"
}

export function goToResult(repoName, language) {
    return {
        type: NavigationActions.GO_TO_RESULT,
        payload: {
            screen: `/result/${repoName}/${language}`
        }
    }
}

export function goToSearch() {
    return {
        type: NavigationActions.GO_TO_SEARCH,
        payload: {
            screen: `/`
        }
    }
}