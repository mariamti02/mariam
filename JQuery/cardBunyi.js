class bunyi {
    constructor(foto, suara, cards) {
        this.foto = foto;
        this.suara = suara;
        this.cards = cards;
    }
}

//jquery fungsi klik untuk menentukan cards yang menghasilkan suara dan foto yang sesuai
$(document).ready(function () {
    $('.card-body').each(function () {
      $(this).click(function () {
        var cards = $(this).find('img').attr('id');
        //memberikan perpindahan suara dan foto secara berkelanjutan
        $('#suara').remove(); $('#foto').remove();
        //prepend & append untuk menghasilkan suara dan foto dengan mengirimkan atribut

        //hewan jenis unggas
        if (cards == 'burung kakak tua') {
            $(this).prepend(`<img class="card-img-top" id="foto"  src="foto/brg.png">`) +  $(this).find('.audio').append(`<audio src="audio/burung.mp3" autoplay id="suara"></audio>`);
        } else if (cards == 'ayam') {
            $(this).prepend(`<img class="card-img-top" id="foto"  src="foto/ayam.png">`) +  $(this).find('.audio').append(`<audio src="audio/ayam.mp4" autoplay id="suara"></audio>`);
        } else if (cards == 'bebek') {
            $(this).prepend(`<img class="card-img-top" id="foto"  src="foto/bebek.png">`) +  $(this).find('.audio').append(`<audio src="audio/bebek.mp4" autoplay id="suara"></audio>`);
        } else if (cards == 'angsa') {
            $(this).prepend(`<img class="card-img-top" id="foto"  src="foto/angsa.png">`) +  $(this).find('.audio').append(`<audio src="audio/angsa.mp4" autoplay id="suara"></audio>`);
        } else if (cards == 'elang') {
            $(this).prepend(`<img class="card-img-top" id="foto"  src="foto/elang.png">`) +  $(this).find('.audio').append(`<audio src="audio/elang.mp4" autoplay id="suara"></audio>`);
        } else if (cards == 'burung hantu') {
            $(this).prepend(`<img class="card-img-top" id="foto"  src="foto/hantu.png">`) +  $(this).find('.audio').append(`<audio src="audio/burunghantu.mp4" autoplay id="suara"></audio>`);
        }  

        //hewan jenis predator
        else if (cards == 'buaya') {
            $(this).prepend(`<img class="card-img-top" id="foto"  src="foto/by.png">`) +  $(this).find('.audio').append(`<audio src="audio/buaya.mp4" autoplay id="suara"></audio>`);
        } else if (cards == 'kucing') {
            $(this).prepend(`<img class="card-img-top" id="foto"  src="foto/kcng.png">`) +  $(this).find('.audio').append(`<audio src="audio/kucing.mp3" autoplay id="suara"></audio>`);
        } else if (cards == 'gajah') {
            $(this).prepend(`<img class="card-img-top" id="foto"  src="foto/gjh.png">`) +  $(this).find('.audio').append(`<audio src="audio/gajah.mp4" autoplay id="suara"></audio>`);
        } else if (cards == 'singa') {
            $(this).prepend(`<img class="card-img-top" id="foto"  src="foto/sg.png">`) +  $(this).find('.audio').append(`<audio src="audio/singa.mp4" autoplay id="suara"></audio>`);
        } else if (cards == 'kuda') {
            $(this).prepend(`<img class="card-img-top" id="foto"  src="foto/kkd.png">`) +  $(this).find('.audio').append(`<audio src="audio/kuda.mp4" autoplay id="suara"></audio>`);
        } 
  
        else if (cards == 'sapi') {
            $(this).prepend(`<img class="card-img-top" id="foto"  src="foto/sapi.png">`) +  $(this).find('.audio').append(`<audio src="audio/sapi.mp4" autoplay id="suara"></audio>`);
        } else if (cards == 'unta') {
            $(this).prepend(`<img class="card-img-top" id="foto"  src="foto/unta.png">`) +  $(this).find('.audio').append(`<audio src="audio/unta.mp4" autoplay id="suara"></audio>`);
        } else {
            ' '
        }



      });
    });
  });









  
