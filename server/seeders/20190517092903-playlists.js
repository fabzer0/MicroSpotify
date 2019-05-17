module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Playlists', [
    {
      name: 'Chosen',
      albumId: 1,
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Ye',
      albumId: 2,
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'I like it',
      albumId: 3,
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Money',
      albumId: 4,
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Please Me',
      albumId: 5,
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    }
  ]),
  down: queryInterface => queryInterface.bulkDelete('Playlists')
};

