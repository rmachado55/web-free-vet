import { useStore } from "../store/appvet.store";

export default function MedicalRecordTab() {
  const {status, setStatus, id, timeStamp, pet} = useStore().currentVetCare;

  return (
    <div>
      <h1>Status Atendimento: {status}</h1>      
      <button onClick={() => setStatus('finished')}>Finalizar</button>
      <p>{pet[0].name}</p>
    </div>
  );
}