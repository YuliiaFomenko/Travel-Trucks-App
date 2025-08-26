export const buildQuery = (filters) => {
  const {location, vehicleType, equipment} = filters;
  const params = new URLSearchParams();

  if (location) params.set('location', location);
  if (vehicleType) params.set('form', vehicleType);

  Object.entries(equipment).forEach(([key, value]) => {
    if (value) params.set(key, true);
  });

  return params.toString();
}