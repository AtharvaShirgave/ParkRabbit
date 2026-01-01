import { useNotifications } from "../notifications/useNotifications";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
} from "@mui/material";

export default function NotificationComponent() {
  const { notifications, markAsRead } = useNotifications();

  if (notifications.length === 0) {
    return (
      <Typography color="text.secondary">
        No notifications yet
      </Typography>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {notifications.map((n) => (
        <Card
          key={n.id}
          sx={{
            backgroundColor: n.read ? "inherit" : "rgba(25,118,210,0.08)",
          }}
          onClick={() => markAsRead(n.id)}
        >
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h6">{n.title}</Typography>
              <Chip
                size="small"
                label={n.type}
                color={getChipColor(n.type)}
              />
            </Box>

            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              {n.message}
            </Typography>

            <Typography variant="caption" color="text.secondary">
              {new Date(n.timestamp).toLocaleString()}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

function getChipColor(type) {
  switch (type) {
    case "success":
      return "success";
    case "warning":
      return "warning";
    case "error":
      return "error";
    default:
      return "info";
  }
}
