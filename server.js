const app = require("./app");

const { PORT = 5000, HOST = "localhost" } = process.env;

app.listen(PORT, () => {
  console.log(`Server running on http://${HOST}:${PORT}/`);
});
