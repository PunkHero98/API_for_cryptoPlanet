import registerRouter from "./register.route.js";
export default function route(app) {
  app.use("/register", registerRouter);
}
