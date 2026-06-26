// Verifica se o navegador suporta a Web Speech API
const sinteseVoz = window.speechSynthesis;

/**
 * Função para ler o texto de uma seção específica
 * @param {string} idSecao - O ID da tag <section> que contém o texto
 */
function lerTexto(idSecao) {
    if (!sinteseVoz) {
        alert("Desculpe, seu navegador não suporta leitura de texto em voz alta.");
        return;
    }

    // Cancela qualquer leitura que já esteja acontecendo
    sinteseVoz.cancel();

    // Captura o elemento pai pelo ID
    const secao = document.getElementById(idSecao);
    
    if (secao) {
        // Extrai todo o texto contido dentro da seção
        const textoParaLer = secao.innerText;

        // Cria a instância de narração
        const narracao = new SpeechSynthesisUtterance(textoParaLer);

        // Configurações da voz (Tenta usar português do Brasil)
        narracao.lang = 'pt-BR';
        narracao.rate = 1.0; // Velocidade da fala (1.0 é o normal)
        narracao.pitch = 1.0; // Tom da voz

        // Inicia a leitura
        sinteseVoz.speak(narracao);
    }
}
