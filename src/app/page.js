'use client';
import { useRouter } from 'next/navigation'

export default function Home() {  
  
  const router = useRouter();

  function handleClick(route){
    router.push(route);
  }

  return (
    <main>
      <button onClick={() => handleClick('/login')}>Login</button>      
      <button onClick={() => handleClick('/register')}>Cadastre-se</button>
      <button onClick={() => handleClick('/appvet')}>AppVet</button>
    </main>
  );  
  
}
