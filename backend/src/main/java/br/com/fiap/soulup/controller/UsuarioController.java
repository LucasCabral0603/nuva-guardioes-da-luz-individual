package br.com.fiap.soulup.controller;

import br.com.fiap.soulup.dao.UsuarioDao;
import br.com.fiap.soulup.model.Usuario;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "http://localhost:5173")
public class UsuarioController {

    @GetMapping
    public List<Usuario> listar() throws SQLException, ClassNotFoundException {
        UsuarioDao dao = new UsuarioDao();
        return dao.listar();
    }

    @PostMapping
    public Usuario cadastrar(@RequestBody Usuario usuario)
            throws SQLException, ClassNotFoundException {

        UsuarioDao dao = new UsuarioDao();
        dao.cadastrar(usuario);

        return usuario;
    }
}