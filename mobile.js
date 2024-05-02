let botoes = document.querySelectorAll(".lista-opçoes");

let imgsCertificados = document.querySelectorAll(".cursos-finalizados");
let listaExP = document.querySelectorAll(".experenciaP");
let empresas = document.querySelectorAll(".empresas");
let infoContato = document.querySelectorAll(".info-contato");
let proxCurso = document.querySelectorAll(".proximosCursos");

function botoesLaterais () {

   function ocultarTodosElementos() {
    [imgsCertificados, listaExP, empresas, infoContato, proxCurso].forEach((elementos) => {
        (elementos).forEach((elemento) => {
            elemento.classList.remove("showContent");
        });
    });
}

    botoes.forEach((botao, index) => {
        botao.addEventListener("click", function() {
            ocultarTodosElementos();
            switch (index) {
                case 0:
                    imgsCertificados.forEach(img => img.classList.add("showContent"));
                    break;
                case 1:
                    listaExP.forEach(lista => lista.classList.add("showContent"));
                    break;
                case 2:
                    empresas.forEach(empresa => empresa.classList.add("showContent"));
                    break;
                case 3:
                    infoContato.forEach(info => info.classList.add("showContent"));
                    break;
                case 4:
                    proxCurso.forEach(curso => curso.classList.add("showContent"));
                    break;

                    
            }
        });
    });

}

botoesLaterais()
