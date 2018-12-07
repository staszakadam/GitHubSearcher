import chai from 'chai';
var expect = chai.expect;

import chaiAssertType from 'chai-asserttype';
chai.use(chaiAssertType);

import {
    addToFavourites,
    addToFavouritesSuccess,
    removeFromFavourites,
    removeFromFavouritesSuccess
} from '../../../src/redux/actions/searchActions';

describe("SEARCH ACTIONS", () => {
    describe("adding to favourite", () => {
        it("should return correct action for adding to favourite", () => {
            let type = "ADD_TO_FAVOURITES_ATTEMPT";
            let name = "samplerepo";
            let lang = "javascript";
            let expectedResult = {
                type: type,
                payload: {
                    name: name,
                    lang: lang
                }
            }
            let result = addToFavourites("samplerepo", "javascript");

            expect(result).to.be.object();
            expect(result).to.deep.equal(expectedResult);
        })
        it("should return correct action for success searching repo", () => {
            let type = "ADD_TO_FAVOURITES_SUCCESS";
            let name = "samplerepo";
            let lang = "javascript";
            let id = "12345";

            let expectedResult = {
                type: type,
                payload: {
                    name: name,
                    lang: lang,
                    id: id
                }
            }

            let result = addToFavouritesSuccess("samplerepo", "javascript", "12345");

            expect(result).to.be.object();
            expect(result).to.deep.equal(expectedResult);
        })
    })
    describe("removing from favourite", () => {
        it("should return correct action for attempt removing from favourites", () => {
            let type = "REMOVE_TO_FAVOURITES_ATTEMPT";
            let id = "12345";

            let expectedResult = {
                type: type,
                payload: {
                    id: id
                }
            }
            let result = removeFromFavourites("12345");

            expect(result).to.be.object();
            expect(result).to.deep.equal(expectedResult);
        })
        it("should return correct action for success removing from favourites", () => {
            let type = "REMOVE_TO_FAVOURITES_SUCCESS";
            let id = "12345";

            let expectedResult = {
                type: type,
                payload: {
                    id: id
                }
            }

            let result = removeFromFavouritesSuccess("12345");

            expect(result).to.be.object();
            expect(result).to.deep.equal(expectedResult);
        })
    })
})