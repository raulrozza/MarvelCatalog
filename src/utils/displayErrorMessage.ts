import { toast } from 'react-toastify';
import { DisplayErrorMessage } from '../interfaces/utils/displayErrorMessage';

const displayErrorMessage: DisplayErrorMessage = (message, messageCode) => {
  toast.error(message, { toastId: messageCode });
};

export default displayErrorMessage;
