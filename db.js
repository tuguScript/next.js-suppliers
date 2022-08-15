const Database = require("@replit/database")
const db = new Database()
db.set("keyTest", "valTest").then(() => {
  console.log('run setting db')
});

