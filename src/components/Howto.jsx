import { Typography, Paper, Grid } from '@material-ui/core';
import React from 'react';
import Command from '../../Command.json';

const HowtoCommand = (props) => {
    return (
        <Grid container spacing={3} justify="space-evenly">
            <Grid item xs={2}>
                <Typography>{props.command}</Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography>|</Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography>{props.explain}</Typography>
            </Grid>
        </Grid>
    )
}

const Howto = () => {
    return (
        <div id="HowtoContainer">
            <Grid container spacing={1} justify="center">
                <Grid item xs={10}>
                    <Paper style={{
                        backgroundColor: "#333333"
                    }}>
                        <HowtoCommand command={"COMMAND"} explain={"EXPLAIN"} />
                        {Command.Command.map((v, i) => (
                            <div style={{
                                backgroundColor: i % 2 == 0 ? "#555555" : "none",
                            }}>
                                <HowtoCommand command={v.name} explain={v.explain} />
                            </div>
                        ))}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}



export default Howto;