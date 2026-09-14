create table tb_usuario (
                             id number(9,0) primary key,
                             nome varchar(100) not null,
                             email varchar(150) not null unique,
                             pontos number(9,0) default 0 not null
);

create sequence sq_tb_usuario start WITH 1;

create table tb_registro_acao (
                                   id number(9,0) primary key,
                                   usuario_id number(9,0) not null,
                                   nome_acao varchar(100) not null,
                                   pontos_ganhos number(9,0) not null,
                                   data_registro date default sysdate,
                                   constraint fk_registro_usuario foreign key (usuario_id)
                                       references tb_usuario(id)
);

create sequence sq_tb_registro_acao start WITH 1;

insert into tb_usuario (id, nome, email, pontos)
values(sq_tb_usuario.nextval, 'Lucas Kaftan', 'lucas.kaftan@teste.com', 0);

select * from tb_usuario;

select * from tb_registro_acao where usuario_id = 1;
