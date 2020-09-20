import { portrait, standard } from '../config/imagesSizes';

export type Size = keyof typeof portrait | keyof typeof standard;
type Format = 'portrait' | 'standard';

const getImgFormat = (format: Format) => {
  switch (format) {
    case 'standard':
      return standard;
    case 'portrait':
    default:
      return portrait;
  }
};

export default function (
  path: string,
  extension: string,
  size: Size,
  format: Format = 'portrait',
): string {
  const httpsURL = path.replace(/http:\/\//, 'https://');
  const imgFormat = getImgFormat(format);

  return `${httpsURL}/${imgFormat[size]}.${extension}`;
}
