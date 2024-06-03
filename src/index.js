// For refrence its entry points mostly used to connect db
import dotenv from "dotenv"
import connectDB from "./db/db.js"
import app from "./app.js"

dotenv.config()

connectDB()
.then(()=>{
    app.on("error",()=>{
        console.log(`Error occured inside express!!!`);
    })

    let port = process.env.PORT || 8000
    app.listen(port,()=>{
        console.log(`Server is running on ${port}`);
    })
})
.catch(()=>{
    console.log("Error occured after connecting the db!!!");
})