'use client';

import styles from "./navbar.module.css";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import PetsIcon from '@mui/icons-material/Pets';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import PointOfSaleIcon  from "@mui/icons-material/PointOfSale";
import MenuIcon  from "@mui/icons-material/Menu";
import { Button, Box, Paper, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Navbar(activeTab) {
  const router = useRouter();

  function handleClick(tab){
    console.log(tab);
    router.push(tab);
    alert('Clicou em ' + tab);
  }
  
  return (    
    <Box className={styles.main}>
      <Paper className={styles.navbar}>
        {/* Set routes to each tab */}
        <Button           
          className={ styles.button}
          onClick={() => {handleClick('/search')}}
        >
        <ManageSearchIcon fontSize="large"/>
        <Typography element="span" className={styles.title}>
              BUSCA
        </Typography>
        </Button>
        
        <Button  className={styles.button} >
          <MedicalInformationIcon fontSize="large"/>
            <Typography className={styles.title}>
              CONSULTA


            </Typography>
        </Button>
        <Button className={ styles.button}>
          <PointOfSaleIcon fontSize="large"/>
          <Typography className={styles.title}>
            CHECK-OUT
          </Typography>
        </Button>        
        <Button className={ styles.button}>
          <MenuIcon fontSize="large"/>
          <Typography className={styles.title}>
            MENU
          </Typography>
        </Button>

        <Button className={ styles.button}>
          <PetsIcon fontSize="large"/>
          <Typography className={styles.title}>
            PET
          </Typography>
        </Button>
      </Paper>      
    </Box>
  );

  
}