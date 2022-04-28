import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography, styled, Theme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import moment from 'moment';

import { useImageUrl } from '../../../../../hooks/useImageUrl';
import TempTable from './TempTable';
import { Temp, FeelsLike } from '../../../../../services/weather.service';

const StyledTimeBox = styled(Box)(() => ({
  display: 'inline-block',
  textAlign: 'center',
}));
const StyledTimeBoxTypography = styled(Typography)(({ theme }: { theme: Theme }) => ({
  fontWeight: 'bold',
  fontSize: '0.6rem',
  '&:last-child': {
    fontWeight: '300',
    fontSize: theme.typography.subtitle2.fontSize,
  }
}));

type DayDetailProps = {
  date: string;
  timezone: number;
  temp: Temp;
  feelsLike: FeelsLike;
  icon: string;
  description: string;
  rain: number;
  pop: number;
  windSpeed: number;
  pressure: number;
  humidity: number;
  uvi: number;
  dewPoint: number;
  sunrise: number;
  sunset: number;
};

function DayDetail({ date, timezone, temp, feelsLike, icon, description, rain, pop, windSpeed, pressure, humidity, uvi, dewPoint, sunrise, sunset }: DayDetailProps) {
  const getIconUrl = useImageUrl('icon');

  function renderRainValue() {
    const popPercent = pop * 100;
    if (rain !== undefined) {
      return `${rain}mm (${popPercent}%)`;
    }

    return `${popPercent}%`;
  }

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Grid container pr={1}>
          <Grid item xs={5} display="flex" alignItems="center">
            <Typography variant="subtitle2">{date}</Typography>
          </Grid>
          <Grid item xs={3} display="flex" alignItems="center">
            <Box display="flex" alignItems="center">
              <img src={getIconUrl(icon)} width="40px" height="40px" loading='lazy'/>
              <Typography variant="subtitle2">{Math.round(temp.max)} / {Math.round(temp.min)}°С</Typography>
            </Box>
          </Grid>
          <Grid item xs={4} display="flex" alignItems="center" justifyContent="flex-end">
            <Typography
              variant="subtitle2"
              sx={{
                fontSize: '0.75rem',
                maxWidth: '70px',
                textAlign: 'right'
              }}>
              {description}
            </Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container mb={2}>
          <Grid item xs={4}>
            <Typography variant="subtitle2">Rain: {renderRainValue()}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle2">Wind speed: {windSpeed.toPrecision(2)}m/s NNE</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle2">Pressure: {pressure}hPa</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle2">Humidity: {humidity}%</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle2">UV: {Math.round(uvi)}%</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle2">Dew point: {Math.round(dewPoint)}°C</Typography>
          </Grid>
        </Grid>
        <TempTable temp={temp} feelsLike={feelsLike}/>
        <Grid container pt={2}>
          <Grid item xs={2}>
            <StyledTimeBox>
              <StyledTimeBoxTypography>SUNRISE</StyledTimeBoxTypography>
              <StyledTimeBoxTypography>{moment.unix(sunrise).utc().add(timezone, 's').format('h:mma')}</StyledTimeBoxTypography>
            </StyledTimeBox>
          </Grid>
          <Grid item xs={2}>
            <StyledTimeBox>
              <StyledTimeBoxTypography>SUNSET</StyledTimeBoxTypography>
              <StyledTimeBoxTypography>{moment.unix(sunset).utc().add(timezone, 's').format('h:mma')}</StyledTimeBoxTypography>
            </StyledTimeBox>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

export default DayDetail;