import React, { Component } from 'react';
import classNames from "classnames";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
import icon from '../constants/icons';
import { withStyles } from "@material-ui/core/styles";
import styles from '../style/navBarStyle';
import Typography from '@material-ui/core/Typography';

class ListItemAdd extends Component {
    render() { 
        const { classes } = this.props;
        return (
            <ListItem button onClick={this.props.onClick} className={classNames(classes.listItem , classes.listButton)}>
                <ListItemIcon>
                    <icon.chartadd />
                </ListItemIcon>
                <ListItemText>
                <Typography variant="h6">
                    Add Chart
                </Typography>
                </ListItemText>
            </ListItem>
         );
    }
}

export default withStyles(styles)(ListItemAdd);