import styles from "./navbar.module.css";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import PetsIcon from '@mui/icons-material/Pets';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';


export default function Navbar() {
  return (
    <main className={styles.main}>
      <div className={styles.footer}>
        <button className={styles.button} >   <ManageSearchIcon fontSize="large"/><p>BUSCA</p></button>
        <button className={styles.button} ><MedicalInformationIcon fontsize="large"/><p>CONSULTA</p></button>
        <button className={styles.button} >CHECK-OUT</button>

        <button className={styles.button} ><PetsIcon fontSize="large"/><p>PRONTUÁRIO</p></button>
      </div>
    </main>
  );

  
}