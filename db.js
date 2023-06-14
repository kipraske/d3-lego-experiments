import sqlite3 from "sqlite3";

const filepath = "./lego-database.db";

export default function createDbConnection() {
  const db = new sqlite3.Database(filepath, (error) => {
    if (error) {
      throw error;
    }
  });
  console.log("Connection with SQLite has been established");
  return db;
}
