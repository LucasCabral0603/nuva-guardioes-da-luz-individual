package br.com.fiap.soulup.dao;

import br.com.fiap.soulup.exception.EntidadeNaoEncontradaException;
import br.com.fiap.soulup.factory.ConnectionFactory;
import br.com.fiap.soulup.model.Usuario;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

//Classe responsável por realizar as ações no BD para a entidade Usuario
public class UsuarioDao {

    private Connection conexao;

    public UsuarioDao() throws SQLException, ClassNotFoundException {
        conexao = ConnectionFactory.getConnection();
    }

    //CRUD (Create, Read, Update, Delete)

    public void cadastrar(Usuario usuario) throws SQLException {
        //Criar o comando SQL de insert
        PreparedStatement stmt = conexao.prepareStatement("insert into tb_usuario " +
                "(id, nome, email, pontos) values (sq_tb_usuario.nextval, ?, ?, ?)");
        //Atribuir os valores do usuario (objeto) no comando SQL
        stmt.setString(1, usuario.getNome());
        stmt.setString(2, usuario.getEmail());
        stmt.setInt(3, usuario.getPontos());
        //Executar o comando SQL no Banco
        stmt.executeUpdate();
    }

    public Usuario buscarPorId(int id) throws SQLException, EntidadeNaoEncontradaException {
        PreparedStatement stmt = conexao.
                prepareStatement("select * from tb_usuario where id = ?");
        stmt.setInt(1, id);
        ResultSet resultSet = stmt.executeQuery();
        //validar se existe o usuario com o id pesquisado
        if (!resultSet.next()) //Se existir um elemento, posiciona o cursor e retorna true
            throw new EntidadeNaoEncontradaException("Usuario não encontrado");
        //Recuperar os dados do usuario do resultado do SQL
        String nome = resultSet.getString("nome");
        String email = resultSet.getString("email");
        int pontos = resultSet.getInt("pontos");

        //Criar o objeto usuario com os valores e retornar
        return new Usuario(id, nome, email, pontos);
    }

    public Usuario buscarPorEmail(String email) throws SQLException, EntidadeNaoEncontradaException {
        PreparedStatement stmt = conexao.
                prepareStatement("select * from tb_usuario where email = ?");
        stmt.setString(1, email);
        ResultSet resultSet = stmt.executeQuery();
        if (!resultSet.next())
            throw new EntidadeNaoEncontradaException("Usuario não encontrado");

        int id = resultSet.getInt("id");
        String nome = resultSet.getString("nome");
        int pontos = resultSet.getInt("pontos");

        return new Usuario(id, nome, email, pontos);
    }

    public List<Usuario> listar() throws SQLException {
        PreparedStatement stmt = conexao.prepareStatement("select * from tb_usuario order by pontos desc");
        ResultSet resultSet = stmt.executeQuery();
        //Criar a lista de Usuario
        List<Usuario> lista = new ArrayList<>();
        //Percorrer todas as linhas retornadas da Query
        while (resultSet.next()) {
            //Ler os dados das colunas
            int id = resultSet.getInt("id");
            String nome = resultSet.getString("nome");
            String email = resultSet.getString("email");
            int pontos = resultSet.getInt("pontos");
            //Criar o usuario e adicionar na lista
            lista.add(new Usuario(id, nome, email, pontos));
        }
        //Retornar a lista
        return lista;
    }

    public Usuario atualizar(Usuario usuario) throws SQLException, EntidadeNaoEncontradaException {
        //Criar o PreparedStatement com o comando SQL
        PreparedStatement stmt = conexao.prepareStatement("update tb_usuario set nome = ?, email = ?, " +
                "pontos = ? where id = ?");
        //Setar os valores no comando SQL
        stmt.setString(1, usuario.getNome());
        stmt.setString(2, usuario.getEmail());
        stmt.setInt(3, usuario.getPontos());
        stmt.setInt(4, usuario.getId());
        //Executar o comando SQL
        int linhas = stmt.executeUpdate(); //Retorna a quantidade de linhas afetadas no BD
        if (linhas == 0)
            throw new EntidadeNaoEncontradaException("Usuario não existe para atualização");
        return usuario;
    }

    public void deletar(int id) throws SQLException, EntidadeNaoEncontradaException {
        PreparedStatement stmt = conexao.prepareStatement("delete from tb_usuario where id = ?");
        stmt.setInt(1, id);
        int linhas = stmt.executeUpdate();
        if (linhas == 0)
            throw new EntidadeNaoEncontradaException("Usuario não encontrado para remoção");
    }

}