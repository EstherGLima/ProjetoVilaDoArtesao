// Função para carregar os cards dos artesãos
function card_art() {
    let divart = document.getElementById("card_art");
    let divart_apresentar = document.getElementById("apresent_art");

    fetch("../JSON/artesao.json").then((response) => {
        response.json().then((dados) => {
            // Mapeia os artesãos e adiciona os cards na página
            dados.artesoes.forEach((artesao) => {
                divart.innerHTML += `
                    <div class="col-lg-4 mb-4 col-12">
                        <div class="team-thumb d-flex align-items-center">
                            <img src="${artesao.foto_perfil}" id="foto_art" class="img-fluid custom-circle-image team-image me-4" alt="">
                            <div class="team-info">
                                <h5 class="mb-0" id="nome_art">${artesao.nome}</h5>
                                <strong class="text-muted" id="categoria_art">${artesao.categoria}</strong>
                                <button type="button" class="btn custom-modal-btn" data-bs-toggle="modal" data-bs-target="#OIDE${artesao.id}">
                                    <i class="bi-plus-circle-fill"></i>
                                </button>
                            </div>
                        </div>
                    </div>`;
            });

            // Mapeia os artesãos e adiciona os modais na página
            dados.artesoes.forEach((artesao) => {
                divart_apresentar.innerHTML += `
                    <div class="modal fade" id="OIDE${artesao.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg">
                            <div class="modal-content border-0">
                                <div class="modal-header flex-column">
                                    <img src="${artesao.foto_perfil}" class="img-fluid custom-circle-image team-image me-4" alt="">
                                    <h3 class="modal-title" id="exampleModalLabel">${artesao.nome}</h3>
                                    <h6 class="text-muted">${artesao.categoria}</h6>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <h5 class="mb-4">${artesao.titulo_biografia}</h5>
                                    <div class="row mb-4">
                                        <div class="">
                                            <p>${artesao.biografia}</p>
                                        </div>
                                    </div>
                                    <ul class="social-icon text-center">
                                        <li><a href="${artesao.facebook}" id="style-social" class="social-icon-link bi-facebook"></a></li>
                                        <li><a href="${artesao.telefone}" id="style-social" class="social-icon-link bi-whatsapp"></a></li>
                                        <li><a href="${artesao.instagram}" id="style-social" class="social-icon-link bi-instagram"></a></li>
                                        <li class="me-3 btn custom-btn" id="alinhamentobutton"><a href="artesaopage.html#${artesao.id}"><strong>VER SEUS PRODUTOS</strong></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>`;
            });
        });
    });
}

// Função para carregar a página do artesão
function artesaopage() {
    let nome = document.getElementById("nome");
    let bio = document.getElementById("bio");
    let div_produto = document.getElementById("div_produto");

    let id_page = window.location.hash.replace("#", "");
    id_page = parseInt(id_page);

    fetch("../JSON/artesao.json").then((response) => {
        response.json().then((dados) => {
            dados.artesoes.forEach((artesao) => {
                if (id_page === artesao.id) {
                    nome.innerHTML = artesao.nome;
                    bio.innerHTML = artesao.biografia;
                    document.getElementById("foto_perfil").src = artesao.foto_perfil;
                    document.getElementById("facebook").href = artesao.facebook;
                    document.getElementById("whatsapp").href = artesao.telefone;
                    document.getElementById("instagram").href = artesao.instagram;

                    fetch("../JSON/produto.json").then((response) => {
                        response.json().then((dados) => {
                            dados.produtos.forEach((produto) => {
                                if (id_page === produto.id_artesao) {
                                    div_produto.innerHTML += `
                                        <div class="col-lg-4 col-12 mb-3">
                                            <div class="product-thumb">
                                                <a href="product-detail.html#id_pro=${produto.id}%id_art=${produto.id_artesao}">
                                                    <img src="${produto.imagem_produto}" class="img-fluid product-image" alt="">
                                                </a>
                                                <div class="product-top d-flex"></div>
                                                <div class="product-info d-flex">
                                                    <div>
                                                        <h5 class="product-title mb-0">
                                                            <a href="product-detail.html#id_pro=${produto.id}%id_art=${produto.id_artesao}" class="product-title-link">${produto.nome}</a>
                                                        </h5>
                                                        <p class="product-p">${produto.descricao}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`;
                                }
                            });
                        });
                    });
                }
            });
        });
    });
}

