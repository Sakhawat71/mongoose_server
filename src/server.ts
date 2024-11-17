import app from "./app"
import mongoose from "mongoose";
const PORT = 5000;


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

    
}

app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
})