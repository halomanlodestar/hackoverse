export const chronicDiseases: { name: string }[] = [
  { name: "Diabetes mellitus" },
  { name: "Hypertension" },
  { name: "Cardiovascular diseases" },
  { name: "Chronic obstructive pulmonary disease" },
  { name: "Asthma" },
  { name: "Chronic kidney disease" },
  { name: "Arthritis" },
  { name: "Cancer" },
  { name: "Alzheimer's disease and other dementias" },
  { name: "Chronic liver disease" },
  { name: "HIV/AIDS" },
  { name: "Multiple sclerosis" },
  { name: "Parkinson's disease" },
  { name: "Inflammatory bowel disease" },
  { name: "Fibromyalgia" },
  { name: "Chronic fatigue syndrome" },
  { name: "Osteoporosis" },
  { name: "Thyroid disorders" },
  { name: "Sickle cell anemia" },
  { name: "Lupus" },
  { name: "Cystic fibrosis" },
  { name: "Epilepsy" },
  { name: "Endometriosis" },
  { name: "Migraine headaches" },
  { name: "Chronic pain disorders" }
];

export const placeholderData = [
  {
    doctor: {
      name: 'Dr. John Doe',
      image: '',
    },
    disease: chronicDiseases[0].name,
    lastAppointment: new Date('2024-04-10'),
    nextAppointment: new Date('2024-05-10'),
  },
  {
    doctor: {
      name: 'Dr. Emily Smith',
      image: '',
    },
    disease: chronicDiseases[1].name,
    lastAppointment: new Date('2024-04-15'),
    nextAppointment: new Date('2024-05-15'),
  },
  {
    doctor: {
      name: 'Dr. Michael Johnson',
      image: '',
    },
    disease: chronicDiseases[2].name,
    lastAppointment: new Date('2024-04-05'),
    nextAppointment: new Date('2024-05-05'),
  },
  {
    doctor: {
      name: 'Dr. Sarah Lee',
      image: '',
    },
    disease: chronicDiseases[3].name,
    lastAppointment: new Date('2024-04-20'),
    nextAppointment: new Date('2024-05-20'),
  }
];
