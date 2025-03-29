const fs = require("fs");
const path = require("path");
const readline = require("readline");

// Função para escapar caracteres especiais HTML (<, >, &)
function escapeHtmlSpecialCharacters(text) {
    return text.replace(/[<>&]/g, (match) => {
        switch (match) {
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case "&":
                return "&amp;";
            default:
                return match;
        }
    });
}

// Função para ler um arquivo, escapar caracteres especiais e salvar o resultado em outro arquivo
function escapeHtmlFile(inputFilePath, outputFilePath) {
    try {
        const fileContent = fs.readFileSync(inputFilePath, "utf-8");
        const escapedContent = escapeHtmlSpecialCharacters(fileContent);
        fs.writeFileSync(outputFilePath, escapedContent, "utf-8");
        console.log(`Arquivo escapado com sucesso: ${outputFilePath}`);
    } catch (error) {
        console.error("Erro ao processar o arquivo:", error.message);
        process.exit(1);
    }
}

// Função para perguntar ao usuário um caminho de arquivo
function askFilePath(question) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
            rl.close();
        });
    });
}

// Função assíncrona para interação com o usuário
async function userInteraction() {
    let inputPath = process.argv[2];

    if (!inputPath) {
        inputPath = await askFilePath("Informe o caminho do arquivo de entrada: ");
    }
    inputPath = path.resolve(inputPath);

    const defaultName = `escaped_${path.basename(inputPath)}`;
    const answer = await askFilePath(`Informe o caminho do arquivo de saída (padrão: ${defaultName}): `);
    
    let outputPath = answer.trim() ? answer : defaultName;
    outputPath = path.resolve(outputPath);

    escapeHtmlFile(inputPath, outputPath);
}

// Função principal para rodar o programa
function run() {
    if (process.argv.length >= 4) {
        escapeHtmlFile(
            path.resolve(process.argv[2]),
            path.resolve(process.argv[3])
        );
    } else {
        console.log("------------------");
        console.log("HTML Tag Escaper v1.0");
        console.log("------------------\n");
        console.log("Argumentos não informados! Iniciando modo interativo...");
        userInteraction();
    }
}

run();
