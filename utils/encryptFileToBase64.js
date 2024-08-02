const fs = require('fs').promises;

async function encryptFileToBase64(filePath, outputFilePath) {
    try {
        const data = await fs.readFile(filePath);
        const base64Data = data.toString('base64');
        await fs.writeFile(outputFilePath, base64Data);
        console.log('Archivo encriptado y guardado en:', outputFilePath);
    } catch (err) {
        console.error('Error encriptando el archivo:', err);
    }
}

module.exports = { encryptFileToBase64 };
