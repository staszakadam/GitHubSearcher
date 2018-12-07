import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';

import { goToSearch } from '../redux/actions/navigationActions';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    back: {
        marginRight: 30
    }
});

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this._goToSearch = this._goToSearch.bind(this);
    }

    _goToSearch() {
        this.props.goToSearch();
    }

    render() {
        const { classes, text, withBackIcon, nextScreen } = this.props;
        if (nextScreen != location.pathname) {
            return <Redirect to={nextScreen} />
        } else {
            return (
                <div className={classes.root}>
                    <AppBar>
                        <ToolBar>
                            {
                                withBackIcon &&
                                <Fab
                                    color="primary"
                                    className={classes.back}
                                    onClick={this._goToSearch}>
                                    <ArrowBackIcon />
                                </Fab>
                            }
                            <Typography variant="h5" color="inherit">
                                {text}
                            </Typography>
                        </ToolBar>
                    </AppBar>
                </div>
            );
        }
    }
}

HeaderComponent.propTypes = {
    text: PropTypes.string,
    withBackIcon: PropTypes.bool
}

HeaderComponent.defaultProps = {
    text: "Header"
}

const mapStateToProps = (state) => {
    return {
        nextScreen: state.navigation.nextScreen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        goToSearch: () => {
            dispatch(goToSearch());
        }
    }
}

const HeaderComponentWithStyles = withStyles(styles)(HeaderComponent);
export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponentWithStyles);