import data from "../input";
import { planifyLab } from "./planify_lab/planify_lab";

export function main() {
  const schedule = planifyLab(data);

  return console.log(schedule);
}

if (require.main === module) {
  main();
}
