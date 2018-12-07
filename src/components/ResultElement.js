import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    card: {
        width: 400,
        marginBottom: 20
    },
    center: {
        display: 'flex',
        justifyContent: 'center'
    },
    stars: {
        marginTop: 20
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        [theme.breakpoints.up('sm')]: {
            marginRight: -8,
        },
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    }
});

class ResultElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: false
        }
        this._onExpandClick = this._onExpandClick.bind(this);
    }
    _onExpandClick() {
        const { id, owner, name } = this.props.repository;
        const { isExpand } = this.state;
        if (!isExpand) {
            this.props.getOtherLang(id, owner, name);
        }
        this.setState(state => ({ isExpand: !this.state.isExpand }));
    };
    render() {
        const { classes, repository } = this.props;
        const { isExpand } = this.state;
        return (<Grid item lg={4}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography component="p">
                        {repository.name}
                    </Typography>
                    <Typography component="p">
                        {repository.description}
                    </Typography>
                    <Chip
                        className={classes.stars}
                        color="secondary"
                        label={`${repository.stars} stars`} />
                </CardContent>
                <CardActions className={classes.center} disableActionSpacing>
                    <IconButton
                        className={classnames(classes.expand, {
                            [classes.expandOpen]: isExpand,
                        })}
                        onClick={this._onExpandClick}>
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={isExpand} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Grid
                            id={`LangContainer${repository.name}`}
                            container
                            direction='row'
                            justify="center"
                            alignItems="center"
                            alignContent="center">
                            {repository.isAttempt && <CircularProgress />}
                            {repository.languages.map((lang, idx) => {
                                return <Chip
                                    key={`progLang-${idx}`}
                                    color='primary'
                                    label={lang} />
                            })}
                        </Grid>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>)
    }
}


ResultElement.propTypes = {
    repository: PropTypes.object,
    getOtherLang: PropTypes.func
}

export default withStyles(styles)(ResultElement);