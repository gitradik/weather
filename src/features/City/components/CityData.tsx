import { Box, Divider, Grid, Typography } from "@mui/material";
import moment from "moment";

import { useImageUrl } from "hooks/useImageUrl";

type CityDataProps = {
  name: string;
  description: string;
  country: string;
  icon: string;
  temp: number;
  feelsLike: number;
  uvi: number;
  dt: number;
  timezone: number;
  dewPoint: number;
  visibility: number;
  humidity: number;
  pressure: number;
  speed: number;
};

function CityData({
  name,
  description,
  country,
  icon,
  temp,
  feelsLike,
  uvi,
  dt,
  timezone,
  dewPoint,
  visibility,
  humidity,
  pressure,
  speed,
}: CityDataProps) {
  const getIconUrl = useImageUrl("icon");

  return (
    <Grid container>
      <Grid item xs={12} mb={3}>
        <Typography variant="subtitle2" color="secondary">
          {moment.unix(dt).utc().add(timezone, "s").format("MMM D, h:mma")}
        </Typography>
        <Typography variant="h5" gutterBottom component="div">
          {name}, {country}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" alignItems="center">
          <img
            src={getIconUrl(icon)}
            width="50px"
            height="50px"
            loading="lazy"
          />
          <Typography variant="h5" gutterBottom component="div" mb={0} ml={1}>
            {Math.round(temp)}°С
          </Typography>
        </Box>
        <Box display="flex">
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: "bold", mr: "3px" }}
          >
            Feels like {Math.round(feelsLike)}°С.{" "}
            {description.charAt(0).toUpperCase() + description.slice(1)}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} display="flex" alignItems="center" pt={2}>
        <Divider
          sx={{
            height: "100%",
            mr: 3,
            borderColor: (theme) => theme.palette.secondary.main,
          }}
          orientation="vertical"
        />
        <Box>
          <Typography variant="subtitle2">
            {speed.toPrecision(2)}m/s NNE
          </Typography>
          <Typography variant="subtitle2">Humidity: {humidity}%</Typography>
          <Typography variant="subtitle2">
            Dew point: {Math.round(dewPoint)}°C
          </Typography>
        </Box>
        <Box ml={4}>
          <Typography variant="subtitle2">{pressure}hPa</Typography>
          <Typography variant="subtitle2">UV: {Math.round(uvi)}</Typography>
          <Typography variant="subtitle2">
            Visibility: {(visibility / 1000).toFixed(1)}km
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CityData;
