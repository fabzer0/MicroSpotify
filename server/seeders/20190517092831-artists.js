module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Artists', [
    {
      name: 'Drake',
      email: 'drake@gmail.com',
      country: 'USA',
      imageUrl: 'http://thesource.com/wp-content/uploads/2017/11/Drake-Wants-to-Re-Focus-on-Acting-22Take-Six-Months-or-a-Year-to-Myself-and-do-Some-Great-Films22.jpg',
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Normani',
      email: 'normani@gmail.com',
      country: 'Jamaica',
      imageUrl: 'https://colormagazine.com/files/2017/03/Normani-Kordei-2.jpg',
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Iggy Azalea',
      email: 'iggyazalea@gmail.com',
      country: 'Australia',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYCY5Ixv1Jgff6EHQzWzlnCWvCdBdjr89J17u5YocLqf8dD6p-DQ',
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Rihanna',
      email: 'rihanna@gmail.com',
      country: 'USA',
      imageUrl: 'http://www.rihannanow.com/wp-content/uploads/2018/12/IMG_3766-240x300.jpg',
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Jaden Smith',
      email: 'jadensmith@gmail.com',
      country: 'USA',
      imageUrl: 'https://saintheron.com/wp-content/uploads/2017/11/Jaden-Smith.jpg',
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Kendrick Lamar',
      email: 'kendrick@gmail.com',
      country: 'USA',
      imageUrl: 'http://cache.umusic.com/_sites/kendricklamar.com/images/og.jpg',
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Ariana Grande',
      email: 'ariana@gmail.com',
      country: 'USA',
      imageUrl: 'https://akns-images.eonline.com/eol_images/Entire_Site/201799/rs_634x793-171009065020-634.ariana-grande.10917.jpg?fit=inside|900:auto&output-quality=90',
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Rita Ora',
      email: 'ritaora@gmail.com',
      country: 'Britain',
      imageUrl: 'https://pmcvariety.files.wordpress.com/2017/08/rita-ora-credit-phil-poynter.jpg?w=1000',
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Cardi B',
      email: 'cardi@gmail.com',
      country: 'USA',
      imageUrl: 'https://images.sk-static.com/images/media/profile_images/artists/8962314/huge_avatar',
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Chris Brown',
      email: 'chrisbrown@gmail.com',
      country: 'USA',
      imageUrl: 'https://akns-images.eonline.com/eol_images/Entire_Site/2019022/rs_1024x759-190122094758-1024-Chris-Brown-AA-012219.jpg?fit=inside|900:auto&output-quality=90',
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Safaree Samuels',
      email: 'safaree@gmail.com',
      country: 'USA',
      imageUrl: 'https://www.billboard.com/files/styles/article_main_image/public/media/Safaree-press-2016-billboard-1548.jpg',
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    },
    {
      name: 'Emtee',
      email: 'emtee@gmail.com',
      country: 'USA',
      imageUrl: 'https://citizen.co.za/wp-content/uploads/2018/06/Emtee-Publicity-Shot-557x418.jpg',
      createdAt: '2018-11-14',
      updatedAt: '2018-11-14'
    }
  ]),
  down: queryInterface => queryInterface.bulkDelete('Artists')
};
