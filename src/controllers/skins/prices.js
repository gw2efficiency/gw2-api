const mongo = require('../../helpers/mongo.js')

async function prices (request, response) {
  let skinPricesCache = await mongo.collection('cache')
    .find({id: 'skinPrices'})
    .limit(1).next()

  response.send(skinPricesCache.content)
}

module.exports = prices
