require('./db');

const crud = require('./account-sql')
const express = require('express');
const app = express();
const port = 8080;

const cors = require("cors");
app.use(cors());
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

app.get('/', async (req, res) => {

  const findQuery = `select * from accounts order by user_id asc;`
  await crud.findFunction(findQuery);
  let result = await crud.findFunction(findQuery);
  res.send(result);
});

app.get('/createTable', async(req, res) => {
  const dropQuery = `drop table if exists accounts`

  const createTableQuery = `create table accounts (
  user_id serial primary key not null,
  user_name text not null,
  email text not null,
  acc_balance real default 0.0,
  acc_type varchar (10) default 'SB'
  );`
  await crud.dropTableFunction(dropQuery);
  let result = await crud.createFunction(createTableQuery);
  res.send(result);
});

app.get('/insertRecord', async(req, res) => {
  const columns = `user_name, email, acc_balance`

  var data = [`'Nikita Nandani', 'nikita@bdec.in', 1500`, `'Shreya Prasad', 'shreya@abc.in', 2000`, `'Asyush Aman', 'ayush@aman.in', 50`, `'Shruti', 'shru@gmail.in', 100`, `'Ved Prakash', 'nikita@bdec.in', 1070`];
  let result =  await crud.insertFunction(columns, data);
  res.send(result);
});

app.get('/updateRecord', async(req, res) => {
  
  const updateQuery1 = `update accounts
  set user_name = 'Ayush Aman'
  where email = 'ayush@aman.in'`;

  const updateQuery2 = `update accounts
  set acc_type = 'CURRENT'
  where acc_type = 'SB'`;
  
  let result =  await crud.updateFunction(updateQuery1);
  await crud.updateFunction(updateQuery2);
  res.send(result);
});

app.get('/deleteRecord', async(req, res)=>{
  
  const deleteQuery = `delete from accounts
  where acc_balance = 1500`;

  let result = await crud.deleteFunction(deleteQuery);
  res.send(result);

});