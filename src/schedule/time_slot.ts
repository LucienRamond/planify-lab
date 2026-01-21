import { endtime_calculation } from "../utils/time_functions";
import { SampleType, ScheduleLineType, TechniciansType } from "../utils/types";
import {
  updateTechnician,
  getTechniciansBySpeciality,
} from "../technicians/technicians";

export function time_slot(sample: SampleType) {
  let technicianId = "";
  let startTime = sample.arrivalTime;
  let endTime = endtime_calculation(startTime, sample.analysisTime);

  // Recupere la liste des techniciens par specialité + general
  let technicians: TechniciansType[] = getTechniciansBySpeciality(sample.type);

  // Update l'heure de départ si le technicien est dispo apres l'heure d'arrivée de l'échantillon
  if (technicians[0].nextSlot && technicians[0].nextSlot > startTime) {
    startTime = technicians[0].nextSlot;
    endTime = endtime_calculation(startTime, sample.analysisTime);
  }

  // Update le prochain créneau du technicien utilisé
  updateTechnician(technicians[0], endTime);

  technicianId = technicians[0].id;

  return {
    sampleId: sample.id,
    technicianId: technicianId,
    startTime: startTime,
    endTime: endTime,
    priority: sample.priority,
    equipmentId: "",
  };
}
