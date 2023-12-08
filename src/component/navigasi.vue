<script>
import {RouterLink} from 'vue-router'
</script>

<template>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand text-capitalize fw-bold" href="#">dessert</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <RouterLink to="/"><a class="nav-link fw-normal">Home</a></RouterLink>
                
            </li>
            <li class="nav-item">
                <RouterLink to="/about"><a class="nav-link fw-normal">about</a></RouterLink>
                </li>
                <li class="nav-item">
                <RouterLink to="/contact"><a class="nav-link fw-normal">contact</a></RouterLink>
                </li>
        </ul>
    </div>
    <div class="btn">
      <RouterLink to="/login"><button type="button" class="btn btn-dark">login</button></RouterLink>
    </div>
</nav>
</template>