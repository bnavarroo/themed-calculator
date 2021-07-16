# 🚀 Themed Calculator
[![Netlify Status](https://api.netlify.com/api/v1/badges/ee2ca34b-c4e4-4382-a1ae-88427978cfc5/deploy-status)](https://themed-calculator-bnavarroo.netlify.app/)

Calculadora com as operações padrão: soma, subtração, multiplicação e divisão. Além da calculadora em si é possível alternar/selecionar um tema para visualização (dark ou light).

## ✅ Features

- [x] Operações de adição, subtração, multiplicação e divisão;
- [x] Seleção de tema: Dark ou Light;

## 🛠 Tecnologias

As principais ferramentas utilizadas para a construção do projeto foram:

- [React](https://pt-br.reactjs.org/)
- [Create React App](https://create-react-app.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)

## 🚧 Estrutura Geral do Projeto


### `_config`
A pasta _config contém os arquivos de configurações globais do projeto, como definições de tema e tema padrão.

### `app`
A pasta app contém os componentes que compõem a aplicação, nesse caso o componente da calculadora. Cada componente está armazenado em uma subpasta que pode ou não posuir além da página em si, seus próprios componentes, styled-componentes, hooks, etc.

### `core`
A pasta core contém as definições de estrutura global da aplicação: Types, Interfaces, Enum, etc.

### `shared`
A pasta shared contém os componentes(incluindo styled-components) que são compartilhados na aplicação. Os componentes declarados nessa pasta são independentes e tecnicamente podem ser utilizados em qualquer local do projeto.

### `styles`
A pasta styles contém definições inerentes aos estilos, de uma maneira geral: estilo global, definição dos temas, definição de breakpoints, etc.

### `utilities`
A pasta utilities contém todo o código utilitário da aplicação, como funções genéricas, hooks, entre outros.

## Scripts para a execução

### Pré-requisitos

Antes de iniciar, é preciso ter o [Node.js](https://nodejs.org/en/) instalado na máquina e algum gerenciador de pacotes, como [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/). Recomendo o [VSCode](https://code.visualstudio.com/) como editor para trabalhar com o código.

## 👉 Scripts

Esse projeto foi criado com [Create React App](https://github.com/facebook/create-react-app) e contém os seus scripts padrões. Os principais são:

### `npm start`

Roda a aplicação em modo de desenvolvimento\
Abra [http://localhost:3000](http://localhost:3000) para visualizar o resultado no navegador.

A página é recarregada sempre que o código é editado.\
Você poderá ver os erros de no console.

### `npm test`

Para mais informações: [running tests](https://facebook.github.io/create-react-app/docs/running-tests)

### `npm run build`

Gera o Build de produção da aplicação na pasta `build`.\

Mais informações em: [deployment](https://facebook.github.io/create-react-app/docs/deployment)

## Autor

<img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/62071446?s=400&u=851a0c918e6257a6cf47ebdcafa271e67f4503fc&v=4" width="100px;" alt=""/>
<b>Bruno Navarro de Oliveira</b></sub>

[![Linkedin Badge](https://img.shields.io/badge/-Bruno-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/bruno-navarro-oliveira/)](https://www.linkedin.com/in/bruno-navarro-oliveira/) 

