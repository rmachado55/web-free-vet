const initialState = {
  'Pets' : [
    { id: "672e83630fec4626acba41ef",
      name: "Martin",
      specie: "Gato",
      breed: "Persa",
      gender: "Macho",
      birthDate: "2019-07-15T02:00:00.000Z",
      castrated: true,
      history: [
        {
          weight: 6100,
          description: "Solicitado ao tutor exame de sangue para castração na próxima semana",
          _id: "672e83630fec4626acba41f0",
          timeStamp: {
            $timestamp: "0"
          }
        }
      ],
      mainTutorId: "67291f554db2678bf438d86e",
      knownDiseases: []
    },
    {
      id: "672e8651430998a25a2055c6",
      name: "Guadalupe",
      specie: "Cão",
      breed: "S.R.D.",
      gender: "Fêmea",
      birthDate: "2015-02-15T02:00:00.000Z",
      castrated: true,
      history: [
        {
          weight: 22700,
          description: "Realizada cirurgia de TPLO",
          _id: "672e8651430998a25a2055c7"
        }
      ],
      mainTutorId: "6727e3d99388855d70c172af",
      secondaryTutorId: "672e8615430998a25a2055c2",
      knownDiseases: []
    },
    {
      id: "672e8651430998a25a2055c7",
      name: "Khalesi",
      specie: "Cão",
      breed: "S.R.D.",
      gender: "Fêmea",
      birthDate: "2013-02-15T02:00:00.000Z",
      castrated: true,
      history: [
        {
          weight: 12700,
          description: "Exame de imagem para acompanhamento de lama biliar",
          _id: "672e8651430998a25a2055c7"
        }
      ],
      mainTutorId: "6727e3d99388855d70c172af",
      secondaryTutorId: "672e8615430998a25a2055c2",
      knownDiseases: []
    },
    {
      id: "672e8651430998a25a2055c8",
      name: "Fredolino",
      specie: "Cão",
      breed: "S.R.D.",
      gender: "Macho",
      birthDate: "2023-02-15T02:00:00.000Z",
      castrated: true,
      history: [
        {
          weight: 31700,
          description: "Vacinação",
          _id: "672e8651430998a25a2055c7"
        }
      ],
      mainTutorId: "6727e3d99388855d70c172af",
      secondaryTutorId: "672e8615430998a25a2055c2",
      knownDiseases: []
    },
    { id: "672e83630fec4626acba41eg",
      name: "Caíque",
      specie: "Gato",
      breed: "S.R.D.",
      gender: "Macho",
      birthDate: "2023-09-11T02:00:00.000Z",
      castrated: true,
      history: [
        {
          weight: 6100,
          description: "Solicitado ao tutor exame de sangue para castração na próxima semana",
          _id: "672e83630fec4626acba41f0",
          timeStamp: {
            $timestamp: "0"
          }
        }
      ],
      mainTutorId: "67291f554db2678bf438d86a",
      knownDiseases: []
    },  
  ],
}; 


const petReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PET':
      return { ...state, pet: action.pet };
    case 'CLEAR_PET':
      return { ...state, pet: null };
    default:
      return state;
  }
};

export default petReducer;