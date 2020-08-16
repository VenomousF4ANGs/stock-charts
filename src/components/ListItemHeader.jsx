import React, { Component } from 'react';
import classNames from "classnames";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import icon from '../constants/icons';
import { withStyles } from "@material-ui/core/styles";
import styles from '../style/navBarStyle';
import Typography from '@material-ui/core/Typography';

class ListItemHeader extends Component {
    render() { 
        const { classes } = this.props;
        return ( 
            <ListItem button onClick={this.props.onClick} className={classNames(classes.listItem,classes.listButton)}>
                <ListItemIcon>
                    {this.props.open?<icon.expanded />:<icon.collapsed />}
                </ListItemIcon>
                <ListItemText >
                    <Typography variant="h4" >
                        Stock Charts
                    </Typography>
                </ListItemText>
            </ListItem>
         );
    }
}
 
export default withStyles(styles)(ListItemHeader);