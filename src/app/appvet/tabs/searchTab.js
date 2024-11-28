import { useState } from "react";
import styles from "./tab.module.css";
import Image from "next/image";
import birthToYearsConversion from "../../utils/birthToYearsConversion";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PetsIcon from '@mui/icons-material/Pets';
import { Tutors } from "../store/mocks/tutors";
import { GiCat, GiSittingDog } from "react-icons/gi";
import { FaClinicMedical } from "react-icons/fa";
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';



export default function SearchTab({ petList, setActiveProfile, setActiveTab, tutorList }) {
  
  const [search, setSearch] = useState('');
  const [tutorsFilter, settutorsFilter] = useState(false);
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

  const filteredTutors = tutorList.filter((tutor) => {
    const tutorName = tutor.name.toLowerCase();
    const searchTerm = search.toLowerCase();
    return tutorName.includes(searchTerm);
  });

  function handleClickPet(pet) {
    setActiveProfile(pet);
    setActiveTab('pet');
  }

  function handleClickMedicalRecord(pet) {
    setActiveProfile(pet);
    setStatus('Open');
    setActiveTab('medicalrecord');
  }

  function handleClickTutor(tutor) {
    setActiveProfile(tutor);
    setActiveTab('tutor');
  }

  return (
    <div className={styles.tab}>
      <div className={styles.paper}>
      <form>
          <ManageSearchIcon fontSize="large"/>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Nome do PET ou TUTOR" />          
        </form>
      </div>
      <div className={styles.cardList}>
        {filteredPets.map((pet, index) => (
          <div className={styles.cardContainer} key={index} >
            <div className={styles.cardImageContainer}>
              <Image className={pet.gender === 'Macho' ? styles.cardImageMale : styles.cardImageFemale} width={60} height={60} src={`http://www.veterinariapassofundo.com/assets/${pet.id}.jpg`} alt={pet.name} />
              <div className={styles.specieIcon}>
              {
              pet.specie === 'Cão' ? <GiSittingDog  fontSize={20} /> : <GiCat fontSize={20} />
            }
              </div>
            </div>
            <div>
              <h3>{pet.name}</h3>
              <h5>Tutor: {pet.tutor.name}</h5>
            </div>
            <div className={styles.cardInfos}>
            <div className={styles.cardData}>  
                  <p>{pet.breed}</p>            
                  <p>{ birthToYearsConversion(pet.birthDate) }</p>                  
                </div>                            
            </div>
          <div>
            
          </div>
          <div className={styles.cardActions}>
            <button className={styles.cardButton} onClick={() => handleClickPet(pet)}type="submit"><MedicalInformationIcon fontSize="medium"/></button>
            <button className={styles.cardButton} onClick={() => handleClickMedicalRecord(pet)}type="submit"><FaClinicMedical fontSize={24}/></button>          
          </div>         
          </div>
        ))}
        {filteredTutors.map((tutor, index) => (         
          <div className={styles.cardContainer} key={index}>

          <div className={styles.cardImageContainer}>              
            </div>
          <div className={styles.cardContainer}>
            <AccountBoxIcon fontSize="large"/>
            <h2>{tutor.name}</h2>
            <div className={styles.cardData}>            
            </div>            
          </div>
          <div className={styles.cardButton}>
          <button onClick={() => handleClickTutor(tutor)}type="submit">Ficha Médica</button>
          <button onClick={() => handleClickMedicalRecord(tutor)}type="submit">Iniciar Consulta</button>
          
          </div>         
          </div>
          ))                 
        }
      </div>
    </div>
  );
}