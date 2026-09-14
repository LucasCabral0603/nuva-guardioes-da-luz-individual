package br.com.fiap.soulup.model;

public class Usuario {

    private int id;
    private String nome;
    private String email;
    private int pontos;

    @Override
    public String toString() {
        return id + " Nome: " + nome + " Email: " + email
                + " Pontos: " + pontos + " Nivel: " + calcularNivel();
    }

    //Construtores
    public Usuario() {
    }

    public Usuario(String nome, String email) {
        this.nome = nome;
        this.email = email;
        this.pontos = 0;
    }

    public Usuario(int id, String nome, String email, int pontos) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.pontos = pontos;
    }

    //Getters e Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getPontos() {
        return pontos;
    }

    public void setPontos(int pontos) {
        this.pontos = pontos;
    }

    //Regras de negocio da propria entidade (Domain-Driven Design: o comportamento
    //fica junto do dado que ele manipula, em vez de ficar solto em uma camada de servico)

    //Regra de negocio 1: soma os pontos ganhos em uma acao ao total do usuario
    public void adicionarPontos(int pontosGanhos) {
        if (pontosGanhos < 0)
            throw new IllegalArgumentException("Pontos ganhos nao podem ser negativos.");
        this.pontos += pontosGanhos;
    }

    //Regra de negocio 2: calcula o nivel atual do usuario a partir da sua pontuacao total
    public String calcularNivel() {
        if (pontos >= 1000) return "Guardiao do Planeta";
        if (pontos >= 600) return "Floresta";
        if (pontos >= 300) return "Arvore";
        if (pontos >= 100) return "Broto";
        return "Semente";
    }
}
