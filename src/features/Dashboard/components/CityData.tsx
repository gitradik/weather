import { Box, Typography, Button, Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useImageUrl } from "hooks/useImageUrl";
import { GeoCoordinates } from "services/weather.service";

type CityDataProps = {
  id: number;
  name: string;
  description: string;
  country: string;
  clouds: number;
  coord: GeoCoordinates; 
  icon: string;
  temp: number;
  tempMin: number;
  tempMax: number;
  pressure: number;
  speed: number;
};

function CityData({
  id,
  name,
  country,
  clouds,
  coord,
  description,
  icon,
  temp,
  tempMin,
  tempMax,
  pressure,
  speed
}: CityDataProps) {
  const navigate = useNavigate();
  const getFlagUrl = useImageUrl('flag');
  const getIconUrl = useImageUrl('icon');

  function handleClick() {
    navigate(`/city/${id}`);
  }

  return (
    <Box display="flex" justifyContent="flex-start">
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
            temperature from {tempMin.toPrecision(3)} to {tempMax.toPrecision(3)} °С, wind {speed} m/s. clouds {clouds} %, {pressure} hpa
          </Typography>
        </Box>
        <Typography ml={1}>Geo coords: {coord.lat}, {coord.lon}</Typography>
      </Box>
    </Box>
  );
}

export default CityData;
