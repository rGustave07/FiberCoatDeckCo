import * as React from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import {
    Typography,
    IconButton,
    AppBar,
    Toolbar,
    Button,
} from '@material-ui/core'

import commonStyles from '../../common/common.module.css';
import styles from './ApplicationHeaderBar.module.css';

const ApplicationHeaderBar = (): JSX.Element => {
    return (
        <AppBar position="absolute" color="primary">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <div className={`${commonStyles.spaceApart} ${commonStyles.verticalAlignmentCenter}`}>
                    <Typography
                        classes={{
                            root: styles.companyName
                        }}
                        variant="h6"
                    >
                        Fiber-Coat Deck Company
                    </Typography>
                    <Button color="inherit">
                        Request Quote
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default ApplicationHeaderBar;