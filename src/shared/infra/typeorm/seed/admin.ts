import { hash } from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

import createConnection from '../index';

async function create() {
  const connection = await createConnection('localhost');

  const id = uuidv4();
  const password = hash('admin', 8);

  await connection.query(
    `INSERT INTO USERS(id, name, email, password, admin, created_at, driver_license)
    values('${id}', 'admin', 'admin@rentex.com.br', '${password}', true, 'now()', 'abcd123456')
    `
  );

  await connection.close();
}

create().then(() => console.log('User admin created!'));
