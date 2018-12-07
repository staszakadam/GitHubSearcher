import chai from 'chai';
var expect = chai.expect;

import { getSearchUrlByNameOrDescription, getRepoLanguagesUrl } from '../../src/helpers/urlHelper';

describe("HELPERS", () => {
    describe("urlHelper", () => {
        it("should return correct url for searching repo", () => {
            let desc = "samplerepo";
            let lang = "javascript";
            let expectedResult = "https://api.github.com/search/repositories?q=samplerepo+language:javascript&sort=stars&order=desc&page=1";
            let result = getSearchUrlByNameOrDescription(desc, lang);
            expect(result).to.equal(expectedResult);
        })
        it("should return correct url for loading more search result", () => {
            let desc = "samplerepo";
            let lang = "javascript";
            let expectedResult = "https://api.github.com/search/repositories?q=samplerepo+language:javascript&sort=stars&order=desc&page=4";
            let result = getSearchUrlByNameOrDescription(desc, lang, 4);
            expect(result).to.equal(expectedResult);
        })
        it("should return correct url for loading programing languages for repo", () => {
            let owner = "thottaps";
            let name = "SampleRepo";
            let expectedResult = "https://api.github.com/repos/thottaps/SampleRepo/languages";
            let result = getRepoLanguagesUrl(owner, name);
            expect(result).to.equal(expectedResult);
        })
    })
})