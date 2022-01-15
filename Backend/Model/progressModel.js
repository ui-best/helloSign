const mongoose = require("mongoose");
const DB_LINK = process.env.DB_LINK;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose
    .connect(
        DB_LINK,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then((db) => {
        console.log("Connected to db !!!");
    });

let progressSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    progress:{
        type:Array,
        default:[]
    }
   
})


const progressModel = mongoose.model("ProgressCollection", progressSchema);
module.exports.progressModel = progressModel;