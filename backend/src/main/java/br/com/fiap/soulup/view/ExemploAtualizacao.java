package br.com.fiap.soulup.view;

import br.com.fiap.soulup.dao.UsuarioDao;
import br.com.fiap.soulup.model.Usuario;

import java.util.Scanner;

public class ExemploAtualizacao {

    static void main(String[] args) {
        //Ler os dados do usuario
        try {
            Scanner leitor = new Scanner(System.in);
            System.out.println("Digite o código");
            int codigo = leitor.nextInt();
            System.out.println("Digite o nome");
            String nome = leitor.next() + leitor.nextLine();
            System.out.println("Digite o email");
            String email = leitor.next() + leitor.nextLine();
            System.out.println("Digite os pontos");
            int pontos = leitor.nextInt();
            //Instanciar o UsuarioDAO
            UsuarioDao usuarioDao = new UsuarioDao();
            //Chamar o atualizar do DAO
            Usuario usuario = new Usuario(codigo, nome, email, pontos);
            usuarioDao.atualizar(usuario);
            System.out.println("Usuario atualizado!");
        } catch (Exception e) {
            System.err.println(e.getMessage());
        }
    }//main
}//class
