import { Connection } from "tedious";

export async function executeQuery(query) {
    return new Promise((resolve, reject) => {
        const connection = new Connection({
            server: '192.168.1.4',
            authentication: {
              type: 'default',
              options: {
                userName: 'sa',
                password: 'VeryStr0ngP@ssw0rd',
              },
            },
            options: {
              database: 'master',
              encrypt: false, 
              trustServerCertificate: true,
              port: 1433,
            },
        });
      connection.on('connect', (err) => {
        if (err) {
          reject(`Connection failed: ${err}`);
          return;
        }
  
        const request = new Request(query, (err, rowCount, rows) => {
          console.log(request);
          connection.close(); // Close the connection after the query
          if (err) {
            reject(`Error executing query: ${err}`);
          } else {
            const result = rows.map((columns) =>
              columns.reduce((acc, column) => {
                acc[column.metadata.colName] = column.value;
                return acc;
              }, {})
            );
            resolve(result);
          }
        });
  
        connection.execSql(request);
      });
  
      connection.connect();
    });
  }
