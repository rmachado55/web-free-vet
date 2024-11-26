import { create } from "zustand";
import {Pets} from "./mocks/pets";
import {Tutors} from "./mocks/tutors.js";

export const useStore = create((set) => ({
  activeTab: 'search',
  petList: Pets,
  tutorList: Tutors,
  activeProfile: '672e83630fec4626acba41ef',  
  setActiveTab: (tab) => set({ activeTab: tab }),
  setPetList: (list) => set({ petList: list }),
  setActiveProfile: (profile) => set({ activeProfile: profile }),   

  currentVetCare: {
    id: null,
    timeStamp:0,
    status: 'notStarted',
    pets:[{name:'',id:''}],    
  },
}))