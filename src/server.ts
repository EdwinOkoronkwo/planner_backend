import express = require("express");
import * as bodyParser from "body-parser";
import db from "./models";
import taskRouter from "./routes/taskRouter";
import goalRouter from "./routes/goalRouter";
import noteRouter from "./routes/noteRouter";
import cors from "cors";

export class Server {
  public app: express.Application = express();
  constructor() {
    this.setConfigs();
    this.setRoutes();
    this.error404Handler();
    this.handleErrors();
  }

  setConfigs() {
    this.connectMariaDB();
    this.configureBodyParser();
    this.configureJSON();
    this.configureCors();
  }

  connectMariaDB() {
    db.sequelize.sync().then(() => console.log("Connected to MariaDB"));
  }

  configureBodyParser() {
    this.app.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );
  }

  configureJSON() {
    this.app.use(express.json());
  }

  configureCors() {
    this.app.use(cors());
  }

  setRoutes() {
    this.app.use("/api/tasks", taskRouter);
    this.app.use("/api/goals", goalRouter);
    this.app.use("/api/notes", noteRouter);
  }

  error404Handler() {
    this.app.use((req: any, res: any) => {
      res.status(404).json({
        message: "Not found",
        status_code: 404,
      });
    });
  }

  handleErrors() {
    this.app.use((error: any, req: any, res: any, next: any) => {
      const errorStatus = req.errorStatus || 500;
      res.status(errorStatus).json({
        message: error.message || "Something went wrong",
        status_code: errorStatus,
      });
    });
  }
}
