import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    card: {
        // display: "flex",
        maxWidth: 1000
        // flexDirection: "collumn"
    },
    cardContent: {
        display: "flex",
        flexDirection: "collumn"
    },
    button: {
        // width: "100%",
        justifyContent: 'center'
    },
    control: {
        width: 300,
        marginLeft: 10,
        marginRight: 10
    }
});

class SearchCriteriaComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            nameHelper: "0/50",
            lang: ""
        }
        this._onRepoNameChange = this._onRepoNameChange.bind(this);
        this._onLangChange = this._onLangChange.bind(this);
        this._onAddToFavouritesClick = this._onAddToFavouritesClick.bind(this);
        this._isFormValid = this._isFormValid.bind(this);
    }

    _onRepoNameChange(evt) {
        if (evt.target.value.length <= 50) {
            this.setState({
                name: evt.target.value,
                nameHelper: `${evt.target.value.length}/50`
            });
        }
        evt.preventDefault();
    }

    _onLangChange(evt) {
        this.setState({
            lang: evt.target.value
        });
        evt.preventDefault();
    }

    _onAddToFavouritesClick() {
        let langs = this.props.languages;
        this.props.onAddToFavouritesClick(
            this.state.name,
            {
                display: langs[this.state.lang],
                value: this.state.lang
            });
        this.setState({
            name: "",
            lang: "",
            nameHelper: "0/50"
        })
    }

    _isFormValid() {
        let { name, lang } = this.state;
        return (name !== "" && lang !== "") ? true : false;
    }

    render() {
        const { classes, languages } = this.props;
        const { name, lang } = this.state;
        const langs = Array.from(Object.keys(this.props.languages));
        return (
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Grid container spacing={8}>
                        <FormControl className={classes.control}>
                            <TextField
                                id="SearchField"
                                inputProps={{
                                    maxLength: 50
                                }}
                                label="Repo name or description"
                                value={name}
                                onChange={this._onRepoNameChange}
                                helperText={this.state.nameHelper}
                            />
                        </FormControl>
                        <FormControl className={classes.control}>
                            <InputLabel htmlFor="language">Language</InputLabel>
                            <Select
                                id="LanguageSelect"
                                inputProps={{
                                    id: 'language',
                                }}
                                value={lang}
                                onChange={this._onLangChange}>
                                {langs.map((lang, i) => {
                                    return <MenuItem
                                        key={`lang-${i}`}
                                        value={lang}
                                        name={languages[lang]}>{languages[lang]}
                                    </MenuItem>
                                })}
                            </Select>
                        </FormControl>
                        <FormControl
                            className={classes.button}>
                            <Button
                                disabled={!this._isFormValid()}
                                onClick={this._onAddToFavouritesClick}
                                color="primary">
                                + ADD TO LIST
                            </Button>
                        </FormControl>
                    </Grid>
                </CardContent>
            </Card>
        )
    }
}

SearchCriteriaComponents.defaultProps = {
    languages: {}
};

SearchCriteriaComponents.propTypes = {
    languages: PropTypes.object,
    onAddToFavouritesClick: PropTypes.func.isRequired
}

export default withStyles(styles)(SearchCriteriaComponents);