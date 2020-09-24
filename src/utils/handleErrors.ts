import { AxiosError } from 'axios';

// Utils
import displayErrorMessage from './displayErrorMessage';
import {
  getNotificationMessage,
  notificationIds,
} from '../config/notificationMessages';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isAxiosError = (error: any): error is AxiosError =>
  error.isAxiosError || false;

export default function (error: Error | AxiosError): void {
  if (!isAxiosError(error))
    return displayErrorMessage(
      getNotificationMessage(notificationIds.UNKNOWN),
      notificationIds.UNKNOWN,
    );

  const response = error.response;

  if (!response?.data)
    return displayErrorMessage(
      getNotificationMessage(notificationIds.UNKNOWN),
      notificationIds.UNKNOWN,
    );

  const { code, message } = response.data;

  displayErrorMessage(message, code);
}
