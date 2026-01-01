import { useNotifications } from "./NotificationContext";

export default function NotificationList() {
  const { notifications, markAsRead } = useNotifications();

  return (
    <div className="w-80 bg-white shadow-xl rounded-lg p-3">
      {notifications.length === 0 && (
        <p className="text-sm text-gray-500">No notifications</p>
      )}

      {notifications.map((n) => (
        <div
          key={n.id}
          className={`p-2 rounded mb-2 cursor-pointer ${
            n.read ? "bg-gray-100" : "bg-blue-50"
          }`}
          onClick={() => markAsRead(n.id)}
        >
          <div className="font-medium">{n.title}</div>
          <div className="text-sm text-gray-600">{n.message}</div>
        </div>
      ))}
    </div>
  );
}
