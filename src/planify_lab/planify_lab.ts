import { sort_samples } from "../samples/samples";
import { EquipementsType, SampleType, TechniciansType } from "../utils/types";
import { schedule } from "../schedule/schedule";
import { metrics } from "../metrics/metrics";
import { sort_technicians } from "../technicians/technicians";

export function planifyLab(
  samples: SampleType[],
  equipements: EquipementsType[],
  technicians: TechniciansType[],
) {
  // Trie les échantillons par order de priorité
  const sorted_samples = sort_samples(samples);

  // Trie les techniciens par catégories
  sort_technicians(technicians);

  // Crée le calendrier finale
  const final_schedule = schedule(sorted_samples);

  // Crée les statistiques finales
  const final_metrics = metrics(final_schedule, samples);

  const response = {
    schedule: final_schedule,
    metrics: final_metrics,
  };

  return response;
}
