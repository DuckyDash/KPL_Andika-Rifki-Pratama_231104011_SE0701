import fs from 'fs';

const FILE_PATH = './users.json';

export function loadUsers() {
  try {
    const data = fs.readFileSync(FILE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

export function saveUsers(users) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(users, null, 2));
}
