import compression from "compression";
import express, { NextFunction, Request, Response } from "express";

const app = express();

app.use(express.static(__dirname + "/build"));
app.use(compression());

app.use((req, res, next) => {
  return res.sendFile(__dirname + "/build/index.html");
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);

  // we must add null as the default value, otherwise the property will be
  // removed when used in res.json
  const { status, path, message, value = null } = err;

  if (status && message) {
    return res.status(status).json({ errors: [{ path, value, message }] });
  }

  if (status) {
    return res.sendStatus(status);
  }

  return next();
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
