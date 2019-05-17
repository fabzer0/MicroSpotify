module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.createTable('Albums', {
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
      ownerId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Artists',
          key: 'id',
          as: 'owner'
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
  down: queryInterface => queryInterface.dropTable('Albums'),
};