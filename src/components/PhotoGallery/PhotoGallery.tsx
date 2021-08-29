import React from 'react'
import { Typography } from '@material-ui/core';

import TopLevelContainer from '../../containers/TopLevelContainer';
import images from './imgPull';
// @ts-ignore
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import styles from './PhotoGallery.module.css';
import commonStyles from '../../common/common.module.css';

const Photogallery = () => {
    return (
        <TopLevelContainer>
            <section className={styles.titleContainer}>
                <div className="title">
                    <Typography
                        className={commonStyles.fontTitle}
                        component="h1"
                        align="center"
                    >
                        Gallery
                    </Typography>
                    <Typography>
                        Here are a few photos of our work!
                    </Typography>
                </div>
            </section>
            <section className={styles.photosContainer}>
                <span className={styles.galleryContainer}>
                    <ImageGallery
                        items={images}
                        lazyLoad
                    />
                </span>
            </section>
        </TopLevelContainer>
    )
}

export default Photogallery
