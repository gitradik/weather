import {
  TableContainer,
  Paper,
  TableCell,
  TableHead,
  TableRow,
  Table,
  TableBody,
  styled,
} from "@mui/material";
import { Temp, FeelsLike } from "services/weather.service";

const StyledPaper = styled(Paper)(() => ({
  boxShadow: "none",
}));
const StyledTableRow = styled(TableRow)(() => ({
  "&:last-child td, &:last-child th": { border: 0 },
}));
const StyledTableCell = styled(TableCell)(() => ({
  borderBottom: 0,
}));

type TempTableProps = {
  temp: Temp;
  feelsLike: FeelsLike;
};

function TempTable({ temp, feelsLike }: TempTableProps) {
  return (
    <TableContainer component={StyledPaper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell align="right">Morning</StyledTableCell>
            <StyledTableCell align="right">Afternoon</StyledTableCell>
            <StyledTableCell align="right">Evening</StyledTableCell>
            <StyledTableCell align="right">Night</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row" sx={{ pl: 0 }}>
              TEMPERATURE
            </StyledTableCell>
            <StyledTableCell align="right">
              {Math.round(temp.morn)}°C
            </StyledTableCell>
            <StyledTableCell align="right">
              {Math.round(temp.day)}°C
            </StyledTableCell>
            <StyledTableCell align="right">
              {Math.round(temp.eve)}°C
            </StyledTableCell>
            <StyledTableCell align="right">
              {Math.round(temp.night)}°C
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row" sx={{ pl: 0 }}>
              FEELS LIKE
            </StyledTableCell>
            <StyledTableCell align="right">{feelsLike.morn}</StyledTableCell>
            <StyledTableCell align="right">{feelsLike.day}</StyledTableCell>
            <StyledTableCell align="right">{feelsLike.eve}</StyledTableCell>
            <StyledTableCell align="right">{feelsLike.night}</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TempTable;
