import { portrait } from '../config/imagesSizes';

export default function (
  path: string,
  extension: string,
  size: keyof typeof portrait,
): string {
  return `${path}/${portrait[size]}.${extension}`;
}
