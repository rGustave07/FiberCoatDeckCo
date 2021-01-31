import * as React from 'react';

import styles from './Hero.module.css';

interface Props {
    children: JSX.Element;
}

const Hero = (props: Props): JSX.Element => {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroImage}>
                <div className={styles.heroContent}>
                    {props.children}
                </div>
            </div>
        </div>
    )
};

export default Hero;