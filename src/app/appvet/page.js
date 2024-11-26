'use client';

import styles from "./appvet.module.css";
import Navbar from "./navbar/navbar";
import SearchTab from "./tabs/searchTab";
import MedicalRecordTab from "./tabs/medicalRecordTab";
import PetTab from "./tabs/petTab";
import CheckOutTab from "./tabs/checkOutTab";
import MenuTab from "./tabs/menuTab";
import TutorTab from "./tabs/tutorTab";
import { useEffect, useState } from "react";
import { useStore } from "./store/appvet.store";



export default function AppVet(Pet) {
  useEffect(() => {
    const userAgent = navigator.userAgent || "";
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(userAgent));
  }, []);

  
  const [isMobile, setIsMobile] = useState(false);

  const { activeTab, petList, activeProfile, setActiveTab, setPetList, setActiveProfile, tutorList } = useStore();

  const renderContent = (activeTab) => {
    switch (activeTab) {
      case 'search':
        return <SearchTab petList={petList} setActiveProfile={setActiveProfile} setActiveTab={setActiveTab} tutorList={tutorList}/>;
      case 'medicalrecord':
        return <MedicalRecordTab />;
      case 'pet':
        return <PetTab />;
      case 'tutor':
          return <TutorTab />;
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


