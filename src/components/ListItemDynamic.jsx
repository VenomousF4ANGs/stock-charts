import React, { Component } from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import icon from '../constants/icons';

class ListItemDynamic extends Component {
    render() { 
        return ( 
            <ListItem>
                <ListItemIcon>
                    <icon.chart />
                </ListItemIcon>
                <ListItemText primary={this.props.name}/>
                <ListItemSecondaryAction hidden={!(this.props.open) || (this.props.inTransit)}>
                    <IconButton edge="end" onClick={()=>{this.props.deleteChart(this.props.name)}}>
                      <icon.chartdelete />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
         );
    }
}
 
export default ListItemDynamic;