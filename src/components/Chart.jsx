import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { LineChart, Line, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
const data = [{name: 'Page A', data: 400},{name: 'Page A', data: 245},{name: 'Page A', data: 466},{name: 'Page A', data: 123},{name: 'Page A', data: 400},{name: 'Page A', data: 245},{name: 'Page A', data: 466},{name: 'Page A', data: 123},{name: 'Page A', data: 400},{name: 'Page A', data: 245},{name: 'Page A', data: 466},{name: 'Page A', data: 123},{name: 'Page A', data: 400},{name: 'Page A', data: 245},{name: 'Page A', data: 466},{name: 'Page A', data: 123} ];


class Chart extends Component {
    render() { 
        return ( 
            <Box m={2} width="auto">
                <Card>
                    <CardMedia>
                        <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={data}>
                                <Line type="monotone" dataKey="data" stroke="#000000" />
                                <XAxis/>
                                <YAxis/>
                                <Tooltip />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardMedia>
                    <CardContent>
                        <Typography color="textPrimary">
                            {this.props.name}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
         );
    }
}
 
export default Chart;