
exports.seed = function(knex, Promise) {
  return knex('flags').truncate()
    .then(function () {
      return knex('flags').insert([
        {name: 'created'},
        {name: 'in progress'},
        {name: 'completed'}
      ]);
    });
};
