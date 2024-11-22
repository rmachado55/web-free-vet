"use client";

import Image from "next/image";
import logo from "../assets/free_vet_logo.png"
import { Box, Typography } from "@mui/material";
import styles from "./page.module.css";
import Navbar from "./components/navbar/navbar";

export default function Login() {  
  
  return (
    <>
      <Box>
        <Image src={logo} alt="Logo" width={100} height={100}/>
        <Typography className={styles.title} element="h1">Free Vet Web App</Typography>
        <Box>
          <Typography>Aplicação web para veterinários a domicílio</Typography>          
        </Box>
        <Typography>Login</Typography>
        <Typography>Senha</Typography>
      </Box>     
    </>
    
  );
  
  
}
