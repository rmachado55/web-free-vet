import styles from "./tab.module.css";
import Image from "next/image";

export default function PetTab ({activeProfile, petList}) {
  
  function loadPet(activeProfile) {
    const pet = petList.find(pet => pet.id === activeProfile.id);
    return pet;
  }

  return (
      <div className="">
        <div className={styles.paper}>
        <Image className={styles.avatar} src={`http://www.veterinariapassofundo.com/assets/${loadPet(activeProfile).id}.jpg`} width={60} height={60} alt={loadPet(activeProfile).name} />
        <h1 style={{ display:'flex'}} >{loadPet(activeProfile).name}</h1>
        <button>WhatsApp</button>
        <button>Rotas no GPS</button>
        <button>Iniciar Consulta</button>
        <button>Editar perfil</button>
        </div>
        
        <p>{loadPet(activeProfile).gender}</p>
        <p>Raça: {loadPet(activeProfile).breed}</p>
      </div>
  );
}