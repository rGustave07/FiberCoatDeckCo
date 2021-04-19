import * as React from 'react';

import {
    Card,
    Typography,
    makeStyles,
} from '@material-ui/core';

import styles from './InformativeCard.module.css';

interface TitleProps {
    title: string | JSX.Element;
}

interface InformativeCardBody {
    children: string | JSX.Element;
}

interface InformativeCardProps {
    children: JSX.Element;
}

const useStyles = makeStyles(theme => ({
    cardRoot: {
        backgroundColor: theme.palette.background.default,
    }
}));

const InformativeCard = (props: InformativeCardProps): JSX.Element => {
    const classes = useStyles();

    return (
        <Card
            className={styles.card}
            classes={{
                root: classes.cardRoot
            }}
            raised
        >
            {props.children}
        </Card>
    );
}

InformativeCard.Title = (props: TitleProps): JSX.Element => {
    return (
        <Typography variant="h4" color="textSecondary">
            <div className={styles.title}>
                {props.title}
            </div>
        </Typography>
    )
};

InformativeCard.Body = (props: InformativeCardBody): JSX.Element => {
    return (
        <>
            <hr className={styles.separator} />
            <Typography component="span" color="textSecondary">
                <div className={styles.body}>
                    {props.children}
                </div>
            </Typography>
        </>
    );
};

export default InformativeCard;