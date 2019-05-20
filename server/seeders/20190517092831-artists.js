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
    },
    {
      name: 'Cassanova',
      email: 'cassanova@gmail.com',
      country: 'USA',
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Ariana Grande',
      email: 'ariana@gmail.com',
      country: 'Great Britain',
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Marshmellow',
      email: 'marshmellow@gmail.com',
      country: 'Ukraine',
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Cardi B',
      email: 'cardi@gmail.com',
      country: 'Russia',
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Sandoval',
      email: 'sandoval@gmail.com',
      country: 'Mexico',
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Rodriguez',
      email: 'rodriguez@gmail.com',
      country: 'Colombia',
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Nyashinski',
      email: 'nyashinski@gmail.com',
      country: 'Kenya',
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    }
  ]),
  down: queryInterface => queryInterface.bulkDelete('Artists')
};
