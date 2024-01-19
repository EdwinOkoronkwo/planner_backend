import { Router } from "express";
import { NoteController } from "../controllers/noteController";
import { NoteValidators } from "../validators/noteValidators";
import { GlobalMiddleware } from "../middlewares/GlobalMiddleware";

class NoteRouter {
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
    this.router.get("", GlobalMiddleware.checkError, NoteController.read);
    this.router.get("/:id", GlobalMiddleware.checkError, NoteController.find);
  }

  postRoutes() {
    this.router.post(
      "",
      NoteValidators.create(),
      GlobalMiddleware.checkError,
      NoteController.create
    );
  }

  patchRoutes() {
    this.router.patch(
      "/:id",
      GlobalMiddleware.checkError,
      NoteController.update
    );
  }

  putRoutes() {}

  deleteRoutes() {
    this.router.delete("/:id", NoteController.destroy);
  }
}

export default new NoteRouter().router;
