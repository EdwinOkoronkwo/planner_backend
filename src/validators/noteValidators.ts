import { body } from "express-validator";

export class NoteValidators {
  static create() {
    return [
      body("name", "Name is required").isString(),
      body("details", "Detail is required")
        .isLength({ min: 100 })
        .withMessage("Detail must have more than 100 charaters"),
      body("importance", "Importance is required").isString(),
      body("taskId", "TaskId is required").isNumeric(),
    ];
  }
}
