"use client";

import Image from "next/image";
import logo from "../assets/free_vet_logo.png"
import { Box, Typography } from "@mui/material";
import styles from "./page.module.css";
import Navbar from "./components/navbar/navbar";
import Login from "./login";
import AppVet from "./appvet";

export default function Home() {  
  
  return (
    <>
    <Login/>
    <AppVet/>
    </>
  );  
  
}
