import { Box } from "@mui/material";
import { useStore } from "../store/appvet.store";
import styles from "./tab.module.css";
import Image from "next/image";


export default function PetTab () {
  


  const {activeProfile, petList, tutorList} = useStore()

  return (
      <Box className={styles.tab}>
        <Box className={styles.paper}>
        <Image className={styles.avatar} src={`http://www.veterinariapassofundo.com/assets/${activeProfile.id}.jpg`} width={60} height={60} alt={activeProfile.name} />
        <h1 style={{ display:'flex'}} >{activeProfile.name}</h1>
        <button>WhatsApp</button>
        <button>Rotas no GPS</button>
        <button>Iniciar Consulta</button>
        <button>Editar perfil</button>
        </Box>
        
        <p>{activeProfile.gender}</p>
        <p>Raça: {activeProfile.breed}</p>
      </Box>
  );
}