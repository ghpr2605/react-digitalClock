import { useEffect, useState } from "react";

const Clock = () => {
  const [dateTime, setDateTime] = useState(new Date());

  const refreshDateTime = () => {
    setDateTime(new Date());
  };

  useEffect(() => {
    const timerId = setInterval(refreshDateTime, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <div>{dateTime.toLocaleTimeString()}</div>;
};
export default Clock;
