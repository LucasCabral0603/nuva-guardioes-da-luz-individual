package br.com.fiap.soulup.view;

import br.com.fiap.soulup.dao.RegistroAcaoDao;
import br.com.fiap.soulup.dao.UsuarioDao;
import br.com.fiap.soulup.exception.EntidadeNaoEncontradaException;
import br.com.fiap.soulup.model.AcaoSustentavel;
import br.com.fiap.soulup.model.RegistroAcao;
import br.com.fiap.soulup.model.Usuario;

import java.util.Scanner;

public class ExemploRegistrarAcao {

    static void main(String[] args) {
        try {
            Scanner leitor = new Scanner(System.in);

            System.out.println("Digite o código do usuario");
            int codigoUsuario = leitor.nextInt();

            //Catalogo simplificado de acoes sustentaveis (peso base de cada uma)
            AcaoSustentavel reciclagem = new AcaoSustentavel(1, "Reciclagem de residuos", 30);

            System.out.println("Informe o nivel de impacto da acao (Ex: 0.5 baixo, 1.0 medio, 2.0 alto)");
            double multiplicador = leitor.nextDouble();

            //Buscar o usuario que esta registrando a acao
            UsuarioDao usuarioDao = new UsuarioDao();
            Usuario usuario = usuarioDao.buscarPorId(codigoUsuario);

            //Regra de negocio: calcular pontos e somar ao usuario
            int pontosGanhos = reciclagem.calcularPontuacao(multiplicador);
            usuario.adicionarPontos(pontosGanhos);
            usuarioDao.atualizar(usuario);

            //Salvar o historico da acao
            RegistroAcao registro = new RegistroAcao(usuario.getId(), reciclagem.getNome(), pontosGanhos);
            RegistroAcaoDao registroAcaoDao = new RegistroAcaoDao();
            registroAcaoDao.cadastrar(registro);

            System.out.println("Acao registrada! +" + pontosGanhos + " pontos.");
            System.out.println("Total do usuario: " + usuario.getPontos() + " (Nivel: " + usuario.calcularNivel() + ")");

        } catch (EntidadeNaoEncontradaException e) {
            System.err.println(e.getMessage());
        } catch (Exception e) {
            System.err.println("Erro: " + e.getMessage());
        }
    }//main
}//class
