import { validationResult } from "express-validator";

export class GlobalMiddleware {
  static checkError(req: any, res: any, next: any) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      next(new Error(errors.array()[0].msg));
    } else {
      next();
    }
  }
}
