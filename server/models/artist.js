module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
    email: {
      unique: true,
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    imageUrl: {
      type: DataTypes.TEXT,
    }
  }, {});
  Artist.associate = (models) => {
    Artist.hasMany(models.Album, {
      foreignKey: 'ownerId',
      as: 'albums'
    });
  };

  return Artist;
};
