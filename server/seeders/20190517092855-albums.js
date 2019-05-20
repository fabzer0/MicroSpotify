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
    },
    {
      name: 'Doom',
      ownerId: 1,
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Man on Earth',
      ownerId: 6,
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Man on a wire',
      ownerId: 3,
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Carter III',
      ownerId: 7,
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Jurassic',
      ownerId: 8,
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Blackish',
      ownerId: 1,
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Compton',
      ownerId: 2,
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Rings and Blings',
      ownerId: 9,
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Jamaine',
      ownerId: 4,
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Trap World',
      ownerId: 5,
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Mischief',
      ownerId: 10,
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Trukfit',
      ownerId: 12,
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'We the best',
      ownerId: 3,
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Beast Mode',
      ownerId: 4,
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Black lives matter',
      ownerId: 11,
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
  ]),
  down: queryInterface => queryInterface.bulkDelete('Albums')
};

