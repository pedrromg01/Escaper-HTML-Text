# HTML Tag Escaper

![Escaper HTML](https://github.com/pedrromg01/Escaper-HTML-Text/blob/main/Escaper.png)

Este projeto é um utilitário em Node.js para escapar caracteres especiais em arquivos HTML, convertendo `<`, `>` e `&` em suas respectivas entidades HTML (`&lt;`, `&gt;` e `&amp;`).

## 🚀 Funcionalidades
- Escapa caracteres especiais (`<`, `>`, `&`) dentro de arquivos HTML.
- Pode ser utilizado de forma **automática** passando argumentos na execução.
- Possui um **modo interativo**, onde o usuário pode inserir os caminhos manualmente.

## 📌 Requisitos
- Node.js instalado (versão 14 ou superior)

## 📥 Instalação
Clone este repositório e acesse a pasta do projeto:

```sh
git clone https://github.com/seu-usuario/html-tag-escaper.git
cd html-tag-escaper
```

## 🔧 Como Usar

### 1️⃣ Modo Automático
Se já souber os caminhos dos arquivos de entrada e saída, execute:

```sh
node html-escaper.js <caminho-do-arquivo-entrada> <caminho-do-arquivo-saida>
```

**Exemplo:**
```sh
node html-escaper.js exemplo.html saida.txt
```
Isso irá ler `exemplo.html`, escapar os caracteres HTML e salvar o resultado em `saida.txt`.

### 2️⃣ Modo Interativo
Caso execute o script sem argumentos:
```sh
node html-escaper.js
```
O programa perguntará:
```
Informe o caminho do arquivo de entrada:
```
E depois:
```
Informe o caminho do arquivo de saída (padrão: escaped_nomeDoArquivoOriginal):
```
Se pressionar **Enter** sem digitar um nome, o arquivo será salvo automaticamente com o nome `escaped_nomeDoArquivoOriginal`.

## 📝 Exemplo de Uso
Se tivermos um arquivo `exemplo.html` com o seguinte conteúdo:
```html
<p>O valor total & os detalhes estão abaixo:</p>
<a href="https://example.com">Clique aqui</a>
```
Após rodar o script, o arquivo `saida.txt` conterá:
```html
<p>O valor total &amp; os detalhes estão abaixo:</p>
<a href="https://example.com">Clique aqui</a>
```

## 📂 Estrutura do Projeto
```
html-tag-escaper/
│-- html-escaper.js  # Arquivo principal
│-- README.md        # Documentação do projeto
```

## 🔄 Melhorias Futuras
- Adicionar suporte para mais caracteres especiais.
- Criar versão com interface gráfica.
- Permitir processar múltiplos arquivos ao mesmo tempo.

---

