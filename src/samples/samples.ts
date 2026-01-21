import { SampleType } from "../utils/types";

export function sort_samples(samples: SampleType[]) {
  let stat_samples: SampleType[] = [];
  let urgent_samples: SampleType[] = [];
  let rountine_samples: SampleType[] = [];

  samples.map((sample) => {
    const priority = sample.priority;
    if (priority == "STAT") {
      return stat_samples.push(sample);
    } else if (priority == "URGENT") {
      return urgent_samples.push(sample);
    } else if (priority == "ROUTINE") {
      return rountine_samples.push(sample);
    }
  });

  // Trie des échantillons par heure d'arrivée
  stat_samples = sortSamplesByArrivalTime(stat_samples);
  urgent_samples = sortSamplesByArrivalTime(urgent_samples);
  rountine_samples = sortSamplesByArrivalTime(rountine_samples);

  const sorted_samples: SampleType[] = stat_samples.concat(
    urgent_samples,
    rountine_samples,
  );

  return sorted_samples;
}

function sortSamplesByArrivalTime(list: any) {
  return list.sort((a: any, b: any) => {
    const nameA = a.arrivalTime;
    const nameB = b.arrivalTime;
    if (nameA && nameB) {
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    } else {
      return 0;
    }
  });
}
