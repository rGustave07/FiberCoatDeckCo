import * as React from 'react';

import clsx from 'clsx';
import { navigate } from "@reach/router";
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    IconButton,
    AppBar,
    Toolbar,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core'

import HomeIcon from '@material-ui/icons/Home';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

import commonStyles from '../../common/common.module.css';
import styles from './ApplicationHeaderBar.module.css';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    }
});

const drawerStates = {
    'On': true,
    'Off': false,
}

const ApplicationHeaderBar = (): JSX.Element => {
    const [shouldShowMenu, setShouldShowMenu] = React.useState(false);
    const classes = useStyles();

    const toggleDrawer = (drawerState: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setShouldShowMenu(drawerState);
    }

    const getIcon = (page: string): JSX.Element | undefined => {
        switch(page) {
            case 'Home':
                return <HomeIcon color="secondary"/>;
            case 'Gallery':
                return <CropOriginalIcon color="secondary"/>;
            case 'Contact':
                return <ContactPhoneIcon color="secondary"/>;
            default:
                console.error(`Couldn't Reconciliate page or icon for page`)
                return;
        }
    };

    const list = (): JSX.Element => (
        <div
            className={clsx(classes.list)}
            role="presentation"
            onClick={toggleDrawer(drawerStates.Off)}
            onKeyDown={toggleDrawer(drawerStates.Off)}
        >
            {/* We can extract this data to a json object */}
            <List>
                {['Home', 'Gallery', 'Contact'].map((text, index): JSX.Element => (
                    <ListItem
                        button
                        key={text}
                        onClick={(): void => {
                            const navigationString = text === "Home" ? `/` : `/${text.toLowerCase()}`
                            navigate(navigationString)
                        }}
                    >
                        <ListItemIcon>{getIcon(text)}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    )

    return (
        <AppBar position="absolute" color="primary">
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={(): void => {
                        setShouldShowMenu(!shouldShowMenu)
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer open={shouldShowMenu} onClose={toggleDrawer(drawerStates.Off)}>
                    {list()}
                </Drawer>
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