const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

//middleware
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);
app.use("/api/v1/tasks", tasks);
app.use("/api/v1/tasks/:id", tasks);
app.use("/api/v1/tasks/:id", tasks);

const port = 3000;
app.listen(port, console.log(`server is listening on ${port}`));
