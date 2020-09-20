import React, { useMemo } from 'react';

// Assets
import comicPlaceholder from '../../assets/img/placeholders/comic.jpg';

// Types
import { CharacterImageProps } from './types';

// Utils
import getImageURL from '../../utils/getImageURL';

const CharacterImage: React.FC<CharacterImageProps> = ({
  thumbnail,
  size,
  alt,
}) => {
  const thumbnailURL = useMemo(() => {
    return getImageURL(thumbnail.path, thumbnail.extension, size, 'standard');
  }, [thumbnail, size]);

  return (
    <picture>
      <source srcSet={thumbnailURL} />
      <img src={comicPlaceholder} alt={alt} />
    </picture>
  );
};

export default CharacterImage;
