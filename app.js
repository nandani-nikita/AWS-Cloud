require('./db');

const crud = require('./account-sql')
const express = require('express');
const app = express();
const port = 8080;


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

app.get('/', async (req, res) => {

  const dropQuery = `drop table if exists accounts`

  const createTableQuery = `create table accounts (
  user_id serial primary key not null,
  user_name text not null,
  email text not null,
  acc_balance real default 0.0,
  acc_type varchar (10) default 'SB'
  );`

  const findQuery = `select * from accounts order by user_id asc;`

  const columns = `user_name, email, acc_balance`

  var data = [`'Nikita Nandani', 'nikita@bdec.in', 1500`, `'Shreya Prasad', 'shreya@abc.in', 2000`, `'Asyush Aman', 'ayush@aman.in', 50`, `'Shruti', 'shru@gmail.in', 100`, `'Ved Prakash', 'nikita@bdec.in', 1070`];

  const updateQuery1 = `update accounts
  set user_name = 'Ayush Aman'
  where email = 'ayush@aman.in'`;

  const updateQuery2 = `update accounts
  set acc_type = 'CURRENT'
  where acc_type = 'SB'`;

  const deleteQuery = `delete from accounts
  where acc_balance = 1500`;

  await crud.dropTableFunction(dropQuery);
  await crud.createFunction(createTableQuery);
  await crud.insertFunction(columns, data);
  await crud.updateFunction(updateQuery1);
  await crud.updateFunction(updateQuery2);
  await crud.deleteFunction(deleteQuery);
  await crud.findFunction(findQuery);
  let result = await crud.findFunction(findQuery);
  res.send(result)
});