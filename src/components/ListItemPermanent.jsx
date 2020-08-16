import React, { Component } from 'react';
import classNames from "classnames";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import styles from '../style/navBarStyle';
import Typography from '@material-ui/core/Typography';

class ListItemPermanent extends Component {
    render() { 
        const { classes } = this.props;
        return ( 
            <ListItem button className={classNames(classes.listItem,classes.listButton)}>
                <ListItemIcon>
                    <this.props.icon />
                </ListItemIcon>
                <ListItemText>
                    <Typography variant="h6">
                        {this.props.name}
                    </Typography>
                </ListItemText>
            </ListItem>
         );
    }
}
 
export default withStyles(styles)(ListItemPermanent);