import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Chip from '@material-ui/core/Chip';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        rigth: 10
    },
    card: {
        flexGrow: 1,
        width: 250
    },
    right: {
        marginLeft: 'auto',
        marginRight: -12,
    }
});

const FavouritesElement = (props) => (
    <Grid item xl={4}>
        <Card className={props.classes.card}>
            <CardContent
                onClick={props.onSearchClick.bind(null, props.name, props.lang, props.id)}>
                <Typography variant="h4" conponent='p' >
                    {props.name}
                </Typography>
            </CardContent>
            <CardActions>
                <Chip
                    color='primary'
                    label={props.lang.display} />
                <Grid item className={props.classes.right}>
                    <IconButton className={props.classes.button} onClick={props.onDeleteClick.bind(null, props.id)} color="primary">
                        <DeleteIcon />
                    </IconButton>
                </Grid>
            </CardActions>
        </Card>
    </Grid>
)

export default withStyles(styles)(FavouritesElement);