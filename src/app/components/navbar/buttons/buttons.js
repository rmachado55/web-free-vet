/* eslint-disable react/jsx-no-undef */
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import { Typography } from '@mui/material';


export default function Button( IconComponent, text) {
  return (
    <Box>
      <IconComponent />
      <Typography>{text}</Typography>
    </Box>      
  );
}