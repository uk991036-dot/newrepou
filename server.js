const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {

    let fileName;

    
    if (req.url === "/" || req.url === "/homepage.html") {
        fileName = "homepage.html";
    }

    
    else if (req.url === "/about" || req.url === "/about.html") {
        fileName = "about.html";
    }

    
    else if (req.url === "/faq" || req.url === "/faq.html") {
        fileName = "faq.html";
    }

    
    else {
        res.writeHead(404, {
            "Content-Type": "text/html"
        });

        res.end("<h1>404 - Page Not Found</h1>");

        return;
    }

    const filePath = path.join(__dirname, fileName);

    fs.readFile(filePath, "utf8", (err, data) => {

        if (err) {

            console.log(err);

            res.writeHead(500, {
                "Content-Type": "text/html"
            });

            res.end("<h1>500 - Server Error</h1>");

            return;
        }

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(data);

    });

});
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

