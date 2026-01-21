import { TechniciansType } from "../utils/types";

const blood_technicians: TechniciansType[] = [];
const urine_technicians: TechniciansType[] = [];
const tissue_technicians: TechniciansType[] = [];
const general_technicians: TechniciansType[] = [];

export function sort_technicians(technicians: TechniciansType[]) {
  technicians.map((technician) => {
    switch (technician.speciality) {
      case "BLOOD":
        blood_technicians.push({
          ...technician,
          nextSlot: technician.startTime,
        });
        break;
      case "URINE":
        urine_technicians.push({
          ...technician,
          nextSlot: technician.startTime,
        });
        break;
      case "TISSUE":
        tissue_technicians.push({
          ...technician,
          nextSlot: technician.startTime,
        });
        break;
      case "GENERAL":
        general_technicians.push({
          ...technician,
          nextSlot: technician.startTime,
        });
        break;
    }
  });
  return;
}

export function getTechniciansBySpeciality(sampleType: string) {
  let technicians: TechniciansType[] = [];
  switch (sampleType) {
    case "BLOOD":
      technicians = blood_technicians.concat(general_technicians);
      break;
    case "URINE":
      technicians = urine_technicians.concat(general_technicians);
      break;
    case "TISSUE":
      technicians = tissue_technicians.concat(general_technicians);
      break;
  }

  // Trie par prochain créneau disponible
  technicians.sort((a, b) => {
    const nameA = a.nextSlot;
    const nameB = b.nextSlot;
    if (nameA && nameB) {
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    } else {
      return 0;
    }
  });
  return technicians;
}

// Fonction qui update le prochain créneau d'un technicien
export function updateTechnician(technician: TechniciansType, endTime: string) {
  if (blood_technicians.includes(technician)) {
    blood_technicians.forEach((technician, index) => {
      blood_technicians.splice(index, 1, { ...technician, nextSlot: endTime });
    });
  }
  if (urine_technicians.includes(technician)) {
    urine_technicians.forEach((technician, index) => {
      urine_technicians.splice(index, 1, { ...technician, nextSlot: endTime });
    });
  }
  if (tissue_technicians.includes(technician)) {
    tissue_technicians.forEach((technician, index) => {
      tissue_technicians.splice(index, 1, { ...technician, nextSlot: endTime });
    });
  }
  if (general_technicians.includes(technician)) {
    general_technicians.forEach((technician, index) => {
      general_technicians.splice(index, 1, {
        ...technician,
        nextSlot: endTime,
      });
    });
  }
}
