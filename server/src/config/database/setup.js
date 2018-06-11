import {
  createDatabase,
  dropDatabase,
  useDatabase,
  createUsersTable,
  dropUsersTable
} from '../../../lib/db';

const setup = async () => {
  await dropUsersTable();
  await dropDatabase();
  await createDatabase();
  await createUsersTable();
  process.exit();
};

setup();