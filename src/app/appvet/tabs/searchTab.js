import { useState } from "react";
import styles from "./tab.module.css";
import Image from "next/image";
import birthToYearsConversion from "../../utils/birthToYearsConversion";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import PetsIcon from '@mui/icons-material/Pets';
import { Tutors } from "../store/mocks/tutors";
import { GiCat, GiSittingDog } from "react-icons/gi";
import { FaClinicMedical } from "react-icons/fa";
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { Box, Button, Paper, Typography } from "@mui/material";
import theme from "../../theme/theme";

export default function SearchTab({ petList, setActiveProfile, setActiveTab, tutorList }) {
  console.log(petList)
  const [search, setSearch] = useState('');
  const [tutorsFilter, setTutorsFilter] = useState(false);
  const [dogsFilter, setDogsFilter] = useState(false);
  const [catsFilter, setCatsFilter] = useState(false);
  
  if (!Array.isArray(petList)) {
    return <div>No pets found</div>;
  }
  
  const filteredPets = petList.filter((pet) => {
    const petName = pet.name.toLowerCase();
    const searchTerm = search.toLowerCase();
    return petName.includes(searchTerm);
  });

  function handleClickPet(pet) {
    setActiveProfile(pet);
    setActiveTab('pet');
  }

  function handleClickMedicalRecord(pet) {
    setActiveProfile(pet);
    setActiveTab('medicalrecord');
  }

  function handleClickTutor(tutor) {
    setActiveProfile(tutor);
    setActiveTab('tutor');
  }



  return (
    <Box className={styles.tab}>
      <div className={styles.paper}>
      <form>
          <ManageSearchIcon fontSize="large"/>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Nome do PET ou TUTOR" />          
        </form>
      </div>
      <div className={styles.cardList}>
        {filteredPets.map((pet, index) => (
          <div className={styles.cardContainer} key={index} >

              <Image className={pet.gender === 'Macho' ? styles.cardImageMale : styles.cardImageFemale} width={64} height={64} src={`http://www.veterinariapassofundo.com/assets/${pet.id}.jpg`} alt={pet.name} />
              <div className={styles.specieIcon}>
              {
              pet.specie === 'Cão' ? <GiSittingDog  fontSize={24} /> : <GiCat fontSize={24} />
            }
              </div>

            <Box className={styles.cardInfos}>
            <Typography element="h2" fontWeight={600} style={{ textAlignLast: '-moz-initial'}} >{pet.name}</Typography>
              <Typography style={{ textAlignLast: '-moz-initial'}} element="h3">{pet.breed}</Typography>
              <Typography style={{ textAlignLast: '-moz-initial'}} element="h3">Tutor: {pet.tutor.name}</Typography>
            </Box>
          <Box color={theme.palette.secondary.main} className={styles.cardActions}>
          <Box className={styles.cardButton} onClick={() => handleClickTutor(pet.tutor.id)}type="submit"><AccountBoxIcon fontSize="large" /></Box>  
            <Box className={styles.cardButton} onClick={() => handleClickPet(pet)}type="submit"><MedicalInformationIcon fontSize="large" /></Box>
            <Box className={styles.cardButton} onClick={() => handleClickMedicalRecord(pet)}type="submit"><FaClinicMedical fontSize={32} /></Box> 
             
                  
          </Box>         
          </div>
        ))}        
      </div>
    </Box>
  );
}