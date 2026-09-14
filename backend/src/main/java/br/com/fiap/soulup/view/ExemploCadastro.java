package br.com.fiap.soulup.view;

import br.com.fiap.soulup.dao.UsuarioDao;
import br.com.fiap.soulup.model.Usuario;

import java.util.Scanner;

public class ExemploCadastro {

    static void main(String[] args) {
        //Pedir para o usuário os dados do usuario
        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite o nome do usuario");
        String nome = scanner.next() + scanner.nextLine();
        System.out.println("Digite o email do usuario");
        String email = scanner.next() + scanner.nextLine();
        //Instanciar o usuario com os dados (comeca sempre com 0 pontos)
        Usuario usuario = new Usuario(nome, email);
        try {
            //Instanciar o DAO
            UsuarioDao dao = new UsuarioDao();
            //Chamar o método de cadastro do DAO
            dao.cadastrar(usuario);
            System.out.println("Usuario cadastrado!");
        } catch (Exception e) {
            System.out.println("Erro: " + e.getMessage());
        }
    }//main
}//class
