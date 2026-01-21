import { sort_samples } from "../samples/samples";
import { EquipmentsType, SampleType, TechniciansType } from "../utils/types";
import { schedule } from "../schedule/schedule";
import { metrics } from "../metrics/metrics";
import { sort_technicians } from "../technicians/technicians";
import { sort_equipments } from "../equipments/equipments";

export function planifyLab(
  samples: SampleType[],
  equipements: EquipmentsType[],
  technicians: TechniciansType[],
) {
  // Trie les échantillons par order de priorité
  const sorted_samples = sort_samples(samples);

  // Trie les techniciens par catégories
  sort_technicians(technicians);

  // Trie les equipements par catégories
  sort_equipments(equipements);

  // Crée le calendrier finale
  const final_schedule = schedule(sorted_samples);

  // Crée les statistiques finales
  const final_metrics = metrics(
    final_schedule,
    samples,
    technicians.length,
    equipements.length,
  );

  const response = {
    schedule: final_schedule,
    metrics: final_metrics,
  };

  return response;
}
