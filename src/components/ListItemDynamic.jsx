import React, { Component } from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import TimelineIcon from '@material-ui/icons/Timeline';
import DeleteIcon from '@material-ui/icons/Delete';
class ListItemDynamic extends Component {
    render() { 
        return ( 
            <ListItem button>
                <ListItemIcon>
                    <TimelineIcon />
                </ListItemIcon>
                <ListItemText primary={this.props.name}/>
                <ListItemSecondaryAction hidden={!this.props.open}>
                    <IconButton edge="end">
                      <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
         );
    }
}
 
export default ListItemDynamic;