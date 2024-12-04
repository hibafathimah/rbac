import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

// Mock data
let users = [
  { id: 1, username: 'User 1', role: 'Admin' },
  { id: 2, username: 'User 2', role: 'User' },
  { id: 3, username: 'User 3', role: 'Moderator' },
];

let roles = [
  { id: 1, roleName: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
  { id: 2, roleName: 'Editor', permissions: ['Read', 'Write'] },
];

// Mock endpoints
mock.onGet('/users').reply(200, users);
mock.onPost('/users').reply((config) => {
  const newUser = JSON.parse(config.data);
  users.push({ id: users.length + 1, ...newUser });
  return [201, newUser];
});
mock.onDelete(/\/users\/\d+/).reply((config) => {
  const id = parseInt(config.url.split('/').pop(), 10);
  users = users.filter((user) => user.id !== id);
  return [200];
});

// Mock roles
mock.onGet('/roles').reply(200, roles);
mock.onPost('/roles').reply((config) => {
  const newRole = JSON.parse(config.data);
  roles.push({ id: roles.length + 1, ...newRole });
  return [201, newRole];
});

export default axios;
