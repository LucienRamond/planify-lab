import { sort_samples } from "../samples/sort_samples";
import {
  EquipementsType,
  SampleType,
  ScheduleLineType,
  TechniciansType,
} from "../utils/types";
import { endtime_calculation } from "../utils/functions";

export function planifyLab(
  samples: SampleType[],
  equipements: EquipementsType[],
  technicians: TechniciansType[],
) {
  // Trie les échantillons par order de priorité
  const sorted_samples = sort_samples(samples);

  const schedule: ScheduleLineType[] = [];

  sorted_samples.map((sample) => {
    technicians.map((technician) => {
      if (technician.speciality == sample.type) {
        equipements.map((equipement) => {
          if (equipement.available == true && equipement.type == sample.type) {
            return schedule.push({
              sampleId: sample.id,
              technicianId: technician.id,
              equipmentId: equipement.id,
              startTime: sample.arrivalTime,
              endTime: endtime_calculation(
                sample.arrivalTime,
                sample.analysisTime,
              ),
              priority: sample.priority,
            });
          }
        });
      }
    });
  });

  return schedule;
}
