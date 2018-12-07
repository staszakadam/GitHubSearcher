import { addresses } from '../config/config';

export function getSearchUrlByNameOrDescription(nameOrDescription = "", language = "", page = 1) {
    return `${addresses.serchRepo}?q=${nameOrDescription}+language:${language}&sort=stars&order=desc&page=${page}`;
}

export function getRepoLanguagesUrl(owner = "", name = "") {
    return `${addresses.checkLanguages}${owner}/${name}/languages`
}