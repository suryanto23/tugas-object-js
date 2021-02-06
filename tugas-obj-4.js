




//Exercise 4:

// Buatlah tampilan buah menggunakan array of object
// Data yang perlu ditampilkan
// Nama, warna, nama latin, tipe biji, gambar buah


// Soal Nomor 4



let arr = [

    {
        nama : "Apel",
        warna : "Merah",
        namaLatin : "Malus domestica",
        biji : "Monokotil",
        foto : "https://images.unsplash.com/photo-1587852093325-141e842ff095?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        nama : "Jeruk",
        warna : "Orange",
        namaLatin : "Citrus",
        biji : "Dikotil",
        foto : "https://images.unsplash.com/photo-1585827552668-d0728b355e3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        nama : "Kiwi",
        warna : "Hijau",
        namaLatin : "Actinidia deliciosa",
        biji : "Dikotil",
        foto : "https://images.unsplash.com/photo-1552801386-22419317d4d3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
    },
    {
        nama : "Semongko",
        warna : "Hijau",
        namaLatin : "Citrullus lanatus",
        biji : "Monokotil",
        foto : "https://images.unsplash.com/photo-1581406770262-16b165c5dce5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        nama : "Pepaya",
        warna : "Kuning",
        namaLatin : "Ananas Comosus",
        biji : "Dikotil",
        foto : "https://images.unsplash.com/photo-1439300807642-1d369f8431fc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        nama : "Lychee",
        warna : "Merah",
        namaLatin : "Litchi chinensis   ",
        biji : "Monokotil",
        foto : "https://images.unsplash.com/photo-1594151820883-f09a7a4246fe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80"
    },
    {
        nama : "Stoberi",
        warna : "Merah",
        namaLatin : "Fragaria × ananassa",
        biji : "Monokotil",
        foto : "https://images.unsplash.com/photo-1586810523999-a7ea5e5cfb42?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        nama : "Blueberry",
        warna : "Biru",
        namaLatin : "Cyanococcus",
        biji : "Monokotil",
        foto : "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },

];

let target = document.querySelector("#target");



arr.forEach((i) => {


    let summonDiv = document.createElement("div");

                summonDiv.innerHTML =  `<img src="${i.foto}" alt="">
                                        <h3>${i.nama}</h3>
                                        <p>Warna : ${i.warna}</p>
                                        <p>Bio Name : ${i.namaLatin}</p>
                                        <p>Biji : ${i.biji}</p>`                       

                target.appendChild(summonDiv);

});







//membuatElemen.innerHTML = "Nama : " +arr[0].nama;
//target.appendChild(membuatElemen);




     



// identify div - querySelector
// bikin p - createElement
// isi - 
// tempel - appendChild



