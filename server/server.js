const express = require("express");
const app = express();
const sql = require('mssql');
const { executeQuery } = require("./database");

app.get('/', async (req, res) => {
    const query = "SELECT * FROM HELLOWORLD";
    const values = [];
    const paramNames = [];
    const isStoredProcedure = false;
    try {
        const result = await executeQuery(query, values, paramNames, isStoredProcedure);
        console.log(result.recordsets);
        res.json(result);
    } catch (error) {
        console.error(error);
    }
})

app.listen(8000, (() => {
    console.log("server running on port 8000");
}))

