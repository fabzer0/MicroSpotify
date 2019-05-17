module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
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
    albumId: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  }, {});
  Playlist.associate = (models) => {
    Playlist.belongsTo(models.Album, { foreignKey: 'albumId', onDelete: 'CASCADE' } );
  };

  return Playlist;
}
