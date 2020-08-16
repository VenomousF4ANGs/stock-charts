import React , {Component} from 'react';
import Box from '@material-ui/core/Box';
import Chart from './Chart';
import DateSlider from './DateSlider';
// import { withStyles } from "@material-ui/core/styles";
// import styles from '../style/bodyStyle';

class Home extends Component {
    render() { 
        // const { classes } = this.props;
        return ( 
            <Box display="flex" flexDirection="column">
                <DateSlider/>
                {this.props.state.dynamicItems.map((item)=>{
                    return (
                        <Chart key={item.name} name={item.name}/>
                    )
                })}
            </Box>
         );
    }
}
 
export default Home;