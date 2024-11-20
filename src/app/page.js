import styles from "./page.module.css";
import Navbar from "./components/navbar/navbar";
import Router from "next/router";

export default function Home() {
  return (
    <main className={styles.main}>
     <Router></Router>
      <Navbar />
    </main>
  );

  
}
