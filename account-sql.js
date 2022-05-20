const { connection } = require('./db');

const dropQuery = `drop table if exists accounts`

connection.query(dropQuery, (err) => {
    if (!err) {
        console.log('table dropped: accounts');
    } else {
        console.log('error occured: ', err);
    }

});

const createTableQuery = `create table accounts (
    user_id serial primary key not null,
    user_name text not null,
    email text not null,
    acc_balance real default 0.0,
    acc_type varchar (10) default 'SB'
    );`

connection.query(createTableQuery, (err) => {
    if (!err) {
        console.log('table created: accounts');
    } else {
        console.log('error occured: ', err);
    }
});

var data = [`('Nikita Nandani', 'nikita@bdec.in', 1500);`, `('Shreya Prasad', 'shreya@abc.in', 2000);`, `('Asyush Aman', 'ayush@aman.in', 50);`, `('Shruti', 'shru@gmail.in', 100);`, `('Ved Prakash', 'nikita@bdec.in', 1070);`]

for (let i = 0; i < data.length; i++) {
    let insertDataQuery = `insert into accounts (user_name, email, acc_balance) values ${data[i]}`
    connection.query(insertDataQuery, (err) => {
        if (!err) {
            console.log('data added, row: ' + (i + 1));
        } else {
            console.log('error occured: ', err);
        }
    });
}


const findQuery = `select * from accounts order by user_id asc;`

const findFunction = () => {
    connection.query(findQuery, (err, res) => {
        if (!err) {
            console.log(res.rows);
        } else {
            console.log('error occured: ', err);
        }
    });
}

findFunction();

const updateFunction = (updateQuery) => {
    connection.query(updateQuery, (err, res) => {
        if (!err) {
            console.log('Table updated. \nRows affected: ' + res.rowCount);
        } else {
            console.log('error occured: ', err);
        }
    });
}
const updateQuery1 = `update accounts
    set user_name = 'Ayush Aman'
    where email = 'ayush@aman.in'`;

updateFunction(updateQuery1);
findFunction();

const updateQuery2 = `update accounts
    set acc_type = 'CURRENT'
    where acc_type = 'SB'`;

updateFunction(updateQuery2);
findFunction();

const deleteQuery = `delete from accounts
    where acc_balance = 1500`;

const deleteFunction = (deleteQuery) => {
    connection.query(deleteQuery, (err, res) => {
        if (!err) {
            console.log('Request data deleted. \nRows affected: ' + res.rowCount);
        } else {
            console.log('error occured: ', err);
        }
    });
}
deleteFunction(deleteQuery);
findFunction();