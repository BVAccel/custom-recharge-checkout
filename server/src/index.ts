import compression from "compression";
import express, { NextFunction, Request, Response } from "express";

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(compression());

app.get("/shipping", (req: Request, res: Response) => {
  res.sendFile(__dirname + "/public/step1.html");
});

app.get("/payment", (req: Request, res: Response) => {
  res.sendFile(__dirname + "/public/step2.html");
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
