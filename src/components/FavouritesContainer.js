import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import FavouritesElement from './FavouritesElement';

class FavouritesContainer extends Component {
    constructor(props) {
        super(props);
        this._onDeleteClick = this._onDeleteClick.bind(this);
        this._onSearchClick = this._onSearchClick.bind(this);
    }

    _onDeleteClick(id) {
        this.props.onDeleteClick(id);
    }

    _onSearchClick(name, lang, id) {
        this.props.onSearchClick(name, lang, id);
    }

    render() {
        const { favourites } = this.props;
        return (
            <Grid
                container
                direction='row'
                justify="center"
                alignItems="center"
                alignContent="center"
                spacing={8}>
                {favourites.map((fav) => {
                    return <Grid
                        item xl={2}
                        key={fav.id}>
                        <FavouritesElement
                            name={fav.name}
                            lang={fav.lang}
                            id={fav.id}
                            onDeleteClick={this._onDeleteClick}
                            onSearchClick={this._onSearchClick}
                        />
                    </Grid>
                })}
            </Grid>
        )
    }
}

FavouritesContainer.defaultProps = {
    favourites: []
}

FavouritesContainer.propTypes = {
    favourites: PropTypes.array,
    onSearchClick: PropTypes.func,
    onDeleteClick: PropTypes.func
}

export default FavouritesContainer;