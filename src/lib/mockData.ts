export function enrichUser(user) {
  const departments = ['Engineering', 'Design', 'HR', 'Sales'];

  return {
    ...user,
    firstName: (user.firstName || user.username) ?? 'John',
    lastName: user.lastName ?? '',
    email: user.email ?? `${user.username}@example.com`,
    department: departments[Math.floor(Math.random() * departments.length)],
    performance: Math.floor(Math.random() * 5) + 1,
  };
}

export function mockEmployeeDetails(id) {
  const performance = Math.floor(Math.random() * 5) + 1;
  const departments = ['Engineering', 'Design', 'HR', 'Sales'];

  return {
    id,
    name: `User ${id}`,
    email: `user${id}@hrmock.io`,
    phone: '+91-9876543210',
    address: '123 Lakshmi Vihar, Mathura',
    bio: 'Empathetic and analytical team player with a passion for organizational development.',
    department: departments[Math.floor(Math.random() * departments.length)],
    performance,
    history: Array.from({ length: 6 }, (_, i) => ({
      year: 2018 + i,
      rating: Math.floor(Math.random() * 5) + 1,
    })),
    projects: [
      'Onboarding Portal',
      'Employee Wellness Campaign',
      'Performance Audit Q3',
    ],
  };
}
