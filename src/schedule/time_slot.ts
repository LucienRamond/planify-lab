import { endtime_calculation } from "../utils/time_functions";
import { EquipmentsType, SampleType, TechniciansType } from "../utils/types";
import {
  updateTechnician,
  getTechniciansBySpeciality,
  getAllTechnicians,
} from "../technicians/technicians";
import { getEquipmentsByType, updateEquipment } from "../equipments/equipments";

export function time_slot(sample: SampleType) {
  let technicianId = "";
  let equipmentId = "";
  let startTime = sample.arrivalTime;
  let endTime = endtime_calculation(startTime, sample.analysisTime);

  // Recupere la liste des techniciens par specialité + general
  let technicians: TechniciansType[] = getTechniciansBySpeciality(sample.type);

  // Recupere la liste des equipements par specialité + general
  let equipments: EquipmentsType[] = getEquipmentsByType(sample.type);

  // v-------------------------------------------ERROR-----------------------------------------------------------v

  // Gestion de l'erreur s'il n'y à pas d'équipements disponible pour le type d'analyse
  if (!technicians.length) {
    return {
      sampleId: sample.id,
      technicianId: "Aucun technicien disponible pour ce type d'analyse",
      startTime: "",
      endTime: "",
      priority: sample.priority,
      equipmentId: "",
    };
  }

  // Gestion de l'erreur s'il n'y à pas d'équipements disponible pour le type d'analyse
  if (!equipments.length) {
    return {
      sampleId: sample.id,
      technicianId: "",
      startTime: "",
      endTime: "",
      priority: sample.priority,
      equipmentId: "Aucun equipement disponible pour ce type d'analyse",
    };
  }
  // ^-------------------------------------------ERROR------------------------------------------------------------^

  // v----------------------------------------Technicians-------------------------------------------------------v

  // Update l'heure de départ si le technicien est dispo apres l'heure d'arrivée de l'échantillon
  if (technicians[0].nextSlot && technicians[0].nextSlot > startTime) {
    startTime = technicians[0].nextSlot;
    endTime = endtime_calculation(startTime, sample.analysisTime);
  }

  // Update le prochain créneau du technicien utilisé
  updateTechnician(technicians[0], endTime);

  technicianId = technicians[0].id;

  // ^----------------------------------------Technicians-------------------------------------------------------^

  // v-----------------------------------------Equipments-------------------------------------------------------v

  // Update l'heure de départ si l'équipement n'est dispo qu'apres l'heure d'arrivée de l'échantillon et du technicien
  if (equipments[0].nextSlot && equipments[0].nextSlot > startTime) {
    startTime = equipments[0].nextSlot;
    endTime = endtime_calculation(startTime, sample.analysisTime);
  }

  // Update le prochain créneau de l'equipement utilisé
  updateEquipment(equipments[0], endTime);

  equipmentId = equipments[0].id;

  // ^-----------------------------------------Equipments-------------------------------------------------------^

  // v-------------------------------------------STAT-----------------------------------------------------------v

  // Si les échantillons sont de type 'STAT' on update tous les prochains créneau techniciens (STAT max priority)
  // Attends de traiter tous les 'STAT' avant de passer à la suite
  if (sample.priority == "STAT") {
    let all_technicians = getAllTechnicians();
    all_technicians.map((technician) => {
      return updateTechnician(technician, endTime);
    });
  }

  // ^-------------------------------------------STAT------------------------------------------------------------^

  return {
    sampleId: sample.id,
    technicianId: technicianId,
    startTime: startTime,
    endTime: endTime,
    priority: sample.priority,
    equipmentId: equipmentId,
  };
}
