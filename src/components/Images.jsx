import { Paper, Typography, Grid } from '@material-ui/core';
import React from 'react';
import ChatImage from '../../resouece/chat.png';

const Images = () => {
    return (
        <div id="ImagesContainer">
            <Grid container justify="center">
                <Grid item>
                    <Typography>
                        description
                    </Typography>
                    <Typography>
                        XXXXXXXXXXXXXXXXXXX
                    </Typography>
                    <Typography>
                        XXXXXXXXXXXXXXXXXXX
                    </Typography>
                    <Typography>
                        XXXXXXXXXXXXXXXXXXX
                    </Typography>
                </Grid>
                <Grid item>
                    <Paper>
                        <img src={ChatImage} />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Images;