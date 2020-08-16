import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import styles from '../style/bodyStyle';

class DateSlider extends Component {
    render() { 
        const {classes} = this.props;
        return ( 
            <Box m={2}  mb={0} width="auto">
                <Card className={classNames(classes.dateslider)}>
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
 
export default withStyles(styles)(DateSlider);