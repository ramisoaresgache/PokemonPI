const axios = require("axios");
require("dotenv").config();
const { API_URL } = process.env;
const { Type } = require("../db");

let gate = true;

let arrayTypes = [];

module.exports = async (req, res, next) => {
  if (gate) {
    let api = await axios.get(`${API_URL}/type`, {
      headers: {
        "accept-encoding": "*",
      },
    });
    arrayTypes = api.data.results.map((c) => {
      return  { name: c.name}
    })
    await Type.bulkCreate(arrayTypes);
    gate = false;
  }
  next();
};
