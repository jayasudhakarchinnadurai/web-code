const mongoose =require("mongoose");
require("dotenv").config()
mongoose.connect(`mongodb+srv://sudhakar:${process.env.DB_PASSWORD}@cluster0.k26mwha.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
{ useNewUrlParser:true,UseUnifiedTopology:true})

