SoulUp — Sistema de Gamificação Sustentável

Projeto desenvolvido para a Sprint 3 da FIAP, utilizando Java, Maven, JDBC e Oracle Database.

O SoulUp é um sistema voltado à sustentabilidade e à gamificação de ações sustentáveis. A aplicação permite o cadastro e gerenciamento de usuários, além do registro de ações sustentáveis realizadas pelos participantes.

Objetivo do Projeto

O objetivo do projeto é aplicar conceitos de desenvolvimento em Java, organização de código, acesso a banco de dados e implementação das principais operações de um sistema.

A aplicação utiliza uma estrutura organizada em camadas, separando as responsabilidades de conexão com o banco, acesso aos dados, modelos de domínio, exceções e classes utilizadas para execução e testes.

Tecnologias Utilizadas

Java 17

Maven

JDBC

Oracle Database

IntelliJ IDEA

Git e GitHub

Banco de Dados

O projeto utiliza o Oracle Database, disponibilizado pela FIAP.

A conexão com o banco é realizada utilizando JDBC através da classe ConnectionFactory.

As credenciais do banco não ficam diretamente armazenadas no código. Para executar o projeto, devem ser configuradas as seguintes variáveis de ambiente:

ORACLE_USER
ORACLE_PASSWORD

Dessa forma, as informações de acesso ao banco não precisam ser publicadas no repositório.

Estrutura do Projeto

A estrutura principal do projeto está organizada da seguinte forma:

src/
└── main/
    └── java/
        └── br/
            └── com/
                └── fiap/
                    └── soulup/
                        ├── dao/
                        │   ├── RegistroAcaoDao.java
                        │   └── UsuarioDao.java
                        ├── exception/
                        │   └── EntidadeNaoEncontradaException.java
                        ├── factory/
                        │   └── ConnectionFactory.java
                        ├── model/
                        │   ├── AcaoSustentavel.java
                        │   ├── RegistroAcao.java
                        │   └── Usuario.java
                        └── view/
                            ├── ExemploAtualizacao.java
                            ├── ExemploCadastro.java
                            ├── ExemploConexao.java
                            ├── ExemploListagem.java
                            ├── ExemploPesquisaId.java
                            ├── ExemploRegistrarAcao.java
                            ├── ExemploRemocao.java
                            └── TesteGeral.java

Organização das Classes

Model

O pacote model contém as classes que representam as entidades utilizadas pelo sistema.

Entre elas estão:

Usuario

AcaoSustentavel

RegistroAcao

Essas classes representam os dados utilizados pelas regras do sistema.

DAO

O pacote dao é responsável pelo acesso ao banco de dados.

As principais classes são:

UsuarioDao

RegistroAcaoDao

Essas classes realizam operações de cadastro, consulta, atualização e remoção de dados utilizando JDBC.

Factory

O pacote factory contém a classe responsável pela criação da conexão com o banco de dados.

A classe ConnectionFactory centraliza a configuração e abertura da conexão JDBC com o Oracle Database.

Exception

O pacote exception possui exceções personalizadas utilizadas para tratar situações específicas da aplicação.

A principal classe é:

EntidadeNaoEncontradaException

Ela é utilizada quando uma entidade solicitada não é encontrada no banco de dados.

View

O pacote view contém classes utilizadas para executar e demonstrar as funcionalidades desenvolvidas no projeto.

Entre os exemplos estão:

Conexão com o banco;

Cadastro de usuários;

Listagem de usuários;

Pesquisa por ID;

Atualização;

Remoção;

Registro de ações sustentáveis;

Execução geral dos testes.

Funcionalidades

O projeto possui funcionalidades relacionadas ao gerenciamento dos usuários e das ações sustentáveis.

Entre as principais operações estão:

Cadastro de usuários;

Listagem de usuários;

Pesquisa de usuário por ID;

Atualização de informações;

Remoção de registros;

Cadastro de ações sustentáveis;

Registro de ações realizadas pelos usuários;

Consulta de registros;

Tratamento de entidades não encontradas;

Conexão com banco de dados Oracle utilizando JDBC.

Regras de Negócio

O sistema possui entidades relacionadas à proposta de gamificação sustentável.

Um usuário pode realizar ações sustentáveis e registrar essas ações no sistema.

As ações sustentáveis possuem informações utilizadas para representar atividades relacionadas à sustentabilidade e à pontuação dos usuários.

O registro de uma ação relaciona o usuário à ação sustentável realizada, permitindo manter o histórico das atividades.

Acesso ao Banco de Dados

A conexão é realizada pela classe ConnectionFactory.java.

O projeto utiliza o driver JDBC da Oracle para realizar a comunicação com o banco.

As credenciais devem ser configuradas no ambiente de execução através das variáveis:

ORACLE_USER
ORACLE_PASSWORD

A URL utilizada para a conexão é:

jdbc:oracle:thin:@oracle.fiap.com.br:1521:orcl

Execução do Projeto

Para executar o projeto, é necessário possuir:

Java 17 ou superior;

Maven;

IntelliJ IDEA ou outra IDE compatível;

Acesso ao banco Oracle da FIAP;

Credenciais válidas para conexão com o banco.

1. Clonar o projeto

Clone o repositório utilizando Git:

git clone <URL_DO_REPOSITORIO>

Depois, abra a pasta do projeto na IDE.

2. Configurar as credenciais

Configure as variáveis de ambiente:

ORACLE_USER=seu_usuario
ORACLE_PASSWORD=sua_senha

Não publique essas informações no GitHub.

3. Instalar as dependências

No terminal, execute:

mvn clean install

4. Executar a aplicação

O projeto pode ser executado através da IDE, utilizando as classes presentes no pacote:

br.com.fiap.soulup.view

A classe TesteGeral.java pode ser utilizada para executar e verificar diferentes funcionalidades do sistema.

Maven

As dependências do projeto são gerenciadas pelo arquivo pom.xml.

O projeto utiliza Maven para gerenciamento das dependências e configuração da aplicação.

Controle de Versão

O projeto utiliza Git para controle de versão e GitHub para armazenamento do código-fonte.

O histórico de commits permite acompanhar a evolução do desenvolvimento realizado durante o projeto.

Segurança

As credenciais do banco de dados não devem ser inseridas diretamente nos arquivos versionados.

O projeto utiliza variáveis de ambiente para armazenar:

ORACLE_USER
ORACLE_PASSWORD

Essa abordagem evita que informações sensíveis sejam expostas publicamente no repositório.

Integrante

Lucas Luque Cabral

RM: 573347

Turma: 1TDSPV

Sprint

Sprint 03 — FIAP