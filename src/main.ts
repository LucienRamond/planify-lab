import data from "../input";
import { planifyLab } from "./planify_lab/planify_lab";

export function main() {
  const samples = data.samples;
  const equipements = data.equipment;
  const technicians = data.technicians;

  const schedule = planifyLab(samples, equipements, technicians);

  return console.log(schedule);
}

if (require.main === module) {
  main();
}
