const { default: axios } = require("axios")

const api = process.env.APP_URL

async function findAll() {
  const { data } = await axios.get(`${api}`)
}
