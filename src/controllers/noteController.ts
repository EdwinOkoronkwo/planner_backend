import db from "../models";

export class NoteController {
  static async create(req: any, res: any, next: any) {
    const { name, details, taskId, importance } = req.body;
    try {
      const note = await db.Note.create({
        name,
        details,
        taskId,
        importance,
      });
      return res.json(note);
    } catch (err) {
      //return res.status(400).json(err);
      next(err);
    }
  }

  static async read(req: any, res: any, next: any) {
    try {
      const tasks = await db.Note.findAll();
      return res.json(tasks);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async find(req: any, res: any, next: any) {
    const id = parseInt(req.params.id);
    try {
      const note = await db.Note.findOne({
        where: {
          id,
        },
      });
      return res.json(note);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async update(req: any, res: any, next: any) {
    const id = parseInt(req.params.id);
    const { name, details, taskId, importance } = req.body;
    try {
      const note = await db.Note.findOne({
        where: { id },
      });
      note.name = name;
      note.details = details;
      note.taskId = taskId;
      note.importance = importance;
      await note.save();
      console.log(note);
      return res.json(note);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async destroy(req: any, res: any, next: any) {
    const id = parseInt(req.params.id);
    try {
      const note = await db.Note.findOne({
        where: { id },
      });
      await note.destroy();
      return res.json({ message: "Note deleted!" });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}
