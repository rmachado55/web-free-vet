"use client";

import styles from "./page.module.css";
import Navbar from "./components/navbar/navbar";
import { Box, Typography } from "@mui/material";
import { useSelectedLayoutSegment } from "next/navigation";
import SearchTab from "./tabs/searchTab";
import MedicalRecordTab from "./tabs/medicalRecordTab";
import PetTab from "./tabs/petTab";
import CheckOutTab from "./tabs/checkOutTab";


export default function Home() {
    
  const activeTab = useSelectedLayoutSegment();
  console.log(activeTab)
  
  const renderContent = (activeTab) => {
    switch (activeTab) {
      case 'search':
        return <SearchTab />;
      case 'medicalrecord':
        return <MedicalRecordTab />;
      case 'pet':
        return <PetTab />;
      case 'checkout':
        return <CheckOutTab />;
      default:
        return null;
    }
  };


  return (
    <>
    <Navbar activeTab={activeTab}/>
    <main className={styles.main}>
      <Typography>FREE VET APP</Typography>
{/* 
      {renderContent(tab)}       */}
    </main>
    </>
  );
  
  
}
