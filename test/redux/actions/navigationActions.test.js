import chai from 'chai';
var expect = chai.expect;

import chaiAssertType from 'chai-asserttype';
chai.use(chaiAssertType);

import {
    goToResult,
    goToSearch
} from '../../../src/redux/actions/navigationActions';

describe("NAVIGATIONS ACTIONS", () => {
    describe("navigate to", () => {
        it("should return correct action for going to result", () => {
            let type = "GO_TO_RESULT";
            let expectedResult = {
                type: type,
                payload: {
                    screen: '/result/samplerepo/javascript',
                }
            }
            let result = goToResult("samplerepo", "javascript");

            expect(result).to.be.object();
            expect(result).to.deep.equal(expectedResult);
        })
        it("should return correct action for going to search", () => {
            let type = "GO_TO_SEARCH";

            let expectedResult = {
                type: type,
                payload: {
                    screen: '/',
                }
            }
            let result = goToSearch();

            expect(result).to.be.object();
            expect(result).to.deep.equal(expectedResult);
        })
    })
})