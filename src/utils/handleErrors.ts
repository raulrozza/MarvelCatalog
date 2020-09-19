import { toast } from 'react-toastify';

export default function (error: Error): void {
  console.error(error);

  toast.error('Houve um problema ao obter os dados');
}
