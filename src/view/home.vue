<template>
    <div class="container-fluid flex justify-center align-center">
        <img src="../img/mejamakan.jpg" id="img" class="img-fluid" alt="">
<div class="jumbotron">
    <div class="topMenu container-fluid flex flex-col">
        <h3 class="h3 judul text-center pt-2">top menu</h3>
        <div class="row">
            <div class="col-4 border p-2">
                <img id="gambar" src="../img/strawberryCake.jpg" alt="" class="img-fluid">
                <h3>cake strawberry</h3>
                <p>price : $3</p>
                <button class="btn btn-sm btn-dark">buy</button>
            </div>
            <div class="col-4 border p-2">
                <img id="gambar"  src="../img/browniesCake.jpg" alt="" class="img-fluid">
                <h3>brownies coklat</h3>
                <p>price : $10</p>
                <button class="btn btn-sm btn-dark">buy</button>
            </div>
            <div class="col-4 border p-2">
                <img id="gambar"  src="../img/waffles.jpg" alt="" class="img-fluid">
                <h3>waffles rasberry</h3>
                <p>price : $5</p>
                <button class="btn btn-sm btn-dark">buy</button>
            </div>
        </div>
    </div>
</div>
    </div>
</template>

<style scoped>
.contianer-fluid{
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
}
 #img{
    margin-top: 10px;
    width: 100%;
    height: 80vh;
}
.jumbotron{
    height: 100vh;
}
#gambar{
    width: 100%;
    height: 200px;
}
</style>