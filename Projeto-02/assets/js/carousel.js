/* Cria o array com os filmes */

const filmes = [
  {
    imagem: "castelo-animado-catalogo.jpg",
    titulo: "Castelo Animado",
    descricao: "A jovem Sophie trabalha na chapelaria de seu falecido pai em uma cidade monótona.",
  },
  {
    imagem: "castelo=do-ceu-catalogo.jpg",
    titulo: "Castelo do Céu",
    descricao: "A jovem órfã Sheeta e seu sequestrador, coronel Muska, estão voando para uma prisão militar quando sua aeronave é atacada por uma gangue de piratas aéreos liderados por Dola. ",
  },
  {
    imagem: "kiki-catalogo.jpg",
    titulo: "O Serviço de Entregas da Kiki",
    descricao: "Nesta animação, uma jovem bruxa se afasta de sua família para praticar sua feitiçaria. Mas logo ela percebe que fazer novos amigos será difícil.",
  },
  {
    imagem: "castelo-animado-catalogo.jpg",
    titulo: "Castelo Animado",
    descricao: "A jovem Sophie trabalha na chapelaria de seu falecido pai em uma cidade monótona.",
  },
  {
    imagem: "viagem-de-chihiro-filme.jpg",
    titulo: "A Viagem de Chihiro",
    descricao: "Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em animais.",
  },
  {
    imagem: "meu-amigo-totoro-catalogo.jpg",
    titulo: "Meu Amigo Totoro",
    descricao: "A trama de duas garotas que se mudam para o campo para ficar perto da mãe, que está doente, e que acabam desenvolvendo uma relação bem especial com a floresta vizinha e as fantásticas criaturas que vivem ali.",
  },
    {
    imagem: "vidas-aos-ventos-catalogo.jpg",
    titulo: "Vidas ao Vento",
    descricao: "Jiro Horikoshi é um jovem que vive em uma cidade no interior do Japão. Ele tem o sonho de voar em um avião com formato de pássaro. A partir desse sonho, Jiro decide que construir um avião como deseja e colocá-lo no ar é a meta de sua vida.",
  },
    {
    imagem: "tumolo-dos-vagalumes.jpg",
    titulo: "Castelo Animado",
    descricao: "Os irmão Setsuko e Seita vivem no Japão em meio a Segunda Guerra Mundial. Após a morte da mãe em um bombardeio e a convocação do pai para a Guerra. Insatisfeitos, saem da cidade e",
  },
    {
    imagem: "conto-catalogo.jpg",
    titulo: "O Conto da Princesa Kaguya",
    descricao: "Adaptação de folclórico conto japonês, o longa conta a história de Kaguya, uma garota que é encontrada dentro de um bambu e acaba adotada por um camponês e sua esposa.",
  },
]

/* Cria Carrossel */

class Carousel {
  constructor(elementoCarousel, filmes) {
    this.elementoCarousel = elementoCarousel;
    this.filmes = filmes;
  }

  genarateCarousel() {
    let itensCarousel = "";
    let idx = 0;

    for (let filme of this.filmes) {
      itensCarousel += `<div class="catalogo-filmes" onclick="openModal(${idx})" data-bs-toggle="modal" data-bs-target="#exampleModal" data-toggle="tooltip" data-bs-placement="top" data-bs-title='${filme.titulo}'>
      <div style="background-image: url('./assets/img/${filme.imagem}') "></div>
      </div>`
      idx++;
    }
    this.elementoCarousel.innerHTML = itensCarousel;
  }

  initCarousel() {
    $('.catalogo-carrossel').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      arrows: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 991.9,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 767.9,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 575.9,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    })

  }
}


/* Slick Slider */


/* Chamar a função para gerar o Carrousel */
const elementoCarousel = document.querySelector('.catalogo-carrossel');
const carousel = new Carousel(elementoCarousel, filmes);
carousel.genarateCarousel()
carousel.initCarousel()

/* Chamar a função para gerar oTooltip*/
$(document).ready(function() {
  $("body").tooltip({ selector: '[data-toggle=tooltip]' });
});

/* Abrir o Modal */
function openModal(idx) {
  const modalBody = document.getElementById("modal-body-id");
  const modalHeader = document.getElementById("modal-header-id");
  modalBody.innerHTML = `<div id="modal-body-id" class="modal-body bg-pessoal-3"><p>${filmes[idx].descricao} </p></div>`;
  modalHeader.innerHTML = `<div id="modal-header-id"class="modal-header bg-pessoal"><h5 class="modal-title bg-pessoal-2" id="exampleModalLabel">${filmes[idx].titulo}</h5 ></div>`
}


