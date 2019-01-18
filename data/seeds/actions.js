
exports.seed = function(knex, Promise) {
  return knex('actions').truncate()
    .then(function () {
      return knex('actions').insert([
        {
          description: 'Create Flyer',
          notes: 'Design and print out a master flyer',
          flag_id: 3,
          project_id: 1,
        },
        {
          description: 'Copy Flyers',
          notes: 'Print 100 copy of flyers',
          flag_id: 1,
          project_id: 1,
        },
        {
          description: 'Distribute Flyers',
          notes: 'Distribute to classes, neighbors, coworkers',
          flag_id: 1,
          project_id: 1,
        },
        {
          description: 'Collect Supporting Documents',
          notes: 'W2s, 1099s, Insurances, Banks',
          flag_id: 1,
          project_id: 2,
        },
        {
          description: 'Shop for tax tools',
          notes: 'H&R, TurboTax, TaxAct',
          flag_id: 1,
          project_id: 2,
        },
        {
          description: 'File Tax',
          notes: null,
          flag_id: 1,
          project_id: 2,
        },
        {
          description: 'Buy produce',
          notes: 'Tomatos, potatos, tofu, apples, banana',
          flag_id: 1,
          project_id: 4,
        },
        {
          description: 'Buy snack',
          notes: 'Ritz, raisins, nuts',
          flag_id: 1,
          project_id: 4,
        },
        {
          description: 'Buy cereal',
          notes: 'Honeynut Cheerios 2boxes, Choco peebles 1 ',
          flag_id: 1,
          project_id: 4,
        },
        {
          description: 'Buy meat',
          notes: '1 lbs beef steak',
          flag_id: 1,
          project_id: 4,
        }
      ]);
    });
};
