package br.com.fiap.soulup.dao;

import br.com.fiap.soulup.factory.ConnectionFactory;
import br.com.fiap.soulup.model.RegistroAcao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

//DAO -> Data Access Object
//Classe responsável por realizar as ações no BD para o historico de acoes sustentaveis
public class RegistroAcaoDao {

    private Connection conexao;

    public RegistroAcaoDao() throws SQLException, ClassNotFoundException {
        conexao = ConnectionFactory.getConnection();
    }

    public void cadastrar(RegistroAcao registro) throws SQLException {
        //Criar o comando SQL de insert
        PreparedStatement stmt = conexao.prepareStatement("insert into tb_registro_acao " +
                "(id, usuario_id, nome_acao, pontos_ganhos, data_registro) " +
                "values (sq_tb_registro_acao.nextval, ?, ?, ?, sysdate)");
        //Atribuir os valores do registro (objeto) no comando SQL
        stmt.setInt(1, registro.getUsuarioId());
        stmt.setString(2, registro.getNomeAcao());
        stmt.setInt(3, registro.getPontosGanhos());
        //Executar o comando SQL no Banco
        stmt.executeUpdate();
    }

    public List<RegistroAcao> listarPorUsuario(int usuarioId) throws SQLException {
        PreparedStatement stmt = conexao.prepareStatement(
                "select * from tb_registro_acao where usuario_id = ? order by data_registro desc");
        stmt.setInt(1, usuarioId);
        ResultSet resultSet = stmt.executeQuery();
        //Criar a lista de registros
        List<RegistroAcao> lista = new ArrayList<>();
        //Percorrer todas as linhas retornadas da Query
        while (resultSet.next()) {
            int id = resultSet.getInt("id");
            String nomeAcao = resultSet.getString("nome_acao");
            int pontosGanhos = resultSet.getInt("pontos_ganhos");
            var dataRegistro = resultSet.getTimestamp("data_registro");
            //Criar o registro e adicionar na lista
            lista.add(new RegistroAcao(id, usuarioId, nomeAcao, pontosGanhos, dataRegistro));
        }
        //Retornar a lista
        return lista;
    }

}
