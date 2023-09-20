const mapping: Record<string, string> = {
  bookings: 'booking',
  cars: 'car',
  companies: 'company',
  dashboards: 'dashboard',
  feedbacks: 'feedback',
  insurances: 'insurance',
  locations: 'location',
  maintenances: 'maintenance',
  operations: 'operation',
  payments: 'payment',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
