import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class DateSlider extends Component {
    render() { 
        return ( 
            <Box m={2} width="auto">
                <Card>
                    <CardContent>
                        <Typography color="textPrimary">
                            Date Slider
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
         );
    }
}
 
export default DateSlider;