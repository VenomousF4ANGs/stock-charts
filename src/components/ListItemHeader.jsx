import React, { Component } from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import icon from '../constants/icons';



class ListItemHeader extends Component {
    render() { 
        return ( 
            <ListItem button onClick={this.props.onClick}>
                <ListItemIcon>
                    {this.props.open?<icon.expanded />:<icon.collapsed />}
                </ListItemIcon>
                <ListItemText primary="Stock Charts" />
            </ListItem>
         );
    }
}
 
export default ListItemHeader;