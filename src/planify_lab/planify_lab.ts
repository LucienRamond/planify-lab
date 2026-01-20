import { sort_samples } from "../samples/sort_samples";
import { EquipementsType, SampleType, TechniciansType } from "../utils/types";
import { schedule } from "../schedule/schedule";

export function planifyLab(
  samples: SampleType[],
  equipements: EquipementsType[],
  technicians: TechniciansType[],
) {
  // Trie les échantillons par order de priorité
  const sorted_samples = sort_samples(samples);

  // Crée le calendrier finale
  const final_schedule = schedule(sorted_samples, technicians, equipements);

  return final_schedule;
}
