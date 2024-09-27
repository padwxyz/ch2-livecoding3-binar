const fs = require("fs").promises;
const fsSync = require("fs");


// 1. membaca file surat
let loveLetter = fsSync.readFileSync("./index.txt", "utf-8");

// 2. proses print isi surat
console.log(`ini dari line 7: ${loveLetter}`);

// 3. membuat file baru untuk membalas surat
const loveFeedback = "hello juga anjay cihuyy"
fsSync.writeFileSync("./balasan.txt", loveFeedback);

// fs.mkdir("TEST_FOLDER", () => {});

// menimpa isi konten dari index.txt
fsSync.writeFileSync("./index.txt", "anjayyyyy");

// INI ASYNC nya
// asynchronous file/write

async function bacaSurat() {
    try{
        await fs.readFile('./index.txt', "utf-8")
        console.log(`ini surat baru ${bacaSurat}`)
    } catch(error) {
        console.error(error)
    }
}

bacaSurat()

// promises
fs.readFile("./index.txt", "utf-8")
    .then((isiSurat) => {
        loveLetter = isiSurat;
        console.log(`ini adalah isi dari surat: ${isiSurat}`)
    })
    .catch((error) => {
        console.error("erorr accured: ", error)
    })

console.log(`ini dari line 21: ${loveLetter}`);



