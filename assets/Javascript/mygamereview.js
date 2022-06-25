//Shadow of The Tomb Raider Manipulasi DOM//
const kontainer = document.querySelector('.kontainer');
const besar = document.querySelector('.besar');
const smallest = document.querySelectorAll('.kecil');

kontainer.addEventListener('click', function(e) {
    if( e.target.className == 'kecil' ) {
        besar.src = e.target.src;
        besar.classList.add('fade');
        setTimeout(function() {
            besar.classList.remove('fade');
        }, 500);

        smallest.forEach(function(kecil) {
            kecil.className = 'kecil';

        });

        e.target.classList.add('aktif');
    }

});

//Euro Truck Simulator 2 Manipulasi Dom//
const kontainer1 = document.querySelector('.kontainer1');
const besar1 = document.querySelector('.besar1');
const terkecil = document.querySelectorAll('.kecil1');

kontainer1.addEventListener('click', function(e) {
    if( e.target.className == 'kecil1' ) {
        besar1.src = e.target.src;
        besar1.classList.add('fade');
        setTimeout(function() {
            besar1.classList.remove('fade');
        }, 500);

        terkecil.forEach(function(kecil1) {
            kecil1.className = 'kecil1';

        });

        e.target.classList.add('aktif');
    }

});

const kontainer2 = document.querySelector('.kontainer2');
const besar2 = document.querySelector('.besar2');
const preview = document.querySelectorAll('.kecil2');

kontainer2.addEventListener('click', function(e) {
    if( e.target.className == 'kecil2' ) {
        besar2.src = e.target.src;
        besar2.classList.add('fade');
        setTimeout(function() {
            besar2.classList.remove('fade');
        }, 500);

        preview.forEach(function(kecil2) {
            kecil2.className = 'kecil2';

        });

        e.target.classList.add('aktif');
    }

});


