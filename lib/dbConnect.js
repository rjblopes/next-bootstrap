/* This is a database connection function */
import mongoose from 'mongoose';

const connection = {}; /* creating connection object */

async function dbConnect() {
  /* check if we have connection to our databse */
  if (connection.isConnected || !process.env.MONGODB_URI) {
    return !!connection.isConnected;
  }

  /* connecting to our database */
  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });

  connection.isConnected = db.connections[0].readyState;
  return !!connection.isConnected;
}

export async function dbConnection() {
  if (!await dbConnect()) {
    throw new Error();
  }
}

export default dbConnect;
