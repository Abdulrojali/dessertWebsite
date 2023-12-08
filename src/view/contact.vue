<script>
import {ref} from 'vue'
export default{
    setup(){
        const emailUser=ref('')
        const password=ref('')
        const massage=ref('')
        const validation=()=>{
            if(emailUser===''|| password===''|| massage===''){
                alert('tolong masukkan input')
            }
            else{
            alert('pesan terkirim')
        }
        return{emailUser,password,massage,validation}
    }
 }
}
</script>

<template>
    <div class="container">
        <h1 class="h3 mb-3">contact me</h1>
        <div class="content">
            <section class="container-fluid flex flex-col gap-2 mb-2">
                <label for="emailUser" class="h6">emailUser</label>
                <input type="email" class="emailUser" v-model="emailUser">
            </section>
            <section class="container-fluid flex flex-col gap-2 mb-2">
                <label for="password" class="h6">password</label>
                <input type="password" class="password" v-model="password">
            </section>
            <section class="container-fluid flex flex-col gap-2 mb-2">
                <label for="massage" class="h6">massage</label>
                <textarea name="" id="massage" cols="30" rows="10" v-model="massage"></textarea>
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
#massage{
    width:100%;
    height: 100px;
}
</style>