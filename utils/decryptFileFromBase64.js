const fs = require('fs').promises;

async function decryptFileFromBase64(filePath, outputFilePath) {
    try {
        const data = await fs.readFile(filePath);
        const bufferData = Buffer.from(data.toString(), 'base64');
        await fs.writeFile(outputFilePath, bufferData);
        console.log('Archivo desencriptado y guardado en:', outputFilePath);
    } catch (err) {
        console.error('Error desencriptando el archivo:', err);
    }
}

module.exports = { decryptFileFromBase64 };
