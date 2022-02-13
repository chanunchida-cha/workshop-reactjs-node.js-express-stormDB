const StormDB = require("stormdb");
const engine = new StormDB.localFileEngine("./db/db.stormdb");
const db = new StormDB(engine);


db.default({
  employees: [
    {
    }
  ],
});

module.exports = db;
