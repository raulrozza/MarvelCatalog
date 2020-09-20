import { portrait } from '../config/imagesSizes';

export default function (
  path: string,
  extension: string,
  size: keyof typeof portrait,
): string {
  const httpsURL = path.replace(/http:\/\//, 'https://');

  return `${httpsURL}/${portrait[size]}.${extension}`;
}
