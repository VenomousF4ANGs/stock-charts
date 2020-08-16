import React, { Component } from 'react';
import classNames from "classnames";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import icon from '../constants/icons';
import { withStyles } from "@material-ui/core/styles";
import styles from '../style/navBarStyle';
import Typography from '@material-ui/core/Typography';

class ListItemDynamic extends Component {
    render() { 
        const { classes } = this.props;
        return ( 
            <ListItem className={classes.listItem}>
                <ListItemIcon>
                    <icon.chart />
                </ListItemIcon>
                <ListItemText >
                    <Typography variant="h6">
                    {this.props.name}
                    </Typography>
                </ListItemText>
                <ListItemSecondaryAction hidden={!(this.props.open) || (this.props.inTransit)}>
                    <IconButton edge="end" onClick={()=>{this.props.deleteChart(this.props.name)}} className={classNames(classes.listItem,classes.listButton)}>
                      <icon.chartdelete />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
         );
    }
}
 
export default withStyles(styles)(ListItemDynamic);