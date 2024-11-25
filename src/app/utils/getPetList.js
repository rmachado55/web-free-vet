import { Prisma } from "@prisma/client"

export default getPetList({setPetList}){
  
  const refreshPetList = async () => {
    try {
      const petList = await Prisma.pet.findMany({
        include: {
          user: true,
        },
      });
      petList(petList);
    } catch (error) {
      console.error("Error fetching pet list:", error);
    }  
  }
  

  return()
  }