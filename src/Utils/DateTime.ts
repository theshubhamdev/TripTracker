// 23 Nov
const convertDateTimeToDDMonthFormat = (inputDate?: Date): string => {
  const date = inputDate || new Date();

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
  };

  return date.toLocaleString("en-IN", options);
};

// Convert date to HH:MM i.e. 22:30
const convertDateTimeToHHMM = (date: Date) => {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};

const getCurrentTimeInMins = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  return hours * 60 + minutes;
};

// 01:02 to 62
const convertHHColonMMToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(":");
  return parseInt(hours) * 60 + parseInt(minutes);
};

export {
  convertDateTimeToDDMonthFormat,
  convertHHColonMMToMinutes,
  getCurrentTimeInMins,
  convertDateTimeToHHMM,
};
