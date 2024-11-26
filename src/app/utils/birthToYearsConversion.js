export default function birthToYearsConversion(birthDate){
  const today = new Date();
  const birth = new Date(birthDate);
  const years = today.getFullYear() - birth.getFullYear();
  const months = today.getMonth() - birth.getMonth();

  if (years === 0) {
    if (months === 0) {
      const days = today.getDate() - birth.getDate();
      return `${days} dias`;
    } else if (months === 1) {
      return `${months} mês`;
    } else {
      return `${months} meses`;
    }
  } else if (years === 1) {
    if (months === 0) {
      return `${years} ano`;
    } else if (months === 1) {
      return `${years} ano e ${months} mês`;
    } else {
      return `${years} ano e ${months} meses`;
    }
  } else {
    if (months === 0) {
      return `${years} anos`;
    } else if (months === 1) {
      return `${years} anos e ${months} mês`;
    } else {
      return `${years} anos e ${months} meses`;
    }
  }
}