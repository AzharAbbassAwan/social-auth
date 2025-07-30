module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      googleId: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
      },
      email: DataTypes.STRING,
      name: DataTypes.STRING,
    });
  
    return User;
  };
  