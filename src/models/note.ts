"use strict";
import { Model } from "sequelize";

interface NoteAttributes {
  id: number;
  name: string;
  details: string;
  taskId: number;
  importance: string;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Note extends Model<NoteAttributes> implements NoteAttributes {
    id!: number;
    name!: string;
    details!: string;
    taskId!: number;
    importance!: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  Note.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      details: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      importance: {
        type: DataTypes.ENUM("Low", "Medium", "High"),
        allowNull: false,
      },
      taskId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Note",
    }
  );
  return Note;
};
