const { connection } = require('./db');

const dropTableFunction = async (dropQuery) => {
    try {
        await connection.query(dropQuery);
       
            return 'Table dropped'
      
    } catch (e) {
        console.log('error: ', e);
        return e;
    }

}

const createFunction = async (createTableQuery) => {
    try {
        await connection.query(createTableQuery);
        
            return 'Table Created'
 
    } catch (e) {
        console.log('error: ', e);
        return e;
    }

}

const insertFunction = async (columns, data) => {

    try {
        for (let i = 0; i < data.length; i++) {
            let insertDataQuery = `insert into accounts (${columns}) values (${data[i]});`
            await connection.query(insertDataQuery, (err) => {
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
        var data = await connection.query(findQuery);
        return data.rows;
    } catch (e) {
        console.log('error: ', e);
        return e;
    }

}

const updateFunction = async (updateQuery) => {
    try {
        let data = await connection.query(updateQuery);
        return `Affected Rows: ${data.rowCount}`;
    } catch (e) {
        console.log('error: ', e);
        return e;
    }

}

const deleteFunction = async (deleteQuery) => {
    try {
        let data = await connection.query(deleteQuery);
        return `Affected Rows: ${data.rowCount}`;
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