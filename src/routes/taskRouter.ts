import { Router } from "express";
import { TaskController } from "../controllers/taskController";
import { TaskValidators } from "../validators/taskValidators";
import { GlobalMiddleware } from "../middlewares/GlobalMiddleware";

class TaskRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.postRoutes();
    this.getRoutes();
    this.patchRoutes();
    this.putRoutes();
    this.deleteRoutes();
  }

  getRoutes() {
    this.router.get("", GlobalMiddleware.checkError, TaskController.read);
    this.router.get("/:id", GlobalMiddleware.checkError, TaskController.find);
  }

  postRoutes() {
    this.router.post(
      "",
      TaskValidators.create(),
      GlobalMiddleware.checkError,
      TaskController.create
    );
  }

  patchRoutes() {
    this.router.patch(
      "/:id",
      GlobalMiddleware.checkError,
      TaskController.update
    );
  }

  putRoutes() {}

  deleteRoutes() {
    this.router.delete("/:id", TaskController.destroy);
  }
}

export default new TaskRouter().router;
