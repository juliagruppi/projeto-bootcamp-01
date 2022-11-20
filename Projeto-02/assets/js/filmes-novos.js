const filmesNovos = [
  {
    titulo: "Aya e a Bruxa",
    descricao: "A jovem Sophie trabalha na chapelaria de seu falecido pai em uma cidade monótona.",
  }
]

class Notification {
  constructor(elementoNotification, filmesNovos) {
    this.elementoNotification = elementoNotification;
    this.filmesNovos = filmesNovos;
    this.quantFilmes = this.filmesNovos.length;
  }


  genarateNotification() {

  

    if (this.quantFilmes > 0) {
       let itensNotification = `<li>Filmes Novos:</li>`;
      for (let filmesNovos of this.filmesNovos) {
        itensNotification += `<li>${filmesNovos.titulo}</li>`;
      }
      this.elementoNotification.innerHTML = itensNotification;
    }
    else {
       let itensNotification = `<li>No momento não temos filmes novos.</li>`;
      this.elementoNotification.innerHTML = itensNotification;
    }
  }
}

/* Chamar a função para gerar o Carrousel */
const elementoNotification = document.querySelector('.notificacao');
const notification = new Notification(elementoNotification, filmesNovos);
notification.genarateNotification()
notification.initNotificationl()