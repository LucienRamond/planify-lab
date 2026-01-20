import { endtime_calculation } from "../utils/functions";
import {
  EquipementsType,
  SampleType,
  ScheduleLineType,
  TechniciansType,
} from "../utils/types";

export function schedule(
  sorted_samples: SampleType[],
  technicians: TechniciansType[],
  equipements: EquipementsType[],
) {
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
