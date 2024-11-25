export const setPet = (pet) => {
  return {
    type: 'SET_PET',
    pet
  };
};

export const clearPet = () => {
  return {
    type: 'CLEAR_PET'
  };
};