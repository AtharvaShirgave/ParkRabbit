//  Frontend Notification View Model

export const createNotification = ({ type, title, message }) => ({
  id: crypto.randomUUID(),
  type,         // success | warning | error | info
  title,
  message,
  timestamp: new Date(),
  read: false,
});
