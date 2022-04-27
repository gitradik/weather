import { Box, Typography, Button, Chip } from "@mui/material";

import { useImageUrl } from "../hooks/useImageUrl";

type CityDataProps = {
  id: number;
  name: string;
  description: string;
  country: string;
  clouds: number;
  lat: number;
  lon: number; 
  icon: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  speed: number;
};

function CityData({
  id,
  name,
  country,
  clouds,
  lat,
  lon,
  description,
  icon,
  temp,
  temp_min,
  temp_max,
  pressure,
  speed
}: CityDataProps) {
  const getFlagUrl = useImageUrl('flag');
  const getIconUrl = useImageUrl('icon');

  function handleClick() {
    console.log('id', id)
  }

  return (
    <>
      <img src={getIconUrl(icon)} width="50px" height="50px" loading='lazy'/>
      <Box ml={3}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Button onClick={handleClick} variant="text" color="secondary" sx={{ mr: 1, fontWeight: 'bold', textDecoration: 'underline' }}>
            {name}, {country}
          </Button>
          <img src={getFlagUrl(country)} alt={`${name}, ${country}`} loading='lazy'/>
          <Typography sx={{ fontWeight: 'bold' }} variant="subtitle2" ml={1}>{description}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, ml: 1 }}>
          <Chip color="primary" label={`${temp.toPrecision(3)}°С`} sx={{ fontWeight: 'bold', mr: 1 }}/>
          <Typography variant="subtitle2">
            temperature from {temp_min.toPrecision(3)} to {temp_max.toPrecision(3)} °С, wind {speed} m/s. clouds {clouds} %, {pressure} hpa
          </Typography>
        </Box>
        <Typography ml={1}>Geo coords: {lat}, {lon}</Typography>
      </Box>
    </>
  );
}

export default CityData;
