import React, { Component } from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

class ListItemHeader extends Component {
    render() { 
        return ( 
            <ListItem button onClick={this.props.onClick}>
                <ListItemIcon>
                    {this.props.open?<KeyboardArrowLeftIcon />:<KeyboardArrowRightIcon />}
                </ListItemIcon>
                <ListItemText primary="Title" />
            </ListItem>
         );
    }
}
 
export default ListItemHeader;