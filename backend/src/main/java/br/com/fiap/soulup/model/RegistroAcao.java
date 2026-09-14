package br.com.fiap.soulup.model;

import java.sql.Timestamp;

public class RegistroAcao {

    private int id;
    private int usuarioId;
    private String nomeAcao;
    private int pontosGanhos;
    private Timestamp dataRegistro;

    @Override
    public String toString() {
        return nomeAcao + " - +" + pontosGanhos + " pts (usuario " + usuarioId + ")";
    }

    //Construtores
    public RegistroAcao() {
    }

    public RegistroAcao(int usuarioId, String nomeAcao, int pontosGanhos) {
        this.usuarioId = usuarioId;
        this.nomeAcao = nomeAcao;
        this.pontosGanhos = pontosGanhos;
    }

    public RegistroAcao(int id, int usuarioId, String nomeAcao, int pontosGanhos, Timestamp dataRegistro) {
        this.id = id;
        this.usuarioId = usuarioId;
        this.nomeAcao = nomeAcao;
        this.pontosGanhos = pontosGanhos;
        this.dataRegistro = dataRegistro;
    }

    //Getters e Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(int usuarioId) {
        this.usuarioId = usuarioId;
    }

    public String getNomeAcao() {
        return nomeAcao;
    }

    public void setNomeAcao(String nomeAcao) {
        this.nomeAcao = nomeAcao;
    }

    public int getPontosGanhos() {
        return pontosGanhos;
    }

    public void setPontosGanhos(int pontosGanhos) {
        this.pontosGanhos = pontosGanhos;
    }

    public Timestamp getDataRegistro() {
        return dataRegistro;
    }

    public void setDataRegistro(Timestamp dataRegistro) {
        this.dataRegistro = dataRegistro;
    }
}
