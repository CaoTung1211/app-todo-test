import {
    AppBar,
    FormControl,
    MenuItem,
    Select,
    Toolbar,
    Typography,
    SelectChangeEvent,
    Box,
} from "@mui/material";

import { createTheme } from "@mui/material/styles";
import React, { useState } from "react";
import WelcomeMessage from "./WelcomeMessage";

const useStyles = createTheme((theme: Theme) =>
    createStyles({
        positionSelect: {
            color: "white",
            borderBottom: "1px solid white",
        },
    })
);

const Navbar = () => {
    //Sate default generic
    const [position, setPosition] = useState<string>("Full-stack Developer");
    // Styles
    const classes = useStyles();
    const onPositionChange = (event: SelectChangeEvent<unknown>) => {
        setPosition(event.target.value as string);
    };
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    width={1}
                    py={2}
                >
                    <Typography variant="h6">My movies</Typography>
                    <Box textAlign="center">
                        <WelcomeMessage
                            position={position}
                            // country="Japan"
                        />
                        <Box mt={1}>
                            <FormControl>
                                <Select
                                    value={position}
                                    onChange={onPositionChange}
                                    // className={classes.positionSelect}
                                >
                                    <MenuItem value="Full-stack Developer">
                                        Full-stack Developer
                                    </MenuItem>
                                    <MenuItem value="Front-end Developer">
                                        Front-end Developer
                                    </MenuItem>
                                    <MenuItem value="Back-end Developer">
                                        Back-end Developer
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
