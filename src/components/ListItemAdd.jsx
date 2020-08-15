import React, { Component } from 'react';
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
import AddIcon from '@material-ui/icons/Add';
class ListItemAdd extends Component {
    render() { 
        return ( 
            <ListItem button>
                <ListItemIcon>
                    <AddIcon />
                </ListItemIcon>
                <ListItemText primary="New"/>
            </ListItem>
         );
    }
}
 
export default ListItemAdd;