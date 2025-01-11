 
import mongoose from 'mongoose';

const MONGODB_URI ='mongodb+srv://babul1946:babul@practice.n2ruz.mongodb.net/eCommerce?retryWrites=true&w=majority';

async function dbConnect() {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  console.log("database is connected babul babul")
  return mongoose.connect(MONGODB_URI);
}

export default dbConnect;









