import { total_analysis_time } from "../utils/time_functions";
import { SampleType, ScheduleLineType } from "../utils/types";

export function metrics(
  schedule: ScheduleLineType[],
  samples: SampleType[],
  techniciansLength: number,
  equipmentsLength: number,
) {
  let totalTime = 0;
  let efficiency = 0;
  let conflicts = 0;
  let analysis_base = 0;

  // Calcule le temps d'analyse total
  totalTime = total_analysis_time(
    schedule[0].startTime,
    schedule[schedule.length - 1].endTime,
  );

  // Calcule du temps minimal requis pour les analyses
  samples.map((sample) => {
    analysis_base = analysis_base + sample.analysisTime;
  });

  // Calcule l'efficacité de la gestion des techniciens
  const tecnicians_efficiency = (
    (analysis_base / techniciansLength / totalTime) *
    100
  ).toFixed(2);

  // Calcule l'efficacité de la gestion des equipements
  const equipments_efficiency = (
    (analysis_base / equipmentsLength / totalTime) *
    100
  ).toFixed(2);

  // Calcule l'éfficacité globale
  efficiency =
    (parseFloat(tecnicians_efficiency) + parseFloat(equipments_efficiency)) / 2;

  return {
    totalTime: totalTime,
    efficiency: parseFloat(efficiency.toFixed(2)),
    conflicts: conflicts,
  };
}
