// Calcule l'heure de fin de l'analyse d'échantillon
const endtime_calculation = (starting_time: string, analysis_time: number) => {
  const [hour, minutes] = starting_time.split(":");
  const analysisTime = analysis_time * 60 * 1000;
  const end_time_ms =
    new Date().setHours(parseInt(hour), parseInt(minutes)) + analysisTime;
  const end_time = new Date(end_time_ms)
    .toLocaleTimeString("fr", { hour: "2-digit", minute: "2-digit" })
    .toString();
  return end_time;
};

// Calcule de l'heure de demarrage de l'analyse d'échantillon
const starttime_calculation = (
  sample_arrival_time: string,
  technician_next_slot: string,
) => {
  let start_time = "";

  if (sample_arrival_time > technician_next_slot) {
    start_time = sample_arrival_time;
  } else {
    start_time = technician_next_slot;
  }

  return start_time;
};

// Calcule le temps d'analyse du calendrier
const total_analysis_time = (starting_time: string, end_time: string) => {
  const [starting_hour, starting_minutes] = starting_time.split(":");
  const [ending_hour, ending_minutes] = end_time.split(":");
  const start_time_ms = new Date().setHours(
    parseInt(starting_hour),
    parseInt(starting_minutes),
  );
  const end_time_ms = new Date().setHours(
    parseInt(ending_hour),
    parseInt(ending_minutes),
  );

  return (end_time_ms - start_time_ms) / 60000;
};

export { endtime_calculation, starttime_calculation, total_analysis_time };
