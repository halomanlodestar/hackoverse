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
  { name: "Chronic pain disorders" },
];

export const placeholderData = [
  {
    doctor: {
      name: "Dr. Harish Bali",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/028/287/384/small/a-mature-indian-male-doctor-on-a-white-background-ai-generated-photo.jpg",
    },
    disease: chronicDiseases[0].name,
    lastAppointment: new Date("2024-04-10"),
    nextAppointment: new Date("2024-05-10"),
  },
  {
    doctor: {
      name: "Dr. Emily Smith",
      image: "",
    },
    disease: chronicDiseases[1].name,
    lastAppointment: new Date("2024-04-15"),
    nextAppointment: new Date("2024-05-15"),
  },
  {
    doctor: {
      name: "Dr. Ajay Nagar",
      image: "",
    },
    disease: chronicDiseases[2].name,
    lastAppointment: new Date("2024-04-05"),
    nextAppointment: new Date("2024-05-05"),
  },
  {
    doctor: {
      name: "Dr. Sarah Lee",
      image: "",
    },
    disease: chronicDiseases[3].name,
    lastAppointment: new Date("2024-04-20"),
    nextAppointment: new Date("2024-05-20"),
  },
];
