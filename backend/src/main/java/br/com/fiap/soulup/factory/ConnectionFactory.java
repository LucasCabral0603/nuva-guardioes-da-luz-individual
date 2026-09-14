package br.com.fiap.soulup.factory;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionFactory {

    public static Connection getConnection() throws ClassNotFoundException, SQLException {

        Class.forName("oracle.jdbc.driver.OracleDriver");

        String usuario = System.getenv("ORACLE_USER");
        String senha = System.getenv("ORACLE_PASSWORD");

        Connection conexao = DriverManager.getConnection(
                "jdbc:oracle:thin:@oracle.fiap.com.br:1521:orcl",
                usuario,
                senha
        );

        return conexao;
    }
}