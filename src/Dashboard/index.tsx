import { Box, Paper, Grid, Typography, Button, Chip } from "@mui/material";

import { useGetCityListQuery } from "../services/city.service";
import { useImageUrl } from "../hooks/useImageUrl";
import SearchField from "../core/components/SearchField";

function Dashboard() {
  const { data: cityList } = useGetCityListQuery('London');
  const getFlagUrl = useImageUrl('flag');
  const getIconUrl = useImageUrl('icon');

  function renderCityData(city: any) {
    const { id, name, sys: { country }, clouds, coord, weather, main: { temp, temp_min, temp_max, pressure }, wind } = city;
    const { description, icon } = weather[0];

    return (
      <Grid key={`city_list_${id}`} item xs={12} display="flex" justifyContent="center">
        <img src={getIconUrl(icon)} width="50px" height="50px" loading='lazy'/>
        <Box ml={3}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Button variant="text" color="secondary" sx={{ mr: 1, fontWeight: 'bold', textDecoration: 'underline' }}>
              {name}, {country}
            </Button>
            <img src={getFlagUrl(country)} alt={`${name}, ${country}`} loading='lazy'/>
            <Typography sx={{ fontWeight: 'bold' }} variant="subtitle2" ml={1}>{description}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, ml: 1 }}>
            <Chip color="primary" label={`${temp.toPrecision(3)}°С`} sx={{ fontWeight: 'bold', mr: 1 }}/>
            <Typography variant="subtitle2">
              temperature from {temp_min.toPrecision(3)} to {temp_max.toPrecision(3)} °С, wind {wind.speed} m/s. clouds {clouds.all} %, {pressure} hpa
            </Typography>
          </Box>
          <Typography ml={1}>Geo coords: {coord.lat}, {coord.lon}</Typography>
        </Box>
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