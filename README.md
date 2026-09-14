# NUVA — Guardiões da Luz

## Sprint 03 — Construção da Base de Dados

Projeto individual desenvolvido para a **Sprint 03 da FIAP**.

O NUVA — Guardiões da Luz é uma plataforma voltada à sustentabilidade, que busca incentivar a participação dos usuários por meio de ações sustentáveis e de uma proposta de gamificação.

Nesta Sprint 03, o projeto apresenta a estrutura do sistema e a construção da base de dados utilizada para armazenar as informações relacionadas aos usuários e às ações sustentáveis.

## Objetivo do Projeto 

O objetivo do projeto é desenvolver uma solução tecnológica relacionada à sustentabilidade, aplicando conceitos de desenvolvimento de software, organização de dados e integração entre as diferentes partes da aplicação.

A estrutura foi organizada para permitir o gerenciamento de usuários, ações sustentáveis e registros das ações realizadas.

## Tecnologias

### Front-End

- React

- Vite

- TypeScript

- Tailwind CSS

- React Router DOM

- React Hook Form

### Back-End

- Java 17

- Maven

- JDBC

- Oracle Database

### Ferramentas

- Visual Studio Code

- IntelliJ IDEA

- Git

- GitHub

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```text

nuva-guardioes-da-luz/

├── backend/

│   ├── src/

│   ├── pom.xml

│   ├── scripts.sql

│   └── README.md

│

├── public/

│

├── src/

│   ├── components/

│   ├── data/

│   ├── pages/

│   ├── services/

│   ├── types/

│   ├── App.tsx

│   ├── index.css

│   └── main.tsx

│

├── .gitignore

├── index.html

├── package.json

├── package-lock.json

├── postcss.config.js

├── tailwind.config.js

├── tsconfig.json

├── tsconfig.node.json

└── vite.config.ts

Banco de Dados

O projeto utiliza o Oracle Database para armazenamento dos dados.

A estrutura do banco foi organizada para trabalhar com informações relacionadas aos usuários, ações sustentáveis e registros das ações realizadas.

A conexão com o banco é realizada utilizando JDBC no projeto Java.

As credenciais de acesso ao banco não devem ser armazenadas diretamente no código ou publicadas no GitHub.

Para a execução local, devem ser configuradas as variáveis de ambiente:

ORACLE_USER

ORACLE_PASSWORD

Entidades do Sistema

Usuário

Representa os participantes da plataforma.

Entre as informações utilizadas estão:

ID;

Nome;

E-mail;

Pontuação.

Ação Sustentável

Representa uma atividade relacionada à sustentabilidade que pode ser realizada pelos usuários.

Registro de Ação

Representa o registro de uma ação sustentável realizada por um usuário, permitindo manter o histórico das atividades.

Funcionalidades

O projeto possui funcionalidades relacionadas ao gerenciamento das informações da plataforma.

Entre elas estão:

Cadastro de usuários;

Listagem de usuários;

Pesquisa de usuário por ID;

Atualização de informações;

Remoção de registros;

Cadastro de ações sustentáveis;

Registro de ações realizadas;

Consulta de registros;

Tratamento de entidades não encontradas;

Persistência de dados no Oracle Database.

Back-End

O Back-End foi desenvolvido utilizando Java 17, Maven e JDBC.

A estrutura do Back-End está organizada em diferentes pacotes, separando as responsabilidades da aplicação.

Entre os principais pacotes estão:

model — entidades do sistema;

dao — acesso e manipulação dos dados;

factory — criação da conexão com o banco;

exception — tratamento de exceções;

view — classes utilizadas para execução e testes.

Front-End

O Front-End foi desenvolvido utilizando React, Vite e TypeScript.

A aplicação possui uma estrutura baseada em componentes e páginas, permitindo organizar a interface de forma modular.

Entre os recursos utilizados estão:

React;

TypeScript;

Vite;

Tailwind CSS;

React Router DOM;

React Hook Form.

Execução do Projeto

Pré-requisitos

Para executar o projeto, é necessário possuir:

Node.js;

npm;

Java 17;

Maven;

IntelliJ IDEA ou outra IDE compatível;

Visual Studio Code;

Acesso ao Oracle Database da FIAP.

Executando o Front-End

No terminal, dentro da pasta principal do projeto, execute:

npm install

Depois:

npm run dev

A aplicação será disponibilizada pelo Vite para acesso local.

Executando o Back-End

Entre na pasta do Back-End:

cd backend

Depois, execute:

mvn clean install

As credenciais do Oracle Database devem estar configuradas no ambiente antes da execução.

Controle de Versão

O projeto utiliza Git para controle de versão e GitHub para armazenamento do código-fonte.

O desenvolvimento foi realizado utilizando uma branch individual:

individual-lucas

O histórico de commits permite acompanhar a evolução do projeto durante o desenvolvimento.

Segurança

As credenciais do banco de dados não devem ser inseridas diretamente nos arquivos versionados.

O projeto utiliza variáveis de ambiente para armazenar:

ORACLE_USER

ORACLE_PASSWORD

Essa abordagem evita a exposição de informações sensíveis no repositório público.

Integrante

Lucas Luque Cabral

RM: 573347

Turma: 1TDSPV

Sprint

Sprint 03 — FIAP