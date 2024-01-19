import { Router } from "express";
import { GoalController } from "../controllers/goalController";
import { GoalValidators } from "../validators/goalValidators";
import { GlobalMiddleware } from "../middlewares/GlobalMiddleware";

class GoalRouter {
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
    this.router.get("", GlobalMiddleware.checkError, GoalController.read);
    this.router.get("/:id", GlobalMiddleware.checkError, GoalController.find);
  }

  postRoutes() {
    this.router.post(
      "",
      GoalValidators.create(),
      GlobalMiddleware.checkError,
      GoalController.create
    );
  }

  patchRoutes() {
    this.router.patch(
      "/:id",
      GlobalMiddleware.checkError,
      GoalController.update
    );
  }

  putRoutes() {}

  deleteRoutes() {
    this.router.delete(
      "/:id",
      GlobalMiddleware.checkError,
      GoalController.destroy
    );
  }
}

export default new GoalRouter().router;
