import chai from 'chai';
var expect = chai.expect;

import chaiAssertType from 'chai-asserttype';
chai.use(chaiAssertType);


import searchReducer from "./../../../src/redux/reducers/searchReducer";
import {
    addToFavourites,
    addToFavouritesSuccess,
    removeFromFavourites,
    removeFromFavouritesSuccess
} from "../../../src/redux/actions/searchActions";

describe('SEARCH REDUCER', () => {
    it('should return the initial store', () => {
        let expectedResult = {
            isAttempt: false,
            favourites: []
        }
        let result = searchReducer(undefined, {});

        expect(result).to.be.object();
        expect(result).to.deep.equal(expectedResult);
    })
    describe('adding to favourites', () => {
        it('should return store for attempt adding to favourites', () => {
            const defaultStore = {
                isAttempt: false,
                favourites: []
            }

            let expectedResult = {
                isAttempt: true,
                favourites: []
            }
            let action = addToFavourites('testrepo', 'javascript')
            let result = searchReducer(defaultStore, action);

            expect(result).to.be.object();
            expect(result).to.deep.equal(expectedResult);
        })
        it('should return store for success adding to favourites', () => {
            const defaultStore = {
                isAttempt: true,
                favourites: []
            }

            let expectedResult = {
                isAttempt: false,
                favourites: [{
                    name: 'testrepo',
                    lang: 'javascript',
                    id: "12345"
                }]
            }
            let action = addToFavouritesSuccess('testrepo', 'javascript', "12345")
            let result = searchReducer(defaultStore, action);

            expect(result).to.be.object();
            expect(result).to.deep.equal(expectedResult);
        })
    })
    describe('remove from favourites', () => {
        it('should return store for attempt removing from favourites', () => {
            const defaultStore = {
                isAttempt: false,
                favourites: [{
                    name: 'testrepo',
                    lang: 'javascript',
                    id: "12345"
                }]
            }

            let expectedResult = {
                isAttempt: true,
                favourites: [{
                    name: 'testrepo',
                    lang: 'javascript',
                    id: "12345"
                }]
            }
            let action = removeFromFavourites('testrepo', 'javascript')
            let result = searchReducer(defaultStore, action);

            expect(result).to.be.object();
            expect(result).to.deep.equal(expectedResult);
        })
        it('should return store for success removing from favourites', () => {
            const defaultStore = {
                isAttempt: true,
                favourites: [{
                    name: 'testrepo',
                    lang: 'javascript',
                    id: "12345"
                }]
            }

            let expectedResult = {
                isAttempt: false,
                favourites: []
            }
            let action = removeFromFavouritesSuccess("12345")
            let result = searchReducer(defaultStore, action);

            expect(result).to.be.object();
            expect(result).to.deep.equal(expectedResult);
        })
    })
});