// function halo(nama, callback) {
//     console.log("Halo", nama);
//     document.getElementById("async2").innerHTML = `Halo ${nama}`;
//     callback(); // fungsi dipanggil di sini
// }

// halo("Yusuf", function () {
//     console.log("Selamat datang di kelas JavaScript!");
//     document.getElementById("async").innerHTML = "Async!";
// });


// setTimeout(() => {
//     console.log("1. Ambil user");
//     setTimeout(() => {
//         console.log("2. Ambil order user");
//         setTimeout(() => {
//             console.log("3. Ambil produk dari order");
//         }, 1000);
//     }, 1000);
// }, 1000);

// public api 
// 

function ambilProduk(callback) {
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            callback(null, data); // sukses
        })
        .catch((error) => {
            callback(error, null); // gagal
        });
}

ambilProduk(function (error, produk) {
    if (error) {
        document.getElementById("error").innerHTML = "error";
        console.error("Gagal ambil data:", error);
        return;
    }

    const tbody = document.getElementById("produk-table");

    produk.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${item.title}</td><td>${item.price}</td><td>${item.description}</td>`;
        tbody.appendChild(row);
    });

    // tampilkan di konsol
    console.log("Produk:", produk);
});

// const product = { title: 'New asd', price: 29.99 };
// fetch('https://fakestoreapi.com/products', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(product)
// })
//     .then(response => response.json())
//     .then(data => console.log(data));

