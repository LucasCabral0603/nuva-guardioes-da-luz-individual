# SoulUp — Sistema de Gamificação Sustentável (versão Java)

Projeto Maven baseado no padrão apresentado pelo professor Thiago Yama na Apostila 13
(disciplina Domain Driven Design using Java), usando JDBC puro com banco de dados
Oracle (o mesmo Oracle do FIAP usado em aula).

## Ferramentas utilizadas

- IDE: IntelliJ IDEA, Eclipse ou NetBeans (qualquer uma com suporte a projetos Maven).
- Java JDK: versão 25 (mesma configurada no pom.xml; se sua IDE não tiver essa versão,
  pode ajustar `maven.compiler.source`/`target` para a versão do JDK instalada, ex: 17 ou 21).
- Banco de dados: Oracle (oracle.fiap.com.br), o mesmo utilizado em aula.
- Dependência JDBC: ojdbc8 (baixada automaticamente pelo Maven, já declarada no pom.xml).

## Estrutura do projeto

```
SoulUp-Java/
├── pom.xml
├── scripts.sql                      -> script de criação das tabelas no Oracle
└── src/main/java/br/com/fiap/soulup/
    ├── model/
    │   ├── Usuario.java              -> entidade + regras de negócio (adicionarPontos, calcularNivel)
    │   ├── AcaoSustentavel.java      -> entidade + regra de negócio (calcularPontuacao)
    │   └── RegistroAcao.java
    ├── factory/
    │   └── ConnectionFactory.java    -> conexão com o Oracle
    ├── exception/
    │   └── EntidadeNaoEncontradaException.java
    ├── dao/
    │   ├── UsuarioDao.java           -> CRUD completo de usuários
    │   └── RegistroAcaoDao.java      -> histórico de ações
    └── view/
        ├── ExemploConexao.java
        ├── ExemploCadastro.java
        ├── ExemploListagem.java
        ├── ExemploPesquisaId.java
        ├── ExemploAtualizacao.java
        ├── ExemploRemocao.java
        ├── ExemploRegistrarAcao.java
        └── TesteGeral.java           -> classe de teste, exercita tudo em sequência
```

## Por que a lógica de negócio está dentro das classes de domínio

Seguindo o conceito de Domain-Driven Design visto na disciplina, os métodos de regra de
negócio (`Usuario.adicionarPontos()`, `Usuario.calcularNivel()`,
`AcaoSustentavel.calcularPontuacao()`) ficam dentro das próprias classes de modelo, em vez
de uma camada de serviço separada. Isso evita um "modelo anêmico" (classes que só têm
getters e setters) e deixa o comportamento junto com o dado que ele manipula.

## Passo a passo para executar

1. **Criar as tabelas.** Rode o script `scripts.sql` no Oracle do FIAP (pelo SQL Developer
   ou pela ferramenta que a disciplina usa). Ele cria `tb_usuario`, `tb_registro_acao` e as
   sequences `sq_tb_usuario` e `sq_tb_registro_acao`.

2. **Importar o projeto na IDE.**
   - IntelliJ: `File > Open`, selecione a pasta `SoulUp-Java` (o `pom.xml` é detectado
     automaticamente como projeto Maven).
   - Eclipse/NetBeans: `File > Import > Existing Maven Project`, apontando para a pasta.

3. **Ajustar as credenciais do banco.** Abra `factory/ConnectionFactory.java` e troque
   `"SEU_RM_AQUI"` e `"SUA_SENHA_AQUI"` pelo usuário e senha do Oracle do FIAP de um dos
   integrantes do grupo (o mesmo login usado em oracle.fiap.com.br). Faça o mesmo em
   `view/ExemploConexao.java`.

4. **Deixar o Maven baixar a dependência.** Ao abrir o projeto, a IDE deve baixar
   automaticamente o `ojdbc8` declarado no `pom.xml`. Se não baixar sozinho, rode
   `mvn install` ou clique em "Reload Maven Project".

5. **Executar as classes de exemplo.** Cada classe em `view/` roda uma operação isolada
   (cadastrar, listar, buscar por id, atualizar, remover, registrar uma ação sustentável).
   Para ver o sistema completo funcionando de uma vez, execute
   `view/TesteGeral.java` (método `main`).

## Observação

Os dados de acesso ao banco (usuário e senha) ficam fixos no código de `ConnectionFactory`,
conforme pedido no enunciado do trabalho.
