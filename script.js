let cenaZaKolaCelkem;

function cenaZaKolo() {
    cenaZaKolaCelkem = 0;

    if (document.querySelector('#horskeKolo').checked) {
        cenaZaKolaCelkem += parseInt(document.querySelector('#horskeKolo').value) * document.querySelector('#horskeDny').value;
    }
    if (document.querySelector('#detskeKolo').checked) {
        cenaZaKolaCelkem += parseInt(document.querySelector('#detskeKolo').value) * document.querySelector('#detskeDny').value;
    }
    if (document.querySelector('#silnicniKolo').checked) {
        cenaZaKolaCelkem += parseInt(document.querySelector('#silnicniKolo').value) * document.querySelector('#silnicniDny').value;
    }
    if (document.querySelector('#gravelKolo').checked) {
        cenaZaKolaCelkem += parseInt(document.querySelector('#gravelKolo').value) * document.querySelector('#gravelDny').value;
    }
    //pocet dni zapujceni
    cenaZaKolaCelkem = cenaZaKolaCelkem * document.querySelector('#dnyVyp').value;
    //nosic
    cenaZaKolaCelkem += (document.f_kola.prislusenstvi.value / 100) * cenaZaKolaCelkem;


    document.querySelector('#celkovaCena').value = cenaZaKolaCelkem;
};

function overNabidku() {
    let nabid = parseInt(document.querySelector('#nabidka').value);
    if (nabid >= cenaZaKolaCelkem) {
        document.querySelector('#schvaleni').value = "Schváleno";
        document.querySelector('#schvaleni').style.color = 'green';
    }
    else {
        document.querySelector('#schvaleni').value = "Zamítnuto";
        document.querySelector('#schvaleni').style.color = 'red';
    }
};

function overEmail() {
    let mailAddress;
    mailAddress = document.querySelector('#email').value.includes('@');
    if (mailAddress) {
        document.querySelector('#vyzva').innerHTML = "<span style=color:green><br>V pořádku odesláno";
    } else {
        document.querySelector('#vyzva').innerHTML = "<span style=color:red><br>Email není zadán ve správném tvaru";
    }
};
