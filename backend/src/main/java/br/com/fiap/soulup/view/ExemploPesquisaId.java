package br.com.fiap.soulup.view;

import br.com.fiap.soulup.dao.UsuarioDao;
import br.com.fiap.soulup.exception.EntidadeNaoEncontradaException;
import br.com.fiap.soulup.model.Usuario;

import java.sql.SQLException;
import java.util.InputMismatchException;
import java.util.Scanner;

public class ExemploPesquisaId {

    static void main(String[] args) {
        // Pedir o ID do usuario
        Scanner leitor = new Scanner(System.in);

        try {
            System.out.println("Digite o código do usuario");
            int codigo = leitor.nextInt();
            UsuarioDao usuarioDao = new UsuarioDao();
            // Pesquisar o Usuario no Banco
            Usuario usuario = usuarioDao.buscarPorId(codigo);
            // Exibir os dados do Usuario, se existir
            System.out.println(usuario);
        } catch (InputMismatchException e) {
            System.err.println("Número inválido");
        } catch (SQLException | EntidadeNaoEncontradaException e) {
            System.err.println(e.getMessage());
        } catch (ClassNotFoundException e) {
            System.err.println("Projeto sem JDBC");
        }
    }// main
}// class
