const statusColors = {
  0: "#54FCD4", // completed
  1: "#A0149E", // In progress
  2: "#FF8D8B", // Purchased but not started
  3: "#FFE881" // Need to purchase
};

export const getStatusColor = (status: number) => statusColors[status];
  