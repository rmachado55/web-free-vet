export default function Card({pet}) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={`http://www.veterinariapassofundo.com/assets/${pet.id}.jpg`} alt={pet.name} />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{pet.name}</div>
        <div className={styles.description}>{pet.breed}</div>
      </div>
    </div>
  );
}