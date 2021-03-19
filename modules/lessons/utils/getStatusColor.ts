const statusColors = {
  "Completado": "#54FCD4",
  "En progreso": "#A0149E",
  "Empezar": "#FF8D8B",
  "Premium": "#FFE881"
};

export const getStatusColor = (status: string) => statusColors[status];
  