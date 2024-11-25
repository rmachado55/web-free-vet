import styles from "./tab.module.css";
import Image from "next/image";

export default function SearchTab({ petList, setActiveProfile, setActiveTab }) {
  if (!Array.isArray(petList)) {
    return <div>No pets found</div>;
  }
  function handleClickPet(pet) {
    setActiveProfile(pet);
    setActiveTab('pet');
  }
  

  return (
    <div className={styles.tab}>
      <div className={styles.paper}>
        <form>
          <input type="text" placeholder="Search" />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className={styles.cardList}>
        {petList.map((pet, index) => (
          <div className={styles.cardContainer} onClick={() => handleClickPet(pet)} key={index}>
            <div className={styles.cardImageContainer}>
              <Image className={pet.gender === 'Macho' ? styles.cardImageMale : styles.cardImageFemale} width={60} height={60} src={`http://www.veterinariapassofundo.com/assets/${pet.id}.jpg`} alt={pet.name} />
              <p>{pet.gender}</p>
            </div>
            <div>
            <h2>{pet.name}</h2>
            <div className={styles.cardData}>
  
            <p>{pet.breed}</p>            
            <p>{ birthToYearsConversion(pet.birthDate) }</p>
            </div>            
          </div>
          <div className={styles.cardButton}>
          <button type="submit">Ficha Médica</button>
          <button type="submit">Iniciar Consulta</button>
          
          </div>         
          </div>
        ))}
      </div>
    </div>
  );
}

export function birthToYearsConversion(birthDate){
  const today = new Date();
  const birth = new Date(birthDate);
  const years = today.getFullYear() - birth.getFullYear();
  const months = today.getMonth() - birth.getMonth();

  if (years === 0) {
    if (months === 0) {
      const days = today.getDate() - birth.getDate();
      return `${days} dias`;
    } else if (months === 1) {
      return `${months} mês`;
    } else {
      return `${months} meses`;
    }
  } else if (years === 1) {
    if (months === 0) {
      return `${years} ano`;
    } else if (months === 1) {
      return `${years} ano e ${months} mês`;
    } else {
      return `${years} ano e ${months} meses`;
    }
  } else {
    if (months === 0) {
      return `${years} anos`;
    } else if (months === 1) {
      return `${years} anos e ${months} mês`;
    } else {
      return `${years} anos e ${months} meses`;
    }
  }
}