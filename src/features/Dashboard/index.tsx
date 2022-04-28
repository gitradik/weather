import { Alert, Divider, Box, Paper, Grid, Theme } from "@mui/material";

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getCityName, setCityName } from '../../store/city';
import { useGetCityListQuery } from "../../services/city.service";
import { Loader } from "../../core/components/Loader";
import { StandardLayout } from "../../core/components/StandardLayout";
import SearchForm from "./components/SearchForm";
import CityData from './components/CityData';

function Dashboard() {
  const dispatch = useAppDispatch();
  const cityName = useAppSelector(getCityName);
  const { data: cityList, isFetching } = useGetCityListQuery(cityName, { skip: !cityName });

  function handleSubmit(value: string) {
    dispatch(setCityName(value));
  }

  function renderCityData(city: any) {
    const { id, name, sys: { country }, clouds, coord, weather, main: { temp, temp_min, temp_max, pressure }, wind } = city;
    const { description, icon } = weather[0];

    return (
      <Grid key={`city_list_${coord.lat}${coord.lon}`} item xs={12}>
        <CityData
          id={id}
          name={name}
          description={description}
          country={country}
          clouds={clouds.all}
          coord={coord}
          icon={icon}
          temp={temp}
          tempMin={temp_min}
          tempMax={temp_max}
          pressure={pressure}
          speed={wind.speed}
        />
        {cityList.at(-1).id !== id && <Divider sx={{ mt: 2 }} />}
      </Grid>
    );
  }

  const hasCityList = Array.isArray(cityList) && !!cityList.length;
  return (
    <>
      <Box py={2} mb={2} display="flex" justifyContent="center" sx={{ backgroundColor: (theme: Theme) => theme.palette.background.light }}>
        <SearchForm defaultValue={cityName} onSubmit={handleSubmit} />
      </Box>
      <Loader isLoading={isFetching}>
        <>
          {
            hasCityList && <StandardLayout>
              <Paper sx={{ p: 2 }}>
                <Grid container spacing={2}>{cityList.map(renderCityData)}</Grid>
              </Paper>
            </StandardLayout>
          }
          {
            (!hasCityList && !!cityName) && <StandardLayout>
              <Alert severity="info">Not found</Alert>
            </StandardLayout>
          }
        </>
      </Loader>
    </>
  );
}

export default Dashboard;