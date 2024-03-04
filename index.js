//Não me lembro de utilizar ou ter aprendido sobre getters e setters//
//Brenda Nascimento Vieira 5B//

class Usuarios{
    constructor(usuarioId, usuarioNickname, usuarioNome){
        this.usuarioId = usuarioId;
        this.usuarioNickName = usuarioNickname;
        this.usuarioNome = usuarioNome;
    }
}

class Jogos{
    constructor(jogoId, titulo, descricao, precoBase){
        this.jogoId = jogoId;
        this.titulo = titulo;
        this.descricao = descricao;
        this.precoBase = precoBase;
    }
}

class Conquista{
    constructor(conquistaId, conquistTitulo,conquistaDescricao){
        this.conquistaId = conquistaId;
        this.conquistaTitulo = conquistTitulo;
        this.conquistaDescricao = conquistaDescricao;
    }
}

const usuario = new Usuarios(1,'VieiraBeh', 'Brenda Vieira');
console.log(usuario);

const jogo = new Jogos(2, 'League of legends', 'Destrua as torres!', 20);
console.log(jogo);

const conquista = new Conquista(3, 'MVP 3','Terceira conquista', 'Parabéns pela conaquista');
console.log(conquista);
