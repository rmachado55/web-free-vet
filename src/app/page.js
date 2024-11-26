import Link from "next/link";
import logo from "../assets/free_vet_logo.png"
import Image from "next/image";

export default async function Home() {   
  

  return (
    <main>           
      <Image src={logo} alt="Logo" width={100} height={100}/>
      <p>Free Vet Web App</p>
      
      <Link href='/login'>
        <button >Login</button>      
      </Link>
      <Link href="/register">
        <button>Cadastre-se</button>
      </Link>
      <Link href='/appvet'>
        <button >AppVet</button>
      </Link>
    </main>
  );  
  
}
