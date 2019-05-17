module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Artists', [
    {
      name: 'Black Smith',
      email: 'blacksmith@gmail.com',
      country: 'Uganda',
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Trevor Noah',
      email: 'trevornoah@gmail.com',
      country: 'South Africa',
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Iggy Azalea',
      email: 'iggyazalea@gmail.com',
      country: 'Australia',
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Rihanna',
      email: 'rihanna@gmail.com',
      country: 'USA',
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Will Smith',
      email: 'willsmith@gmail.com',
      country: 'USA',
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    }
  ]),
  down: queryInterface => queryInterface.bulkDelete('Artists')
};
