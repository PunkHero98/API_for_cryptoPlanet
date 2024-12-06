import express from "express";
import path, { dirname, join } from "path";
import { fileURLToPath } from "url";
import createError from "http-errors";
import morgan from "morgan";
import route from "./routes/index.js";
const ___dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// app.use(express.static(path.join(___dirname , 'public')));
app.use(morgan("combined"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route INIT
route(app);

// HTTP routing error
app.use((req, res, next) => {
  next(createError.NotFound("This route does not exist."));
});

app.use((err, req, res, next) => {
  res.json({
    status: err.status || 500,
    message: err.message,
  });
});

// Server Port INIT
app.listen(port, () => {
  console.log(`This server is running at http://localhost:${port}`);
});
