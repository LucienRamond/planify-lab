import { EquipmentsType } from "../utils/types";

const blood_equipments: EquipmentsType[] = [];
const urine_equipments: EquipmentsType[] = [];
const tissue_equipments: EquipmentsType[] = [];

// Trie les equipements par types et init le prochain créneau
export function sort_equipments(equipments: EquipmentsType[]) {
  equipments.map((equipment) => {
    switch (equipment.type) {
      case "BLOOD":
        blood_equipments.push({
          ...equipment,
          nextSlot: "00:00",
        });
        break;
      case "URINE":
        urine_equipments.push({
          ...equipment,
          nextSlot: "00:00",
        });
        break;
      case "TISSUE":
        tissue_equipments.push({
          ...equipment,
          nextSlot: "00:00",
        });
        break;
    }
  });
  return;
}

export function getEquipmentsByType(sampleType: string) {
  let equipments: EquipmentsType[] = [];
  switch (sampleType) {
    case "BLOOD":
      equipments = blood_equipments;
      break;
    case "URINE":
      equipments = urine_equipments;
      break;
    case "TISSUE":
      equipments = tissue_equipments;
      break;
  }

  // Trie par prochain créneau disponible
  equipments.sort((a, b) => {
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
  return equipments;
}

// Update le prochain créneau d'un equipement
export function updateEquipment(equipment: EquipmentsType, endTime: string) {
  if (blood_equipments.includes(equipment)) {
    blood_equipments.forEach((equipment, index) => {
      blood_equipments.splice(index, 1, { ...equipment, nextSlot: endTime });
    });
  }
  if (urine_equipments.includes(equipment)) {
    urine_equipments.forEach((equipment, index) => {
      urine_equipments.splice(index, 1, { ...equipment, nextSlot: endTime });
    });
  }
  if (tissue_equipments.includes(equipment)) {
    tissue_equipments.forEach((equipment, index) => {
      tissue_equipments.splice(index, 1, { ...equipment, nextSlot: endTime });
    });
  }
}
