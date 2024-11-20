"use client";

import styles from "./page.module.css";
import Navbar from "./components/navbar/navbar";
import SearchTab from "./tabs/searchTab";
import MedicalRecordTab from "./tabs/medicalRecordTab";
import PetTab from "./tabs/petTab";
import CheckOutTab from "./tabs/checkOutTab";
import MenuTab from "./tabs/menuTab";
import { useEffect, useState } from "react";



export default function Home() {
  useEffect(() => {
    const userAgent = navigator.userAgent || "";
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(userAgent));
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  const [activeTab, setActiveTab] = useState('search');
  
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
      case 'menu':
          return <MenuTab />;

        default:
        return null;
    }
  };
  
  return (
    <>
      <Navbar isMobile ={isMobile} activeTab={activeTab} setActiveTab={setActiveTab}/>
      <main className={styles.main}>
      {renderContent(activeTab)}
    </main>
    </>
  );
  
  
}
