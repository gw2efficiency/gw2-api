const mongo = require('../../helpers/mongo.js')
const {invalidParameters} = require('../../helpers/controllers.js')
const config = require('../../config/application.js')

async function bySkin (request, response) {
  let skinId = parseInt(request.params.skin_id, 10)

  if (!skinId) {
    return invalidParameters(response)
  }

  let items = await mongo.collection('items')
    .find({skins: skinId, lang: config.server.defaultLanguage}, {_id: 0, id: 1})
    .toArray()

  response.send(items.map(i => i.id))
}

module.exports = bySkin
