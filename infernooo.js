fetch("musicas.json")
    .then(response => response.json())
    .then(musicas => {

        const lista = document.getElementById("listaMusica");

        musicas.forEach(musica => {

            lista.innerHTML += `
                <div class="musica">

                    <img src="${musica.capa}" alt="${musica.nome}">

                    <h2>${musica.nome}</h2>

                    <p>${musica.artista}</p>

                    <audio controls>
                        <source src="${musica.audio}" type="audio/mpeg">
                    </audio>

                </div>
            `;

        });

    })
    .catch(erro => {
        console.error("Erro ao carregar o JSON:", erro);
    }); 