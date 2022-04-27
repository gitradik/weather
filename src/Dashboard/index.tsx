import { Box, Paper, Grid } from "@mui/material";

import { useGetCityListQuery } from "../services/city.service";
import SearchField from "../core/components/SearchField";
import CityData from './CityData';

function Dashboard() {
  const { data: cityList } = useGetCityListQuery('London');

  function renderCityData(city: any) {
    const { id, name, sys: { country }, clouds, coord, weather, main: { temp, temp_min, temp_max, pressure }, wind } = city;
    const { description, icon } = weather[0];

    return (
      <Grid key={`city_list_${id}`} item xs={12} display="flex" justifyContent="center">
        <CityData
          id={id}
          name={name}
          description={description}
          country={country}
          clouds={clouds.all}
          lat={coord.lat}
          lon={coord.lon}
          icon={icon}
          temp={temp}
          temp_min={temp_min}
          temp_max={temp_max}
          pressure={pressure}
          speed={wind.speed}
        />
      </Grid>
    );
  }

  return (
    <>
      <Box p={2} display="flex" justifyContent="center">
        <SearchField />
      </Box>
      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 700,
          flexGrow: 1,
        }}
      >
        <Grid container spacing={2}>
          {cityList ? cityList.map(renderCityData) : <Grid item xs={12}>Not Found</Grid>}
        </Grid>
      </Paper>
    </>
  );
}

export default Dashboard;