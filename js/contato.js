const form = document.getElementById("contactForm");


form.addEventListener("submit", function(event) {

    event.preventDefault();


    const nome =
        document.getElementById("nome").value;

    const empresa =
        document.getElementById("empresa").value;

    const telefone =
        document.getElementById("telefone").value;

    const email =
        document.getElementById("email").value;

    const servico =
        document.getElementById("servico").value;

    const mensagem =
        document.getElementById("mensagem").value;


    const texto = `
Olá, LG Safety!

Gostaria de solicitar um orçamento.

*Nome:* ${nome}

*Empresa:* ${empresa}

*Telefone:* ${telefone}

*E-mail:* ${email}

*Serviço:* ${servico}

*Mensagem:*
${mensagem}
`;


    const numero =
        "5551991170405";


    const url =
        `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;


    window.open(url, "_blank");

});