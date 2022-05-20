const { connection } = require('./db');

const dropTableFunction = (dropQuery) => {
    try {
        connection.query(dropQuery, (err) => {
            if (!err) {
                console.log('Table dropped: accounts');
                return 'Table dropped: accounts'
            } else {
                console.log('error occured: ', err);
                return err;
            }

        });
    } catch (e) {
        console.log('error: ', e);
        return e;
    }

}

const createFunction = (createTableQuery) => {
    try {
        connection.query(createTableQuery, (err) => {
            if (!err) {
                console.log('table created: accounts');
                return 'Table created: accounts';
            } else {
                console.log('error occured: ', err);
                return err;
            }
        });
    } catch (e) {
        console.log('error: ', e);
        return e;
    }

}

const insertFunction = (columns, data) => {

    try {
        for (let i = 0; i < data.length; i++) {
            let insertDataQuery = `insert into accounts (${columns}) values (${data[i]});`
            connection.query(insertDataQuery, (err) => {
                if (!err) {
                    console.log('data added, row: ' + (i + 1));
                } else {
                    console.log('error occured: ', err);
                }
            });
        }
        return 'Inserted'

    } catch (e) {
        console.log('error: ', e);
        return e;
    }

}

const findFunction = async (findQuery) => {
    try {
        // var data = connection.query(findQuery, (err, res) => {
        //     if (!err) {
        //         console.log(res.rows);
        //         var data = res.rows;
        //         return data;
        //     } else {
        //         console.log('error occured: ', err);
        //         return err;
        //     }
        // });
        var data = await connection.query(findQuery);
        // console.log(data.rows);
        return data.rows;
    } catch (e) {
        console.log('error: ', e);
        return e;
    }

}

const updateFunction = (updateQuery) => {
    try {
        connection.query(updateQuery, (err, res) => {
            if (!err) {
                console.log('Table updated. \nRows affected: ' + res.rowCount);
                return 'Table updated. \nRows affected: ' + res.rowCount;
            } else {
                console.log('error occured: ', err);
                return err;
            }
        });
    } catch (e) {
        console.log('error: ', e);
        return e;
    }

}

const deleteFunction = (deleteQuery) => {
    try {
        connection.query(deleteQuery, (err, res) => {
            if (!err) {
                console.log('Request data deleted. \nRows affected: ' + res.rowCount);
                return 'Request data deleted. \nRows affected: ' + res.rowCount;
            } else {
                console.log('error occured: ', err);
                return err;
            }
        });
    } catch (e) {
        console.log('error: ', e);
        return e;
    }

}


module.exports = {
    dropTableFunction,
    createFunction,
    insertFunction,
    findFunction,
    updateFunction,
    deleteFunction
}