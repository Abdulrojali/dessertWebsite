<script>
export default{

}
</script>

<template>
   <div class="container">
        <h1 class="h3 mb-3">Create Account</h1>
        <div class="content">
            <section class="container-fluid flex flex-col gap-2 mb-2">
                <label for="name" class="h6">name</label>
                <input type="text" class="name" v-model="name">
            </section>
            <section class="container-fluid flex flex-col gap-2 mb-2">
                <label for="email" class="h6">email</label>
                <input type="email" class="email" v-model="email">
            </section>
            <section class="container-fluid flex flex-col gap-2 mb-2">
                <label for="username" class="h6">username</label>
                <input type="username" class="username" v-model="username">
            </section>
            <section class="container-fluid flex flex-col gap-2 mb-2">
                <label for="password" class="h6">password</label>
                <input type="password" class="password" v-model="password">
            </section>
            <section id="btn">
                <button @click="validation" class="btn btn-dark ">submit</button>
                <button @click="refresh" class="btn btn-dark">cancel</button>
            </section>
        </div>
    </div>
</template>

<style scoped>
.container{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.content{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.content input{
    width:100%;
    padding: 4px;
}
#btn{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
}
</style>