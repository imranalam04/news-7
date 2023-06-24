import mongoose from "mongoose";

const DbConnect = () => {
   if(mongoose.connection.readyState) {
    return mongoose.connection;
   }
   return mongoose.connect("mongodb://127.0.0.1:27017");
}

export default DbConnect
