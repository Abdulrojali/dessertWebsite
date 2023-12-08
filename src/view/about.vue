<template>
    <div class="container-fluid flex flex-col justify-center align-center">
        <div class="jumbotron">
            <h3 class="h1 text-capitalize">website ini menyediakan berbagai macam makanan dan minuman</h3>
            <button type="button" class="btn btn-dark mt-2">beli sekarang</button>
        </div>
        <div class="content container flex flex-col ">
            <h1 class="h4 text-bold text-capitalize text-center">benefit</h1>
            <div class="row">
                <div class="col-4 p-3 text-center border border-2">
                    <i class="fa-solid fa-truck-fast mb-3 "></i>
                    <p>kami menawarkan berbagai macam pengiriman. mulai dari container,kurir,maupun gojek dengan pengantaran cepat, dan aman.</p>
                </div>
                <div class="col-4 p-3 text-center border border-2">
                    <i class="fa-solid fa-percent mb-3"></i>
                    <p>disetiap minggu terdapat banyak discount menarik yang bisa anda dapatkan. apabila anda berbelanja disini</p>
                </div>
                <div class="col-4 p-3 text-center border border-2">
                    <i class="fa-solid fa-handshake mb-3"></i>
                    <p>terpercaya oleh beberapa patner kami dalam menjalankan bisnis ini</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.jumbotron{
    text-align: center;
    height: 50vh;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
}
.h1{
    width: 85%;
}
.col-4 i{
    font-size: 2em;
}
.col-4 p{
    font-size: .9em;
}
</style>
