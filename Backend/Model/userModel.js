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

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minlength: [6, "Password must be greater than 6 characters"],
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    dp: {
        type: String
    }

})


const userModel = mongoose.model("userCollection", userSchema);
module.exports.userModel = userModel;
module.exports.userSchema = userSchema;