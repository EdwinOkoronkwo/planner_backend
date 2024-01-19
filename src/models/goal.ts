"use strict";
import { Model } from "sequelize";

interface GoalAttributes {
  id: number;
  name: string;
  description: string;
  start_date: Date;
  end_date: Date;
  status: string;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Goal extends Model<GoalAttributes> implements GoalAttributes {
    id!: number;
    name!: string;
    description!: string;
    start_date!: Date;
    end_date!: Date;
    status!: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  Goal.init(
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
    },
    {
      sequelize,
      modelName: "Goal",
    }
  );
  return Goal;
};
