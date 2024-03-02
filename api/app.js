const express = require("express");
const app = express();
const cors = require("cors");
const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");
const bookRouter = require("./routes/book");
const modRouter = require("./routes/moderator");

app.use(
	cors({
		origin: "http://localhost:5173",
		credentials: true,
	})
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/book", bookRouter);
app.use("/moderator", modRouter);

app.listen(3000, () => {
	console.log("==Server on http://localhost:3000");
});
