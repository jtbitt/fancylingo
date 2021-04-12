const statusColors = {
    0: "Completado", // completed
    1: "En progreso", // In progress
    2: "Empezar", // Purchased but not started
    3: "Premium" // Need to purchase
  };
  
  export const getStatusMessage = (status: number) => statusColors[status];
    