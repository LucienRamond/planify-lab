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
export { endtime_calculation };
