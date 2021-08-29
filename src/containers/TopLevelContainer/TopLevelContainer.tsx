import { Paper } from '@material-ui/core'
import React from 'react'

import styles from './TopLevelContainer.module.css';

const Toplevelcontainer: React.FC = (props) => {
    return (
        <Paper
            className={styles.topLevelLayout}
            elevation={0}
            square
        >
            {props.children}
        </Paper>
    )
}

export default Toplevelcontainer
