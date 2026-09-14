package br.com.fiap.soulup.view;

import br.com.fiap.soulup.dao.UsuarioDao;
import br.com.fiap.soulup.model.Usuario;

import java.util.List;

public class ExemploListagem {

    static void main(String[] args) {

        try {
            //Recuperar todos os usuarios do banco
            UsuarioDao usuarioDao = new UsuarioDao();
            List<Usuario> lista = usuarioDao.listar();
            //Exibir os dados dos usuarios (laço de repetição)
            for (Usuario usuario : lista)
                System.out.println(usuario);
        } catch (Exception e) {
            System.err.println(e.getMessage());
        }
    }//main
}//class
