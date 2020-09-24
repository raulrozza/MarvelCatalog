const notificationMessages = {
  0: 'There was a problem fetching the data.',
};

interface NotificationIds {
  [key: string]: keyof typeof notificationMessages;
}

export const notificationIds: NotificationIds = {
  UNKNOWN: 0,
};

export const getNotificationMessage = (
  id: keyof typeof notificationMessages,
): string => {
  return notificationMessages[id];
};
