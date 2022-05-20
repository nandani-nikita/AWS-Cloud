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
  if (result == null || result.length == 0) {
    res.status(406).json({msg:'No Data'});
  } else {
    res.json({msg:result});
  }
});


app.get('/dropTable', async (req, res) => {
  const dropQuery = `drop table if exists accounts`
  let result = await crud.dropTableFunction(dropQuery);

  res.json({msg:result});
});

app.get('/createTable', async (req, res) => {
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
  console.log(result);
  res.json({msg:result});
});

app.get('/insertRecord', async (req, res) => {
  const columns = `user_name, email, acc_balance`

  var data = [`'Nikita Nandani', 'nikita@bdec.in', 1500`, `'Shreya Prasad', 'shreya@abc.in', 2000`, `'Asyush Aman', 'ayush@aman.in', 50`, `'Shruti', 'shru@gmail.in', 100`, `'Ved Prakash', 'ved@pqr.in', 1070`];
  let result = await crud.insertFunction(columns, data);
  res.json({msg:result});
});

app.get('/updateRecord', async (req, res) => {

  const updateQuery1 = `update accounts
  set user_name = 'Ayush Aman'
  where email = 'ayush@aman.in'`;

  const updateQuery2 = `update accounts
  set acc_type = 'CURRENT'
  where acc_type = 'SB'`;

  await crud.updateFunction(updateQuery1);
  let result = await crud.updateFunction(updateQuery2);
  res.json({msg:result});
});

app.get('/deleteRecord', async (req, res) => {

  const deleteQuery = `delete from accounts
  where acc_balance = 1500`;

  let result = await crud.deleteFunction(deleteQuery);
  res.json({msg:result});

});