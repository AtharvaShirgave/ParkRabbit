import { useState } from "react";
import { NotificationContext } from "./NotificationContext";

export default function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (notification) => {
    setNotifications((prev) => [
      {
        id: crypto.randomUUID(),
        read: false,
        timestamp: new Date(),
        ...notification,
      },
      ...prev,
    ]);
  };

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, markAsRead }}
    >
      {children}
    </NotificationContext.Provider>
  );
}
