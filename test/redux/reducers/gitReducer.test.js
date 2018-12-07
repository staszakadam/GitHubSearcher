import chai from 'chai';
var expect = chai.expect;

import chaiAssertType from 'chai-asserttype';
chai.use(chaiAssertType);


import gitReducer from "./../../../src/redux/reducers/gitReducer";
import {
    searchRepo,
    searchRepoSuccess,
    searchRepoError,
    loadOtherLangs,
    loadOtherLangsSuccess,
    loadOtherLangsError
} from "../../../src/redux/actions/gitActions";

describe('GIT REDUCER', () => {
    it('should return the initial store', () => { 
        let expectedResult = {
            isAttempt: false,
            desc: "",
            lang: "",
            page: 0,
            repositories: [],
            error: null
        }
        let result = gitReducer(undefined, {});

        expect(result).to.be.object();
        expect(result).to.deep.equal(expectedResult);        
    })
    describe('searching repo', () => {
        it('should return store for attempt searching', () => {
            let desc = "testrepo";
            let lang = "python";

            const defaultStore = {
                isAttempt: false,
                desc: "",
                lang: "",
                page: 0,
                repositories: [],
                error: null
            }

            let expectedResult = {
                isAttempt: true,
                desc: desc,
                lang: lang,
                page: 0,
                repositories: [],
                error: null
            }

            let action = searchRepo(desc, lang)
            let result = gitReducer(defaultStore, action);          
    
            expect(result).to.be.object();
            expect(result).to.deep.equal(expectedResult);        
        })
        it('should return store for success searching', () => {
            let desc = "testrepo";
            let lang = "python";              

            const defaultStore = {
                isAttempt: true,
                desc: desc,
                lang: lang,
                page: 0,
                repositories: [],
                error: null
            }

            let expectedResult = {
                isAttempt: false,
                desc: desc,
                lang: lang,
                page: 1,
                repositories: [{
                    id: 1234,
                    name: "testrepo",
                    owner: "testowner",
                    description: "description repo",
                    stars: 1000,
                    isAttempt: false,
                    languages: [],
                    error: false
                }],
                error: null
            }

            let data = [{
                id: 1234,
                name: "testrepo",
                full_name: "testowner/reponame",
                description: "description repo",
                stargazers_count: 1000}];
                
            let action = searchRepoSuccess(data);            
            let result = gitReducer(defaultStore, action);          
    
            expect(result).to.be.object();
            expect(result).to.deep.equal(expectedResult);        
        })
        it('should return store for error searching', () => {
            let desc = "testrepo";
            let lang = "python";              

            const defaultStore = {
                isAttempt: true,
                desc: desc,
                lang: lang,
                page: 0,
                repositories: [],
                error: null
            }

            let expectedResult = {
                isAttempt: false,
                desc: desc,
                lang: lang,
                page: 0,
                repositories: [],
                error: "error"
            }
                          
            let action = searchRepoError("error");            
            let result = gitReducer(defaultStore, action);          
    
            expect(result).to.be.object();
            expect(result).to.deep.equal(expectedResult);        
        })
    })
    describe('load programming languages', () => {
        it('should return store for attempt loading programing language for repo', ()=> {
            let desc = "testrepo";
            let lang = "python";              
    
            const defaultStore = {
                isAttempt: false,
                desc: desc,
                lang: lang,
                page: 1,
                repositories: [{
                    id: 1234,
                    name: "testrepo",
                    owner: "testowner",
                    description: "description repo",
                    stars: 1000,
                    isAttempt: false,
                    languages: [],
                    error: false
                }],
                error: null
            }
    
            let expectedResult = {
                isAttempt: false,
                desc: desc,
                lang: lang,
                page: 1,
                repositories: [{
                    id: 1234,
                    name: "testrepo",
                    owner: "testowner",
                    description: "description repo",
                    stars: 1000,
                    isAttempt: true,
                    languages: [],
                    error: false
                }],
                error: null
            }
    
            let id = 1234;
            let owner = "testowner";
            let name = "testrepo";
            
            let action = loadOtherLangs(id, owner, name);            
            let result = gitReducer(defaultStore, action);          
    
            expect(result).to.be.object();
            expect(result).to.deep.equal(expectedResult);     
        })    
        it('should return store for success loading programing language for repo', ()=> {
            let desc = "testrepo";
            let lang = "python";              
    
            const defaultStore = {
                isAttempt: false,
                desc: desc,
                lang: lang,
                page: 1,
                repositories: [{
                    id: 1234,
                    name: "testrepo",
                    owner: "testowner",
                    description: "description repo",
                    stars: 1000,
                    isAttempt: true,
                    languages: [],
                    error: false
                }],
                error: null
            }
    
            let expectedResult = {
                isAttempt: false,
                desc: desc,
                lang: lang,
                page: 1,
                repositories: [{
                    id: 1234,
                    name: "testrepo",
                    owner: "testowner",
                    description: "description repo",
                    stars: 1000,
                    isAttempt: false,
                    languages: [
                        "python",
                        "javascript",
                        "c"
                    ],
                    error: false
                }],
                error: null
            }
    
            let data = {                
                python: 123,
                javascript: 456,
                c: 789               
            }
            let id = 1234;
            
            
            let action = loadOtherLangsSuccess(data, id);            
            let result = gitReducer(defaultStore, action);          
    
            expect(result).to.be.object();
            expect(result).to.deep.equal(expectedResult);     
        })    
        it('should return store for error loading programing language for repo', ()=> {
            let desc = "testrepo";
            let lang = "python";              
    
            const defaultStore = {
                isAttempt: false,
                desc: desc,
                lang: lang,
                page: 1,
                repositories: [{
                    id: 1234,
                    name: "testrepo",
                    owner: "testowner",
                    description: "description repo",
                    stars: 1000,
                    isAttempt: true,
                    languages: [],
                    error: false
                }],
                error: null
            }
    
            let expectedResult = {
                isAttempt: false,
                desc: desc,
                lang: lang,
                page: 1,
                repositories: [{
                    id: 1234,
                    name: "testrepo",
                    owner: "testowner",
                    description: "description repo",
                    stars: 1000,
                    isAttempt: false,
                    languages: [],
                    error: "error"
                }],
                error: null
            }
    
            let error = "error";
            let id = 1234;
            
            
            let action = loadOtherLangsError(error, id);            
            let result = gitReducer(defaultStore, action);          
    
            expect(result).to.be.object();
            expect(result).to.deep.equal(expectedResult);     
        })    
    })
});