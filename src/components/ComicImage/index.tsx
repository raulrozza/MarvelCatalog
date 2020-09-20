import React, { useMemo } from 'react';

// Assets
import comicPlaceholder from '../../assets/img/placeholders/comic.jpg';

// Types
import { ComicImageProps } from './types';

// Utils
import getImageURL from '../../utils/getImageURL';

const ComicImage: React.FC<ComicImageProps> = ({ thumbnail, size, alt }) => {
  const thumbnailURL = useMemo(() => {
    return getImageURL(thumbnail.path, thumbnail.extension, size);
  }, [thumbnail, size]);

  return (
    <picture>
      <source srcSet={thumbnailURL} />
      <img src={comicPlaceholder} alt={alt} />
    </picture>
  );
};

export default ComicImage;
