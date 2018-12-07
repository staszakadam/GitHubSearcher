import React, { Component } from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';

import CircularProgress from '@material-ui/core/CircularProgress';

import { searchRepo, loadOtherLangs } from '../redux/actions/gitActions';

import ResultContainer from '../components/ResultContainer';

class ResultScreen extends Component {
    constructor(props) {
        super(props);
        window.onscroll = (evt) => {
            if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 50)) {
                this._getMoreResults();
            }
        }
        this._getMoreResults = this._getMoreResults.bind(this);
        this._getOtherLang = this._getOtherLang.bind(this);
    }

    _getMoreResults() {
        let { isAttempt, page } = this.props;
        const { repoName, language } = this.props.match.params;
        if (!isAttempt) {
            this.props.search(repoName, language, page + 1);
        }
    }

    _getOtherLang(repoId, owner, name) {
        this.props.loadOtherLangs(repoId, owner, name);
    }

    componentDidMount() {
        const { repoName, language } = this.props.match.params;
        this.props.search(repoName, language);
    }

    render() {
        const { repositories, isAttempt } = this.props;
        return (
            <React.Fragment>
                <Grid item xl={12}>
                    <ResultContainer
                        repositories={repositories}
                        getOtherLang={this._getOtherLang} />
                </Grid>
                <Grid item>
                    {isAttempt && <CircularProgress />}
                </Grid>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAttempt: state.git.isAttempt,
        page: state.git.page,
        repositories: state.git.repositories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        search: (name, lang, page) => {
            dispatch(searchRepo(name, lang, page));
        },
        loadOtherLangs: (id, owner, name) => {
            dispatch(loadOtherLangs(id, owner, name))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultScreen)