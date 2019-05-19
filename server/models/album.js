module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    ownerId: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  }, {});
  Album.associate = (models) => {
    Album.hasMany(models.Playlist, { foreignKey: 'albumId', as: 'songs' } );
    Album.belongsTo(models.Artist, { foreignKey: 'ownerId', onDelete: 'CASCADE' } );
  };

  return Album;
}