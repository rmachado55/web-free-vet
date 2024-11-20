import styles from "./navbar.module.css";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import PetsIcon from '@mui/icons-material/Pets';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import PointOfSaleIcon  from "@mui/icons-material/PointOfSale";
import { Button, Box, Paper, Typography } from "@mui/material";



export default function Navbar() {
  return (

    <Box className={styles.main}>
      <Paper className={styles.footer}>
        {/* Set routes to each tab */}
        <Button 
          title='BUSCA'
          className={styles.button}
        >
          <ManageSearchIcon fontSize="large"/>
        </Button>
        
        <Button title='CONSULTA' className={styles.button} ><MedicalInformationIcon fontSize="large"/></Button>
        <Button title='CHECK-OUT' className={styles.button} ><PointOfSaleIcon fontSize="large"/></Button>
        <Button title='PRONTUÁRIO' className={styles.button} ><PetsIcon fontSize="large"/></Button>
      </Paper>
    </Box>
  );

  
}