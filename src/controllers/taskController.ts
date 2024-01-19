import db from "../models";

export class TaskController {
  static async create(req: any, res: any, next: any) {
    const { name, description, goalId, start_date, end_date, status } =
      req.body;

    try {
      const task = await db.Task.create({
        name,
        description,
        goalId,
        start_date,
        end_date,
        status,
      });
      return res.json(task);
    } catch (err) {
      console.log(err);
      //return res.status(400).json(err);
      next(err);
    }
  }

  static async read(req: any, res: any, next: any) {
    try {
      const tasks = await db.Task.findAll();
      return res.json(tasks);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Something went wrong!" });
    }
  }

  static async find(req: any, res: any, next: any) {
    const id = parseInt(req.params.id);
    try {
      const task = await db.Task.findOne({
        where: {
          id,
        },
      });
      return res.json(task);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Something went wrong!" });
    }
  }

  static async update(req: any, res: any, next: any) {
    const id = parseInt(req.params.id);
    const { name, description, goalId, start_date, end_date, status } =
      req.body;
    try {
      const task = await db.Task.findOne({
        where: { id },
      });
      task.name = name;
      task.description = description;
      task.goalId = goalId;
      task.start_date = start_date;
      task.end_date = end_date;
      task.status = status;
      await task.save();
      console.log(task);
      return res.json(task);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Something went wrong" });
    }
  }

  static async destroy(req: any, res: any, next: any) {
    const id = parseInt(req.params.id);
    try {
      const task = await db.Task.findOne({
        where: { id },
      });
      await task.destroy();
      return res.json({ message: "Task deleted!" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Something went wrong" });
    }
  }
}
