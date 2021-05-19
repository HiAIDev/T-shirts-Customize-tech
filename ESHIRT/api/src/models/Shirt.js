const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('shirt', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    size: {
      type: DataTypes.ENUM('S', 'M', 'L', 'XL', 'XXL'),
      allowNull: true,
    },
    print: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    // print: {
    //   type: DataTypes.BLOB('long'),
    //   allowNull: true,
    //   // validate: {
    //   //   isUrl: true
    //   // }
    // },
    score: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    public: {
      type: DataTypes.ENUM("pending", "true", "false"),
      allowNull: false,
      
    },
    created_by_user: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
};


/* testeando GIT PUSH  */