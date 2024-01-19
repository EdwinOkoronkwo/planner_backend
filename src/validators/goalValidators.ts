import { body } from "express-validator";

export class GoalValidators {
  static create() {
    return [
      body("name", "Name is required").isString(),
      body("description", "Description is required").isLength({ min: 10 }),
      body("start_date", "Start Date is required").isString(),
      body("end_date", "End Date is required").isString(),
      body("status", "Status is required").isString(),
    ];
  }
}
