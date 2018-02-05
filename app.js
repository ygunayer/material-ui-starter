const fs = require('fs');
const path = require('path');
const express = require('express');
const server = express();

const config = require('config');

const assetPath = path.resolve(__dirname, 'dist/');
const indexPath = path.resolve(__dirname, 'src/index.production.html');

const port = +process.env.PORT || 3000;

fs.readFile(indexPath, 'utf8', (err, result) => {
    const indexContent = (result || '')
        .replace('{{TIMESTAMP}}', +new Date())
        .replace('{{APP_CONFIG}}', JSON.stringify(config, null, 4));

    server.use('/public', express.static(assetPath));

    server.use('/', (req, res) => res.header('Content-Type', 'text/html').send(indexContent));

    server.listen(port);
    console.log(`Server running on port ${port}`);
});
