const modal = document.getElementById("modalInscricao");

function abrirModal() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function fecharModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    if (event.target == modal) {
        fecharModal();
    }
}


document.getElementById("formCadastro").addEventListener("submit", function(e) {
    e.preventDefault(); 
    
    alert("Inscrição realizada com sucesso na SynapClass!");
    
    fecharModal();
    this.reset(); 
});

function scrollSuave(event, id) {
    event.preventDefault(); 

    const elemento = document.getElementById(id);

    const offset = 80; 

    const posicao = elemento.offsetTop - offset;

    window.scrollTo({
        top: posicao,
        behavior: "smooth"
    });
}