const { encryptFileToBase64 } = require('./utils/encryptFileToBase64');
const { decryptFileFromBase64 } = require('./utils/decryptFileFromBase64');


async function main() {
    // Ejemplo de uso EncryptFile
    const filePath = 'files_original/original.txt';
    const outputFilePath = 'files_result/encriptado.txt';
    await encryptFileToBase64(filePath, outputFilePath);

    // Ejemplo de uso
    const encryptedFilePath = 'files_result/encriptado.txt';
    const decryptedFilePath = 'files_result/desencriptado.txt';
    await decryptFileFromBase64(encryptedFilePath, decryptedFilePath);
}

main();