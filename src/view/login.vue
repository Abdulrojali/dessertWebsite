<script>
import {ref} from 'vue'
import {RouterLink} from 'vue-router'
export default{
    setup(){
        const username=ref('')
        const password=ref('')
        const validation=()=>{
            if(username==='' || password===''){
                alert('tolong masukkan input')
            }
            if(username!='budi' && password!='12345'){
                alert('username atau password salah')
            }
            else{
                alert(`selamat datang ${username}`)
            }
        }
        const refresh=()=>{
            username=''
            password=''
            window.location.reload()
        }
        return{username,password,validation,refresh}
    }
}
</script>

<template>
    <div class="container">
        <h1 class="h3 mb-3">login menu</h1>
        <div class="content">
            <section class="container-fluid flex flex-col gap-2 mb-5">
                <label for="username" class="h5">username</label>
                <input type="text" class="username" v-model="username">
            </section>
            <section class="container-fluid flex flex-col gap-2 mb-2">
                <label for="password" class="h5">password</label>
                <input type="password" class="password" v-model="password">
            </section>
            <section id="btn">
                <button @click="validation" class="btn btn-dark ">login</button>
                <button @click="refresh" class="btn btn-dark">cancel</button>
            </section>
            <section class="mt-5">
                <b class="h6">belum punya akun ? <RouterLink to="/createAccount"><a href="">daftar sekarang</a></RouterLink></b>
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
    padding: 10px;
}
#btn{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
}
</style>