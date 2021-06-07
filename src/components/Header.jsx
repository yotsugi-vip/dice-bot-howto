import React from 'react';
import { Typography, Button, createMuiTheme, ThemeProvider, Box } from "@material-ui/core";
import icon from '../../resouece/icon.png'

const theme = createMuiTheme({
    spacing: 5,
    palette: {
        text: {
            primary: '#ffffff',
            secondary: '#000000',
        },
        primary: {
            main: '#3949ab',
        },
        secondary: {
            main: '#388e3c',
        },
    },
    typography: {
        fontFamily: ['Source Sans Pro'].join(','),
        button: {
            textTransform: 'none'
        }
    }
});

const Header = () => {
    return (
        <div id="HeaderContainer">
            <ThemeProvider theme={theme}>
                <Box m={3} display='flex'>
                    <Box>
                        <img src={icon} width="200px" height="100%"></img>
                    </Box>
                    <div>
                        <Box m={3}>
                            <Typography variant="h3" color="textPrimary">
                                Coin toss and Roll the dice!
                            </Typography>
                        </Box>
                        <Box m={3}>
                            <Button variant="contained" color="secondary">
                                <Typography variant="body1" >
                                    Invite the bot
                                </Typography>
                            </Button>
                        </Box>
                    </div>
                </Box>
            </ThemeProvider>
        </div>
    )
}

export default Header;