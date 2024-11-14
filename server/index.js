const express = require("express");
const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
});
