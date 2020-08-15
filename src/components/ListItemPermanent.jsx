import React, { Component } from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

class ListItemPermanent extends Component {
    render() { 
        return ( 
            <ListItem button>
                <ListItemIcon>
                    <this.props.icon />
                </ListItemIcon>
                <ListItemText primary={this.props.name}/>
            </ListItem>
         );
    }
}
 
export default ListItemPermanent;