const http = require("http")
const url = require("url")
const fs = require("fs");
const fsAsync = require("fs").promises;

const contentFileUtama = fs.readFileSync("./index.txt", "utf-8")
// console.log(fileUtama)

// express js
const server = http.createServer((req, res) => {
    console.log(req.url)
    const pathUrl = req.url

    if(pathUrl === "/nanda") {
        res.end("welcome nanda anjayy")
    } else if(pathUrl === "/") {
        res.end("hello welcome ke main page")
    } else if (pathUrl === "/anjay") {
        console.log("original data dari index.txt = " + contentFileUtama)
        async function reWriteFromNanda(filepath, content) {
            try {
                await fsAsync.readFile(filepath, content) 
                console.log("sukses menulis ulang file!")
                const resultReWrite = await fsAsync.readFile(filepath, "utf-8")
                res.end(resultReWrite)
            } catch (error) {
                console.log(error)
            }
        }

        reWriteFromNanda("./index.txt", "Hai tugas nanda 1")
    } else {
        res.end("kosong cuk, status code 404")
    }
})

server.listen(3000, '127.0.0.1', () => {
    console.log('aplikasi jalan nih di port 3000')
})