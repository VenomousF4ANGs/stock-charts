import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import styles from '../style/bodyStyle';
import { LineChart, Line, Tooltip, XAxis, ResponsiveContainer , Label} from 'recharts';
const data = [{name: 'Page A', data: 400},{name: 'Page A', data: 245},{name: 'Page A', data: 466},{name: 'Page A', data: 123},{name: 'Page A', data: 400},{name: 'Page A', data: 245},{name: 'Page A', data: 466},{name: 'Page A', data: 123},{name: 'Page A', data: 400},{name: 'Page A', data: 245},{name: 'Page A', data: 466},{name: 'Page A', data: 123},{name: 'Page A', data: 400},{name: 'Page A', data: 245},{name: 'Page A', data: 466},{name: 'Page A', data: 123} ];


class Chart extends Component {
    render() { 
        const { classes } = this.props;
        return ( 
            <Box m={2} mb={0} width="auto">
                <Card className={classNames(classes.chart)}>
                    <ResponsiveContainer width="99%" height={200}>
                            <LineChart  data={data} margin={{right: 16, left: 24, top:16 ,bottom:16}}>
                                <Line isAnimationActive={false} type="monotone" dataKey="data" stroke="#000000" />
                                <XAxis>
                                    <Label value="Name" offset={0} position="insideBottomLeft" />
                                </XAxis>
                                <Tooltip />
                            </LineChart>
                    </ResponsiveContainer>
                </Card>
            </Box>
         );
    }
}
 
export default withStyles(styles)(Chart);