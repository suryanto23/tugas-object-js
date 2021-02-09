











// Soal Nomor 2 

const data = [

    {
        name: "Alpha",
        class: "Dragon",
        club: ['Bola', 'Bulutangkis']
    },

    {
        name: "Beta",
        class: "Lizard",
        club: ['Membaca', 'Bulutangkis']
    },
    
];


// Tampilkanlah seperti ini
// Alpha ada di kelas Dragon, dia mengikuti club Bola, Bulutangkis
// Beta ada di kelas Lizard, dia mengikuti club Membaca, Bulutangkis

    let gabung;

    for (let i=0 ; i < data.length ; i++){

       gabung += ` ${data[i].name} ada di kelas ${data[i].class}, dia mengikuti club ${data[i].club[0]}, ${data[i].club[1] } `


    }

    console.log(gabung);

