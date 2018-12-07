import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import HeaderComponent from './HeaderComponent';
import SearchScreen from '../screens/SearchScreen';
import ResultScreen from '../screens/ResultScreen';

const styles = theme => {
    return {
        content: {
            marginTop: theme.mixins.toolbar.minHeight + 15,
            width: "100%"
        },
        container: {
            width: "100%"
        }
    }
};

class LayoutComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { classes } = this.props;
        return (
            <Grid
                id="GitHubSearchLayoutComponent"
                container
                justify="center"
                alignItems="center"
                alignContent="center"
                direction='column'
                spacing={8}
                className={classes.container}>
                <Switch className={classes.container}>
                    <Route exact path='/' render={() => {
                        return <Grid
                            item
                            className={classes.content}>
                            <HeaderComponent text="Search favourites" />
                            <SearchScreen />
                        </Grid>
                    }} />
                    <Route path='/result/:repoName/:language' render={(matchProps) => {
                        return <Grid
                            container
                            className={classes.content}>
                            <HeaderComponent text="Search result" withBackIcon />
                            <ResultScreen {...matchProps} />
                        </Grid>
                    }} />
                </Switch>
            </Grid >
        )
    }
}

export default withStyles(styles)(LayoutComponent);