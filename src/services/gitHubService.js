import request from 'superagent';

import { getSearchUrlByNameOrDescription, getRepoLanguagesUrl } from '../helpers/urlHelper';

export function searchRepositoryService(nameOrDescription, language, page) {
    let url = getSearchUrlByNameOrDescription(nameOrDescription, language, page);
    return new Promise((resolve) => {
        request
            .get(url)
            .end((error, response) => {
                if (error) {
                    resolve({
                        status: "error",
                        error: error.response.error.message
                    })
                } else {
                    resolve({
                        status: "success",
                        data: response.body.items
                    });
                }
            });
    })

}

export function getRepositoryLanguagesService(owner, name) {
    let url = getRepoLanguagesUrl(owner, name);
    return new Promise((resolve) => {
        request
            .get(url)
            .end((error, response) => {
                if (error) {
                    resolve({
                        status: "error",
                        error: error.response.error.message
                    });
                } else {
                    resolve({
                        status: "success",
                        data: response.body
                    })
                }
            })
    });
}