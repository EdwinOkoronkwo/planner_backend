"use strict";
import { Model } from "sequelize";

interface TaskAttributes {
  id: number;
  name: string;
  description: string;
  start_date: Date;
  end_date: Date;
  status: string;
  goalId: number;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Task extends Model<TaskAttributes> implements TaskAttributes {
    id!: number;
    name!: string;
    description!: string;
    start_date!: Date;
    end_date!: Date;
    status!: string;
    goalId!: number;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    //define association here

    // static associate = (Goal: any) => {
    //   this.belongsTo(Goal, {
    //     foreignKey: "goalId",
    //   });
    // };
  }
  Task.init(
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
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("Not Done", "Done"),
        allowNull: false,
      },
      goalId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Task",
    }
  );
  return Task;
};
