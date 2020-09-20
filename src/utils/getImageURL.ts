import { portrait } from '../config/imagesSizes';

export type Size = keyof typeof portrait;

export default function (path: string, extension: string, size: Size): string {
  const httpsURL = path.replace(/http:\/\//, 'https://');

  return `${httpsURL}/${portrait[size]}.${extension}`;
}
