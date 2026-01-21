import { SampleType, ScheduleLineType } from "../utils/types";
import { time_slot } from "./time_slot";

export function schedule(sorted_samples: SampleType[]) {
  const schedule: ScheduleLineType[] = [];

  // Crée chaque ligne du calendrier
  sorted_samples.map((sample) => {
    return schedule.push(time_slot(sample));
  });

  return schedule;
}
