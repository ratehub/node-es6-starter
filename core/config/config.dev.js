import path from "path";


const config = {
    logFileDir: path.join(__dirname, '../../log'),
    logFileName: 'app.log',

    serverPort: process.env.serverPort || 3000
};

export default config;