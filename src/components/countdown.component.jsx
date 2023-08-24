import { Box } from "@mui/material";
import "./countdown.styles.css";
import { useCountdown } from "../utils/useCountdown";

const Countdown = () => {
  const THREE_DAYS_IN_MS = 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  const [, hours, minutes, seconds] = useCountdown(dateTimeAfterThreeDays);

  const times = [
    { value: hours, type: "horas" },
    { value: minutes, type: "minutos" },
    { value: seconds, type: "segundos" },
  ];

  return (
    <Box className="countdown-container">
      {times.map(({ value, type }) => (
        <div key={type} style={{ display: "flex" }}>
          <div className="countdown">
            <p>{value}</p>
            <span>{type}</span>
          </div>
          {type !== "segundos" && ":"}
        </div>
      ))}
    </Box>
  );
};

export default Countdown;
