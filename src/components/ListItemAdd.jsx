import React, { Component } from 'react';
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
import icon from '../constants/icons';

class ListItemAdd extends Component {
    render() { 
        return ( 
            <ListItem button onClick={this.props.onClick}>
                <ListItemIcon>
                    <icon.chartadd />
                </ListItemIcon>
                <ListItemText primary="New"/>
            </ListItem>
         );
    }
}
 
export default ListItemAdd;