import registerRouter from "./register.route.js";
import loginRouter from './login.route.js'
export default function route(app) {
  app.use('/login' , loginRouter)
  app.use("/register", registerRouter);
}
