import React, { Component } from 'react';
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import styles from '../style/navBarStyle';
import ListItemHeader from './ListItemHeader';
import ListItemPermanent from './ListItemPermanent';
import ListItemDynamic from './ListItemDynamic';
import ListItemAdd from './ListItemAdd';
import DateRangeIcon from '@material-ui/icons/DateRange';
import SettingsIcon from '@material-ui/icons/Settings';
import AssignmentIcon from '@material-ui/icons/Assignment';

class NavBar extends Component {
    state = {
        open: true,
        permanentItems:[
            {name:"Config",icon:SettingsIcon},
            {name:"Symbol",icon:AssignmentIcon},
            {name:"Date Range",icon:DateRangeIcon}
        ],
        dynamicItems:[
            {name:"Chart 1"},
            {name:"Chart 2"},
            {name:"Chart 3"}
        ]
    };
    handleDrawerToggle = () => {
        this.setState({ open: !this.state.open });
    };
    render() {
        const { classes } = this.props;
        return (
            <Drawer variant="permanent" open={this.state.open} 
              className={classNames(classes.drawer, {
                [classes.drawerOpen]: this.state.open,
                [classes.drawerClose]: !this.state.open
              })}
              classes={{
                paper: classNames({
                  [classes.drawerOpen]: this.state.open,
                  [classes.drawerClose]: !this.state.open
                })
              }}
            >
                <ListItemHeader onClick={this.handleDrawerToggle} open={this.state.open}/>
                <Divider />
                {this.state.permanentItems.map((item)=>{
                    return (<ListItemPermanent name={item.name} icon={item.icon} open={this.state.open} key={item.name}/>)
                })}
                <Divider />
                {this.state.dynamicItems.map((item)=>{
                    return (<ListItemDynamic name={item.name} open={this.state.open} key={item.name}/>)
                })}
                <ListItemAdd/>
                <Divider />
            </Drawer>
        );
      }
}
 
export default withStyles(styles, { withTheme: true })(NavBar);;