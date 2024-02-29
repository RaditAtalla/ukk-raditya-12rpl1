const express = require("express")
const app = express()
const cors = require("cors")
const indexRouter = require("./routes/index")
const userRouter = require("./routes/user")
const bookRouter = require("./routes/book")

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))
app.use(express.urlencoded({extended: true}))

app.use("/", indexRouter)
app.use("/user", userRouter)
app.use("/book", bookRouter)

app.listen(3000, () => {
  console.log("Server on http://localhost:3000")
})