type SampleType = {
  id: string;
  type: string;
  priority: string;
  analysisTime: number;
  arrivalTime: string;
  patientId: string;
};

type TechniciansType = {
  id: string;
  name: string;
  speciality: string;
  startTime: string;
  endTime: string;
  nextSlot?: string;
};

type EquipmentsType = {
  id: string;
  name: string;
  type: string;
  available: boolean;
  nextSlot?: string;
};

type ScheduleLineType = {
  sampleId: string;
  technicianId: string;
  equipmentId: string;
  startTime: string;
  endTime: string;
  priority: string;
};

export { SampleType, TechniciansType, EquipmentsType, ScheduleLineType };
