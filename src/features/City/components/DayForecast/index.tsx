import { Typography } from "@mui/material";
import moment from "moment";

import DayDetail from "./DayDetail";

type DayForecastProps = {
  data: any[];
  timezone: number;
};

function DayForecast({ data, timezone }: DayForecastProps) {
  function renderDayDetail({
    dt,
    temp,
    feels_like,
    weather,
    rain,
    pop,
    wind_speed,
    pressure,
    humidity,
    uvi,
    dew_point,
    sunrise,
    sunset,
  }: any) {
    const { icon, description } = weather[0];
    return (
      <DayDetail
        key={`day_forecast_detail_${dt}`}
        date={moment.unix(dt).utc().add(timezone, "s").format("ddd MMM D")}
        timezone={timezone}
        temp={temp}
        feelsLike={feels_like}
        icon={icon}
        description={description}
        rain={rain}
        pop={pop}
        windSpeed={wind_speed}
        pressure={pressure}
        humidity={humidity}
        uvi={uvi}
        dewPoint={dew_point}
        sunrise={sunrise}
        sunset={sunset}
      />
    );
  }

  return (
    <div>
      <Typography variant="subtitle1" fontWeight="bold">
        {data.length}-day forecast
      </Typography>
      {data.map(renderDayDetail)}
    </div>
  );
}

export default DayForecast;
