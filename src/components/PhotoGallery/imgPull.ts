
// @ts-ignore
import { ReactImageGalleryItem } from "react-image-gallery";

const imgUrlBuilder = (startRange: number, endRange: number): ReactImageGalleryItem[] => {
	const imageArray = [];

	for (let i = startRange; i <= endRange; i++) {
		const originalBaseUrl = `https://github.com/rGustave07/FiberCoatDeckCo/blob/gallery/src/static-assets/images/image${i}.jpg?raw=true`;
		const thumbnailUrl = `https://github.com/rGustave07/FiberCoatDeckCo/blob/gallery/src/static-assets/images/thumbnails/image${i}thumbnail.jpg?raw=true`;

		imageArray.push({
			original: originalBaseUrl,
			thumbnail: thumbnailUrl,
			originalHeight: 500,
			originalWidth: 500,
			thumbnailHeight: 70,
		});
	}

	return imageArray;
}

const images = imgUrlBuilder(1, 27);

export default images;
