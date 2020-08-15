import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import NavBar from './components/Navbar';
import Home from './components/Home';
import CssBaseline from '@material-ui/core/CssBaseline';
import icon from './constants/icons';
import * as _ from "lodash";

class App extends Component {

  state = {
    selectedApi:{
      name:"alphavantage",
      key:""
    },
    config:{
      symbol:"",
      dateRange:{
        "from":"",
        "to":""
      }
    },
    permanentItems:[
      {name:"Config",icon:icon.config},
      {name:"Symbol",icon:icon.symbol},
      {name:"Date Range",icon:icon.datepicker}
    ],
    dynamicItems:[
      {name:"Chart 1"},
    ]
  }

  addChart = ()=>{
    let max = _.max(
      this.state.dynamicItems.map((item)=>{
        return parseInt(item.name.split(" ")[1])
      })
    ) + 1
    max = max?max:1;
    // console.log(max)
    this.state.dynamicItems.push({name:"Chart "+max})
    this.setState({dynamicItems:this.state.dynamicItems})
  }

  deleteChart = (name)=>{
    // console.log(name)
    let dynamicItems = this.state.dynamicItems.filter((item)=>{return item.name!==name})
    this.setState({dynamicItems})
  }

  render() {
    return (
      <div className="App">
        <CssBaseline/>
        <Box display="flex" flexDirection="row" >
          <Box>
            <NavBar state={this.state} addChart={this.addChart} deleteChart={this.deleteChart}/>
          </Box>
          <Box flexGrow={1}>
            <Home state={this.state} />
          </Box>
        </Box>
      </div>
    )
  }
  
}

export default App;
