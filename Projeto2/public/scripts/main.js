var config = {
    apiKey: "AIzaSyCklwhzRE5tn_eaSA0kMBAib0Wm9DwAlxs",
    authDomain: "teste-ab-portfolio-de-projetos.firebaseapp.com",
    databaseURL: "https://teste-ab-portfolio-de-projetos.firebaseio.com",
    storageBucket: "teste-ab-portfolio-de-projetos.appspot.com",
    messagingSenderId: "1029953764861"
};
firebase.initializeApp(config);
database = firebase.database();
logs = this.database.ref('logs');

function envia(tipo_evt, user_id_var, tempo_var, versao_var, proj_evt) {
    this.logs.push({
        user_id: user_id_var,
        tempo: tempo_var,
        versao: versao_var,
        tipo: tipo_evt,
        projeto: proj_evt,
    });
}

function tempo_inicial() {
    // definir tempo inicial
    var d = Date.now();
    // enviar para Firebase
    envia("inicio", id_pessoa, d, versao,projeto);
}

function tempo_final() {
    var d = Date.now()
    envia("final", id_pessoa, d, versao,projeto);
}