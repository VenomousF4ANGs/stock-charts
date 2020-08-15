import React , {Component} from 'react';
import Box from '@material-ui/core/Box';
import Chart from './Chart';
import DateSlider from './DateSlider';

class Home extends Component {
    render() { 
        return ( 
            <Box display="flex" flexDirection="column" >
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