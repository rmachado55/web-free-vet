import Link from "next/link";

export default async function Home() {   
  

  return (
    <main>      
      <Link href='/login'>
        <button >Login</button>      
      </Link>
      <Link href="/register"><button>Cadastre-se</button></Link>
      <Link href='/appvet'>
        <button >AppVet</button>
      </Link>
    </main>
  );  
  
}
