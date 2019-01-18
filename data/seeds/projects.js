
exports.seed = function(knex, Promise) {
  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
        {
          name: 'School Toy Drive',
          description: 'Collect toy for needy children in the community',
          flag_id: 2
        },
        {
          name: 'Filing Tax ',
          description: 'File 2018 Income Tax',
          flag_id: 1
        },
        {
          name: 'Code Clean Up',
          description: 'Refactor codes and add documentation as needed',
          flag_id: 2
        },
        {
          name: 'Grocery Shopping',
          description: 'Weekly grocery shopping',
          flag_id: 1
        }
      ]);
    });
};
