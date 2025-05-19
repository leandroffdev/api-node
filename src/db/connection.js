const mongoose = require("mongoose");

// Conexão com o MongoDB
main = async () =>{
    try {
        await mongoose.connect(process.env.DATABASE);
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
}
// Exportando a conexão
module.exports = main;