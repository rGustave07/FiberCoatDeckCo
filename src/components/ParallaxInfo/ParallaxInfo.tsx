import * as React from 'react'

import commonStyles from '../../common/common.module.css';
import styles from './ParallaxInfo.module.css';

interface Props {
    orientation: 'horizontal' | 'vertical';
}

const Parallaxinfo: React.FC<Props> = (props): JSX.Element => {
    return (
        <div className={[
            commonStyles.fullHeightContainer,
            styles.bgImgParallax,
            styles.containment
        ].join(' ')}>
            <section className={styles.fourGrid}>
                {props.children}
            </section>
        </div>
    )
}

export default Parallaxinfo
