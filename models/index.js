module.exports = function(knex) {
  return {
    test: require("./test")(knex),
    // channels: require("./channels")(knex),
    // channelMessages: require("./channelMessages")(knex),
    // userMessages: require("./userMessages")(knex),
  };
};
