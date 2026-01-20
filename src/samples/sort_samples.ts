import { SampleType } from "../utils/types";

export function sort_samples(samples: SampleType[]) {
  const stat_samples: SampleType[] = [];
  const urgent_samples: SampleType[] = [];
  const rountine_samples: SampleType[] = [];

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

  const sorted_samples: SampleType[] = stat_samples.concat(
    urgent_samples,
    rountine_samples,
  );

  return sorted_samples;
}
