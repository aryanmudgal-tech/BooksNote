import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

// app initiated
const app = express();
const port = 3000;

// request to postgres
const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});
db.connect();

// Bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// home page
app.get("/", async (req, res) => {

    let result = await db.query("select * from entries")
    let entries = result.rows
        
    // entries = [
    //     {
    //       id: 1,
    //       title: '100 habits',
    //       rating: 7,
    //       entrydate: 2024-04-22T18:30:00.000Z,
    //       summary: 'okay'
    //     }
    //   ]


    res.render("index.ejs", {content: entries});
});


// redirect to home page
app.get("/read", async (req, res) => {
    res.redirect("/")
});

// add posts
app.get("/add",async(req, res)=>{
    res.render("add.ejs")       
})

app.post("/submit", async(req,res)=>{
    await db.query("insert into entries(title, rating, summary) values ($1,$2,$3)", 
        [req.body.title, req.body.rating, req.body.summary])


    res.redirect("/")
})

app.post("/delete", async(req,res)=>{
    await db.query("delete from entries where id=($1)",
        [req.body.deleteId])

    res.redirect("/")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
