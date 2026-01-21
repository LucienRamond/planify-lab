import { total_analysis_time } from "../utils/time_functions";
import { SampleType, ScheduleLineType } from "../utils/types";

export function metrics(schedule: ScheduleLineType[], samples: SampleType[]) {
  let totalTime = 0;
  let efficiency = 0.0;
  let conflicts = 0;
  let analysis_base = 0;
  let first_arrival = "";

  // Calcule le temps d'analyse total
  totalTime = total_analysis_time(
    schedule[0].startTime,
    schedule[schedule.length - 1].endTime,
  );

  // Calcule du temps minimal requis pour les analyses
  samples.map((sample) => {
    analysis_base = analysis_base + sample.analysisTime;
  });

  // Compare le rapport temps effectué / temps minimal possible
  efficiency = (analysis_base / totalTime) * 100;

  return {
    totalTime: totalTime,
    efficiency: efficiency,
    conflicts: conflicts,
  };
}
