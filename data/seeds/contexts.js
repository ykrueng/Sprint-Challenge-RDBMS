
exports.seed = function(knex, Promise) {
  return knex('contexts').truncate()
    .then(function () {
      return knex('contexts').insert([
        {name: 'home'},
        {name: 'work'},
        {name: 'computer'},
        {name: 'walmart'},
        {name: 'school'},
        {name: 'kroger'},
      ]);
    });
};
