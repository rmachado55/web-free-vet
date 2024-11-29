'use client';

import styles from "./navbar.module.css";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import PetsIcon from '@mui/icons-material/Pets';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import PointOfSaleIcon  from "@mui/icons-material/PointOfSale";
import MenuIcon  from "@mui/icons-material/Menu";
import theme from "../../../../theme";

export async function getServerSideProps(context) {
  const userAgent = context.req.headers["user-agent"] || "";
  const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);

  return {
    props: {
      isMobile,
    },
  };
}

export default function Navbar({activeTab, setActiveTab, isMobile}) {     

  return (    
    <div className={styles.main}>
      <nav className={styles.navbar}>
        <button
          className={styles.button}
          onClick={() => {setActiveTab('search')}}  
          style={{
            backgroundColor: activeTab === 'search' ? theme.palette.primary.main : theme.palette.primary.light,}}
        >
          <ManageSearchIcon fontSize="large"/>
          {isMobile ? null :       
            <p element="span" className={styles.title} >
                BUSCA
            </p>}
        </button>        
        <button  
          className={styles.button}
          onClick={() => {setActiveTab('medicalrecord')}}
          style={{
            backgroundColor: activeTab === 'medicalrecord' ? theme.palette.primary.main : theme.palette.primary.light}}
        >
          <PetsIcon fontSize="large"/>          
            {isMobile ? null :
            <p className={styles.title}>
              ATENDIMENTO
            </p>}
        </button>
        
        <button 
          className={ styles.button}
          onClick={() => {setActiveTab('checkout')}}
          style={{
            backgroundColor: activeTab === 'checkout' ? theme.palette.primary.main : theme.palette.primary.light}}
        >
          <PointOfSaleIcon fontSize="large"/>
          {isMobile ? null :
          <p className={styles.title}>
            CHECK-OUT
          </p>}
        </button>

        <button 
          className={ styles.button}
          onClick={() => {setActiveTab('pet')}}
          style={{
            backgroundColor: activeTab === 'pet' || activeTab === 'tutor' ? theme.palette.primary.main : theme.palette.primary.light}}
        >
          <MedicalInformationIcon fontSize="large"/>
          {isMobile ? null :
          <p className={styles.title}>
            PERFIL
          </p>}
        </button>

        <button
          className={ styles.button}
          onClick={() => {setActiveTab('menu')}}
          style={{
            backgroundColor: activeTab === 'menu' ? theme.palette.primary.main : theme.palette.primary.light}}  
        >
          <MenuIcon fontSize="large"/>
          {isMobile ? null :
          <p className={styles.title}>
            MENU
          </p>
          }
        </button>
      </nav>      
    </div>
  );

  
}