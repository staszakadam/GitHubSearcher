import chai from 'chai';
var expect = chai.expect;

import chaiAssertType from 'chai-asserttype';
chai.use(chaiAssertType);

import {
    searchRepo,
    searchRepoSuccess,
    searchRepoError,
    loadOtherLangs,
    loadOtherLangsSuccess,
    loadOtherLangsError
} from '../../../src/redux/actions/gitActions';

describe("GIT ACTIONS", () => {
    describe("searching repo", () => {
        it("should return correct action for attempt searching repo", () => {
            let type = "SEARCH_REPO_ATTEMPT";
            let desc = "samplerepo";
            let lang = "javascript";
            let expectedResult = {
                type: type,
                payload: {
                    desc: "samplerepo",
                    lang: "javascript",
                    page: 1
                }
            }
            let result = searchRepo(desc, lang);

            expect(result).to.be.object();
            expect(result).to.deep.equal(expectedResult);
        })
        it("should return correct action for success searching repo", () => {
            let type = "SEARCH_REPO_SUCCESS";
            let data = [{}];

            let expectedResult = {
                type: type,
                payload: {
                    data: data,
                }
            }
            let result = searchRepoSuccess([{}]);

            expect(result).to.be.object();
            expect(result).to.deep.equal(expectedResult);
        })
        it("should return correct action for error searching repo", () => {
            let type = "SEARCH_REPO_ERROR";
            let error = "error";

            let expectedResult = {
                type: type,
                payload: {
                    error: error,
                }
            }
            let result = searchRepoError("error");

            expect(result).to.be.object();
            expect(result).to.deep.equal(expectedResult);
        })
    })
    describe("loading programming languages", () => {
        it("should return correct action for attempt loading programming languages", () => {
            let type = "LOAD_OTHER_LANGS_ATTEMPT";
            let id = "12345";
            let owner = "testowner";
            let name = "testrepo";

            let expectedResult = {
                type: type,
                payload: {
                    id: id,
                    owner: owner,
                    name: name
                }
            }
            let result = loadOtherLangs("12345", "testowner", "testrepo");

            expect(result).to.be.object();
            expect(result).to.deep.equal(expectedResult);
        })
        it("should return correct action for success loading programming languages", () => {
            let type = "LOAD_OTHER_LANGS_SUCCESS";
            let id = "12345";
            let data = [{ 'python': 1234 }];

            let expectedResult = {
                type: type,
                payload: {
                    id: id,
                    data: data
                }
            }
            let result = loadOtherLangsSuccess([{ 'python': 1234 }], "12345");

            expect(result).to.be.object();
            expect(result).to.deep.equal(expectedResult);
        })
        it("should return correct action for error loading programming languages", () => {
            let type = "LOAD_OTHER_LANGS_ERROR";
            let error = "error";
            let id = 123;

            let expectedResult = {
                type: type,
                payload: {
                    error: error,
                    id: 123
                }
            }
            let result = loadOtherLangsError("error", 123);

            expect(result).to.be.object();
            expect(result).to.deep.equal(expectedResult);
        })
    })
})