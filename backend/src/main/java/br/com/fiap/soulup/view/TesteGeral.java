package br.com.fiap.soulup.view;

import br.com.fiap.soulup.dao.RegistroAcaoDao;
import br.com.fiap.soulup.dao.UsuarioDao;
import br.com.fiap.soulup.model.AcaoSustentavel;
import br.com.fiap.soulup.model.RegistroAcao;
import br.com.fiap.soulup.model.Usuario;

import java.util.List;

//Não tem muita logica própria, apenas chama os objetos e instancia eles
public class TesteGeral {

    static void main(String[] args) {
        System.out.println("===== TESTE GERAL DO SISTEMA SOULUP =====");

        try {
            UsuarioDao usuarioDao = new UsuarioDao();
            RegistroAcaoDao registroAcaoDao = new RegistroAcaoDao();

            //---------- CREATE ----------
            Usuario usuario1 = new Usuario("Lucas Kaftan", "lucas.kaftan@teste.com");
            Usuario usuario2 = new Usuario("Joao Carlos", "joao.carlos@teste.com");
            usuarioDao.cadastrar(usuario1);
            usuarioDao.cadastrar(usuario2);
            System.out.println("[OK] Usuários cadastrados.");

            //---------- READ ----------
            Usuario encontrado = usuarioDao.buscarPorEmail("lucas.kaftan@teste.com");
            System.out.println("[OK] Usuário encontrado por email: " + encontrado);

            //---------- Regras de negocio do dominio ----------
            AcaoSustentavel plantio = new AcaoSustentavel(2, "Plantio de arvores", 40);
            int pontosGanhos = plantio.calcularPontuacao(1.5); //regra
            encontrado.adicionarPontos(pontosGanhos); //regra para ganhar pontos
            usuarioDao.atualizar(encontrado);

            RegistroAcao registro = new RegistroAcao(encontrado.getId(), plantio.getNome(), pontosGanhos);
            registroAcaoDao.cadastrar(registro);
            System.out.println("[OK] Acao registrada: " + registro + " | Nivel atual: " + encontrado.calcularNivel());

            //---------- Historico ----------
            List<RegistroAcao> historico = registroAcaoDao.listarPorUsuario(encontrado.getId());
            System.out.println("[OK] Historico do usuario: " + historico);

            //---------- UPDATE ----------
            encontrado.setNome("Lucas Kaftan Pasturuti");
            usuarioDao.atualizar(encontrado);
            System.out.println("[OK] Usuario atualizado: " + usuarioDao.buscarPorId(encontrado.getId()));

            //---------- Listagem geral ----------
            List<Usuario> todos = usuarioDao.listar();
            System.out.println("[OK] Lista de usuarios cadastrados:");
            for (Usuario usuario : todos)
                System.out.println("  " + usuario);

            //---------- DELETE ----------
            //Como o cadastrar() nao devolve o id gerado pela sequence, buscamos o usuario
            //de volta pelo email antes de remover (mesma limitacao dos exemplos do professor).
            Usuario usuario2Salvo = usuarioDao.buscarPorEmail("joao.carlos@teste.com");
            usuarioDao.deletar(usuario2Salvo.getId());
            System.out.println("[OK] Usuario removido: " + usuario2Salvo.getNome());

            System.out.println("===== FIM DO TESTE =====");

        } catch (Exception e) {
            System.out.println("[ERRO] " + e.getMessage());
            System.out.println("Verifique se o banco Oracle esta acessivel e se as tabelas foram criadas "
                    + "com o script scripts.sql.");
        }
    }
}
