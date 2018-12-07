import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import SearchCriteriaComponent from '../components/SearchCriteriaComponent';
import FavouritesContainer from '../components/FavouritesContainer';

import { addToFavourites, removeFromFavourites } from '../redux/actions/searchActions';
import { goToResult } from '../redux/actions/navigationActions';

const JsonLang = require('../../lang.json');

const styles = theme => ({
    search: {
        width: "100%",
        display: 'flex',
        justifyContent: 'center'
    },
    favourites: {
        marginTop: 20
    }
});

class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this._onAddToFavouritesClick = this._onAddToFavouritesClick.bind(this);
        this._onRemoveFromFavouritesClick = this._onRemoveFromFavouritesClick.bind(this);
        this._onSearchClick = this._onSearchClick.bind(this);
    }

    _onAddToFavouritesClick(name, lang) {
        this.props.addToFavourites(name, lang);
    }

    _onRemoveFromFavouritesClick(id) {
        this.props.removeFromFavourites(id)
    }

    _onSearchClick(name, lang) {
        this.props.goToResult(name, lang.value);
    }

    render() {
        const { favourites, nextScreen, classes } = this.props;
        if (nextScreen != location.pathname) {
            return <Redirect to={nextScreen} />
        }
        return (
            <React.Fragment>
                <Grid item className={classes.search}>
                    <SearchCriteriaComponent
                        languages={JsonLang}
                        onAddToFavouritesClick={this._onAddToFavouritesClick} />
                </Grid>
                <Grid item className={classes.favourites}>
                    <FavouritesContainer
                        favourites={favourites}
                        onDeleteClick={this._onRemoveFromFavouritesClick}
                        onSearchClick={this._onSearchClick} />
                </Grid>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        favourites: state.search.favourites,
        nextScreen: state.navigation.nextScreen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToFavourites: (name, lang) => {
            dispatch(addToFavourites(name, lang));
        },
        removeFromFavourites: (id) => {
            dispatch(removeFromFavourites(id));
        },
        goToResult: (repoName, lang) => {
            dispatch(goToResult(repoName, lang));
        }
    }
}

const SearchScreenWithStyles = withStyles(styles)(SearchScreen);
export default connect(mapStateToProps, mapDispatchToProps)(SearchScreenWithStyles);