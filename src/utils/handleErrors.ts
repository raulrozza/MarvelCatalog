import { toast } from 'react-toastify';

export default function (error: Error): void {
  console.error(error);

  toast.error('There was a problem fetching the data.');
}
