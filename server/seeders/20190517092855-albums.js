module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Albums', [
    {
      name: 'Father of four',
      ownerId: 1,
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Queen',
      ownerId: 2,
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Scorpion',
      ownerId: 3,
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Carter V',
      ownerId: 4,
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'AstroWorld',
      ownerId: 5,
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    }
  ]),
  down: queryInterface => queryInterface.bulkDelete('Albums')
};

