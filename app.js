import express from "express";
import dotenv from "dotenv";
import authRouter from "./routers/auth.js";
import productRouter from "./routers/product.js";
import cartRouter from "./routers/cart.js";
import { checkAuth } from "./midlewares/auth.js";
import userRouter from "./routers/user.js";
import cors from "cors";

/* `dotenv.config();` is a function call that loads the environment variables from a `.env` file into
the Node.js process. The `.env` file contains key-value pairs of configuration settings that the
application needs. By calling `dotenv.config()`, the application can access these environment
variables using `process.env.VARIABLE_NAME`. */
dotenv.config();
/* `const app = express();` creates an instance of the Express application. This instance represents
the web application and is used to define routes, middleware, and other functionalities of the
application. */
const app = express();
/* `const port = 3000;` is declaring a constant variable `port` and assigning it the value `3000`. This
variable is used to specify the port number on which the server will listen for incoming requests.
In this case, the server will listen on port 3000. */
const port = process.env.PORT || 3000;

/* `app.use(express.json());` is a middleware function that parses incoming requests with JSON
payloads. It allows the server to handle JSON data sent in the request body. This middleware adds a
`body` property to the `request` object, containing the parsed JSON data. It is commonly used to
handle JSON data in API endpoints. */
app.use(express.json());
/* `app.use(cors());` is a middleware function that enables Cross-Origin Resource Sharing (CORS) for
the Express application. */
app.use(cors());
/* `app.use("/api/auth", authRouter);` is mounting the `authRouter` middleware at the `/api/auth`
route. */
app.use("/api/auth", authRouter);
/* The line `app.use("/api/products", checkAuth, productRouter);` is mounting the `productRouter`
middleware at the `/api/products` route. */
app.use("/api/products", checkAuth, productRouter);
/* The line `app.use("/api/cart", checkAuth, cartRouter);` is mounting the `cartRouter` middleware at
the `/api/cart` route. */
app.use("/api/cart", checkAuth, cartRouter);

app.use("/api/user", userRouter);

/* `app.listen(port, () => console.log(`Server app listening on port !`));` is starting the
Express server and telling it to listen for incoming requests on the specified `port`. */
app.listen(port, () => console.log(`Server app listening on port ${port}!`));
