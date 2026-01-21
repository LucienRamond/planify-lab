const data = {
  samples: [
    {
      id: "S001",
      type: "BLOOD",
      priority: "URGENT",
      analysisTime: 60,
      arrivalTime: "09:00",
      patientId: "P001",
    },
    {
      id: "S002",
      type: "URINE",
      priority: "URGENT",
      analysisTime: 30,
      arrivalTime: "09:15",
      patientId: "P002",
    },
    {
      id: "S003",
      type: "URINE",
      priority: "STAT",
      analysisTime: 15,
      arrivalTime: "13:00",
      patientId: "P002",
    },
    {
      id: "S004",
      type: "BLOOD",
      priority: "ROUTINE",
      analysisTime: 45,
      arrivalTime: "09:00",
      patientId: "P003",
    },
    {
      id: "S005",
      type: "TISSUE",
      priority: "STAT",
      analysisTime: 30,
      arrivalTime: "10:00",
      patientId: "P003",
    },
  ],
  technicians: [
    {
      id: "T001",
      name: "Alice Martin",
      speciality: "BLOOD",
      startTime: "08:00",
      endTime: "17:00",
    },
    {
      id: "T002",
      name: "Michelle Rodriguez",
      speciality: "GENERAL",
      startTime: "08:00",
      endTime: "17:00",
    },
  ],
  equipment: [
    {
      id: "E001",
      type: "BLOOD",
      name: "Analyseur Sang A",
      available: true,
    },
    {
      id: "E002",
      type: "URINE",
      name: "Analyseur Urine A",
      available: true,
    },
    {
      id: "E002",
      type: "TISSUE",
      name: "Analyseur Urine A",
      available: true,
    },
    {
      id: "E003",
      type: "TISSUE",
      name: "Analyseur Tissue A",
      available: false,
    },
  ],
};
export default data;
