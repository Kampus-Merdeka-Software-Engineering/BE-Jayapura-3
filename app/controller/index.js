const dataSepatu = require('./sepatu.json');
const sepatu = require("../model/sepatu");
const fs = require("fs");

const path = require("path");

sepatu.findAll()
    .then(function (data) 
    {
        const sepatuData = data; 
    })
    .catch(function (err) {
        res.json({
            error: err,
    });
});

const filePath = path.join(__dirname, "sepatu.json");
function getSepatu(req, res, next) {
let sepatuFs = [];
fs.readFile(filePath, "utf8", (err, jsonString) => {
    if (err) {
        console.log("Error reading file from disk:", err);
        res.status(500).json({ error: "Error reading JSON file" });
        return;
    }
    try {
        sepatuFs = JSON.parse(jsonString);
        res.json({ sepatuFs });
        } catch (err) {
        console.log("Error parsing JSON string :", err);
        }
    });
}

function addSepatu(req, res, next) {
    const newData = req.body;

fs.readFile(filePath, "utf8", (err, jsonString) => {
    if (err) {
        console.log("Error reading file from disk:", err);
        res.status(500).json({ error: "Error reading JSON file" });
        return;
    }
    try {
        const existingData = JSON.parse(jsonString);
        existingData.push(newData);
        const updateData = JSON.stringify(existingData, null, 2);
        fs.writeFile(filePath, updateData, (writeErr) => {
        if (writeErr) {
            console.log("Error writing JSON file :", writeErr);
            res.status(500).json({ error: "Error writing JSON file" });
        } else {
            res.json({ message: "Data added successfully" });
        }
    });
        } catch (parseError) {
        console.log("Error parsing JSON string :", parseError);
        res.status(500).json({ error: "Error parsing JSON file" });
        }
    });
}

module.exports = {
    getSepatu,
    addSepatu,
};
