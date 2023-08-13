import express from "express"
import routes from "./routes";
const app = express();
const port = 4000;
app.use("/api",routes)
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});