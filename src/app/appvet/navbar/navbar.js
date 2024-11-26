'use client';

import styles from "./navbar.module.css";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import PetsIcon from '@mui/icons-material/Pets';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import PointOfSaleIcon  from "@mui/icons-material/PointOfSale";
import MenuIcon  from "@mui/icons-material/Menu";

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
            backgroundColor: activeTab === 'search' ? 'cyan' : '#f2f2f2',}}
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
            backgroundColor: activeTab === 'medicalrecord' ? 'cyan' : '#f2f2f2',}}
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
            backgroundColor: activeTab === 'checkout' ? 'cyan' : '#f2f2f2',}}
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
            backgroundColor: activeTab === 'pet' || activeTab === 'tutor' ? 'cyan' : '#f2f2f2'}}
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
            backgroundColor: activeTab === 'menu' ? 'cyan' : '#f2f2f2'}}  
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