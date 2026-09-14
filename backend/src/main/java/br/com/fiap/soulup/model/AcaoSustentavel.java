package br.com.fiap.soulup.model;

public class AcaoSustentavel {

    private int id;
    private String nome;
    private int pesoBase;

    @Override
    public String toString() {
        return "[" + id + "] " + nome + " (peso base: " + pesoBase + ")";
    }

    //Construtores
    public AcaoSustentavel() {
    }

    public AcaoSustentavel(int id, String nome, int pesoBase) {
        this.id = id;
        this.nome = nome;
        this.pesoBase = pesoBase;
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

    public int getPesoBase() {
        return pesoBase;
    }

    public void setPesoBase(int pesoBase) {
        this.pesoBase = pesoBase;
    }

    //Regra de negocio 3: calcula quantos pontos esta acao vale, combinando o peso
    //base com o multiplicador de impacto informado pelo usuario, sempre limitando
    //o resultado entre 0 e 100 pontos.
    public int calcularPontuacao(double multiplicador) {
        if (multiplicador < 0.1 || multiplicador > 3.0)
            throw new IllegalArgumentException("Multiplicador deve estar entre 0.1 e 3.0.");
        int pontos = (int) (pesoBase * multiplicador);
        if (pontos > 100) return 100;
        if (pontos < 0) return 0;
        return pontos;
    }
}
