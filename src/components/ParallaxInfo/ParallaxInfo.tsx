import * as React from 'react'

import commonStyles from '../../common/common.module.css';
import styles from './ParallaxInfo.module.css';

const Parallaxinfo: React.FC = (props) => {
    return (
        <div className={[commonStyles.fullHeightContainer, styles.bgImgParallax].join(' ')}>
            {props.children}
        </div>
    )
}

export default Parallaxinfo
