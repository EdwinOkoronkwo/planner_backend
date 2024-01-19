import db from "../models";

export class GoalController {
  static async create(req: any, res: any, next: any) {
    const { name, description, start_date, end_date, status } = req.body;
    try {
      const goal = await db.Goal.create({
        name,
        description,
        start_date,
        end_date,
        status,
      });
      return res.json(goal);
    } catch (err) {
      console.log(err);
      //return res.status(400).json(err);
      next(err);
    }
  }

  static async read(req: any, res: any, next: any) {
    try {
      const tasks = await db.Goal.findAll();
      return res.json(tasks);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async find(req: any, res: any, next: any) {
    const id = parseInt(req.params.id);
    try {
      const goal = await db.Goal.findOne({
        where: {
          id,
        },
      });
      return res.json(goal);
    } catch (err) {
      console.log(err);
      //return res.status(400).json(err);
      next(err);
    }
  }

  static async update(req: any, res: any, next: any) {
    const id = parseInt(req.params.id);
    const { name, description, start_date, end_date, status } = req.body;
    try {
      const goal = await db.Goal.findOne({
        where: { id },
      });
      goal.name = name;
      goal.description = description;
      goal.start_date = start_date;
      goal.end_date = end_date;
      goal.status = status;
      await goal.save();
      console.log(goal);
      return res.json(goal);
    } catch (err) {
      console.log(err);
      //return res.status(400).json(err);
      next(err);
    }
  }

  static async destroy(req: any, res: any, next: any) {
    const id = parseInt(req.params.id);
    try {
      const goal = await db.Goal.findOne({
        where: { id },
      });
      await goal.destroy();
      return res.json({ message: "Goal deleted!" });
    } catch (err) {
      console.log(err);
      //return res.status(400).json(err);
      next(err);
    }
  }
}
