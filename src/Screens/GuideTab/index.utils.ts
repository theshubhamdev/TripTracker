function getYesterdayDatesByTime(hours: number, minutes: number): Date {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  yesterday.setHours(hours, minutes, 0, 0);
  return yesterday;
}

function getTodayDatesByTime(hours: number, minutes: number): Date {
  const today = new Date();
  today.setHours(hours, minutes, 0, 0);
  return today;
}

function getTomorrowsDatesByTime(hours: number, minutes: number): Date {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(hours, minutes, 0, 0);
  return tomorrow;
}

const yesterdayPlaces = [
  {
    time: getYesterdayDatesByTime(0, 0),
    title: "Maldives",
    description: "Save the Turtles",
    weather: require('../../../Assets/Icons/MoonCloudFastWind.png'),
  },
  {
    time: getYesterdayDatesByTime(8, 0),
    title: "Golden beach",
    description: "Surfing on the sea",
    weather: require('../../../Assets/Icons/CloudZap.png'),
  },
  {
    time: getYesterdayDatesByTime(16, 0),
    title: "Coconut grove",
    description: "BBQ party by the sea",
    weather: require('../../../Assets/Icons/MoonFastWind.png'),
  },
  {
    time: getYesterdayDatesByTime(23, 59),
    title: "Maldives Islands",
    description: "Sea blowing",
    weather: require('../../../Assets/Icons/SunCloudAngledRain.png'),
  },
];

const todaysPlaces = [
  {
    time: getTodayDatesByTime(0, 0),
    title: "Maldives",
    description: "Save the Turtles",
  },
  {
    time: getTodayDatesByTime(8, 0),
    title: "Golden beach",
    description: "Surfing on the sea",
  },
  {
    time: getTodayDatesByTime(16, 0),
    title: "Coconut grove",
    description: "BBQ party by the sea",
  },
  {
    time: getTodayDatesByTime(23, 59),
    title: "Maldives Islands",
    description: "Sea blowing",
  },
];

const tomorrowPlaces = [
  {
    time: getTomorrowsDatesByTime(0, 0),
    title: "Maldives",
    description: "Save the Turtles",
  },
  {
    time: getTomorrowsDatesByTime(8, 0),
    title: "Golden beach",
    description: "Surfing on the sea",
  },
  {
    time: getTomorrowsDatesByTime(16, 0),
    title: "Coconut grove",
    description: "BBQ party by the sea",
  },
  {
    time: getTomorrowsDatesByTime(23, 59),
    title: "Maldives Islands",
    description: "Sea blowing",
  },
];

export { yesterdayPlaces, todaysPlaces, tomorrowPlaces };
