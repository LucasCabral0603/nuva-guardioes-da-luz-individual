package br.com.fiap.soulup.view;

import br.com.fiap.soulup.dao.UsuarioDao;

import java.util.Scanner;

public class ExemploRemocao {

    static void main(String[] args) {
        try {
            //Ler o código
            Scanner leitor = new Scanner(System.in);
            System.out.println("Digite o código para remoção");
            int codigo = leitor.nextInt();
            //Instanciar o DAO
            UsuarioDao usuarioDao = new UsuarioDao();
            //Chamar o método para remoção
            usuarioDao.deletar(codigo);
            System.out.println("Usuario removido!");
        } catch (Exception e) {
            System.err.println(e.getMessage());
        }

    }//main
}//class
