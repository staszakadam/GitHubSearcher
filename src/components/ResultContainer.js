import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles'

import ResultElement from './ResultElement';

class ResultContainer extends Component {
    render() {
        const { repositories, getOtherLang } = this.props;
        return (
            <Grid
                id='ResultContainer'
                container
                spacing={8}
                direction='row'>
                {repositories.map((repo, idx) => {
                    return <Grid
                        item xl={2}
                        key={`repo-${idx}`}>
                        <ResultElement
                            repository={repo}
                            getOtherLang={getOtherLang} />
                    </Grid>
                })}
            </Grid>
        )
    }
}

ResultContainer.defaultProps = {
    repositories: []
}

ResultContainer.propTypes = {
    repositories: PropTypes.array,
    getOtherLang: PropTypes.func,
}

export default ResultContainer;