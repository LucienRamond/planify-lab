import data from "../input";
import { planifyLab } from "./planify_lab";

export function main() {
  const samples = data.samples;
  const equipements = data.equipment;
  const technicians = data.technicians;

  planifyLab();

  return "end";
}

if (require.main === module) {
  main();
}
