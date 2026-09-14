package br.com.fiap.soulup.view;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class ExemploConexao {

    //Conectar no banco de dados
    static void main(String[] args) {

        try {
            //Registrando o driver do banco de dados
            Class.forName("oracle.jdbc.driver.OracleDriver");
            Connection conexao = DriverManager.getConnection("jdbc:oracle:thin:@oracle.fiap.com.br:1521:orcl",
                    "rm573347", "060308");
            System.out.println("Conectado no banco de dados!");

            //Inserir um usuario no BD
            Statement stm = conexao.createStatement();
            //Executar um comando SQL no banco de dados
            stm.executeUpdate("insert into tb_usuario " +
                    "(id, nome, email, pontos) " +
                    "values(sq_tb_usuario.nextval, 'Vinicius Esposito', 'vinicius.esposito@teste.com', 0)");

            System.out.println("Usuario cadastrado!");
            //Fechar a conexão
            conexao.close();
        } catch (ClassNotFoundException e) {
            System.out.println("JDBC não encontrado " + e.getMessage());
        } catch (SQLException e) {
            System.out.println("Não foi possível conectar no banco de dados " + e.getMessage());
        }

    }//main

}//class
