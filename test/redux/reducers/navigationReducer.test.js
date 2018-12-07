import chai from 'chai';
var expect = chai.expect;

import chaiAssertType from 'chai-asserttype';
chai.use(chaiAssertType);


import navigationReducer from "../../../src/redux/reducers/navigationReducer";
import {
    goToResult,
    goToSearch
} from "../../../src/redux/actions/navigationActions";

describe('NAVIGATION REDUCER', () => {
    it('should return the initial store', () => {
        let expectedResult = {
            nextScreen: '/'
        }
        let result = navigationReducer(undefined, {});

        expect(result).to.be.object();
        expect(result).to.deep.equal(expectedResult);
    })
    it('should return store for going to result', () => {
        const defaultStore = {
            nextScreen: '/'
        }

        let expectedResult = {
            nextScreen: '/result/testrepo/javascript'
        }

        let repoName = "testrepo";
        let languages = "javascript";

        let action = goToResult(repoName, languages);
        let result = navigationReducer(defaultStore, action);

        expect(result).to.be.object();
        expect(result).to.deep.equal(expectedResult);
    })
    it('should return store for going to search', () => {
        const defaultStore = {
            nextScreen: '/result/test/test'
        }
        let expectedResult = {
            nextScreen: '/'
        }

        let action = goToSearch();
        let result = navigationReducer(defaultStore, action);

        expect(result).to.be.object();
        expect(result).to.deep.equal(expectedResult);
    })
});