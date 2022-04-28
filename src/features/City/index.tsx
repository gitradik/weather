import { useNavigate, useParams } from "react-router-dom";
import { Box, IconButton, Paper, Tooltip } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import { useGetCityQuery } from "../../services/city.service";
import { useGetWeatherQuery } from "../../services/weather.service";
import { Loader } from "../../core/components/Loader";
import { StandardLayout } from "../../core/components/StandardLayout";
import CityData from "./components/CityData";
import DayForecast from "./components/DayForecast";

function City() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: cityData, isFetching: isFetchingCity } = useGetCityQuery(id!);
  const { data: weatherData, isFetching } = useGetWeatherQuery(cityData?.coord, { skip: !cityData });

  function renderCityData() {
    const { name, sys: { country }, weather, main: { feels_like, temp, humidity, pressure }, wind, dt, timezone } = cityData;
    const { description, icon } = weather[0];
    const { uvi, dew_point, visibility } = weatherData.current;

    return <CityData
      name={name}
      description={description}
      country={country}
      icon={icon}
      temp={temp}
      feelsLike={feels_like}
      uvi={uvi}
      dt={dt}
      timezone={timezone}
      dewPoint={dew_point}
      visibility={visibility}
      humidity={humidity}
      pressure={pressure}
      speed={wind.speed}
    />
  }
  function renderDayForecast() {
    const { timezone } = cityData;
    const { daily } = weatherData;
    return <DayForecast
      data={daily}
      timezone={timezone}
    />;
  }

  return (
    <>
      <StandardLayout>
        <Tooltip title="Back to dashboard">
          <IconButton onClick={() => navigate('/dashboard')}>
            <KeyboardBackspaceIcon />
          </IconButton>
        </Tooltip>
      </StandardLayout>
      <Loader isLoading={isFetching || isFetchingCity}>
        <StandardLayout>
          <Paper sx={{ p: 2 }}>
            {(cityData && weatherData) && renderCityData()}
            {weatherData && <Box pt={3}>
              {renderDayForecast()}
            </Box>}
          </Paper>
        </StandardLayout>
      </Loader>
    </>
  );
}

export default City;
