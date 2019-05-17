module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.createTable('Playlists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      albumId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Albums',
          key: 'id',
          as: 'album'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
  down: queryInterface => queryInterface.dropTable('Playlists'),
};