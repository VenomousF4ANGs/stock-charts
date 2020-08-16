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

class NavBar extends Component {
    state = {
        open: true,
        inTransit:false
    };
    handleDrawerToggle = () => {
        this.setState({ open: !this.state.open , inTransit:true });
        setTimeout(()=>{
            this.setState({inTransit:false})
        },500)
    };
    render() {
        const { classes } = this.props;
        return (
            <Drawer variant="permanent" open={this.state.open} 
              className={classNames(classes.drawer,
                // classes.darkBackground, 
                {
                [classes.drawerOpen]: this.state.open,
                [classes.drawerClose]: !this.state.open,
              })}
              classes={{
                paper: classNames(
                  classes.darkBackground,
                  {
                  [classes.drawerOpen]: this.state.open,
                  [classes.drawerClose]: !this.state.open
                  })
              }}
            >
                <ListItemHeader onClick={this.handleDrawerToggle} open={this.state.open}/>
                <Divider className={classes.divider}/>
                {this.props.state.permanentItems.map((item)=>{
                    return (<ListItemPermanent name={item.name} icon={item.icon} open={this.state.open} key={item.name}/>)
                })}
                <Divider className={classes.divider}/>
                {this.props.state.dynamicItems.map((item)=>{
                    return (<ListItemDynamic name={item.name} open={this.state.open} inTransit={this.state.inTransit} deleteChart={this.props.deleteChart} key={item.name}/>)
                })}
                <ListItemAdd onClick={this.props.addChart}/>
                <Divider className={classes.divider}/>
            </Drawer>
        );
      }
}
 
export default withStyles(styles, { withTheme: true })(NavBar);