<template>
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My post-it</title>
  </head>

  <body>
    <h1>My post-it</h1>
    <header>
      <nav class="navbar">
        <div class="container-fluid">
          <a class="navbar-brand"><h2>All my posts</h2></a>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </header>
    <div>
      <router-link to="/addnotes" class="btn btn-primary"><h4>Add a post it +</h4></router-link>
    </div>
    <section class="container d-flex text-center">
      <div class="container text-center row px-4 maindiv">
        <div class="col-lg-3 col-md-4 col-sm-6 mx-3 px-3 my-4" v-for="note in store.notes.notes" :key="note._id">
          <div class="col-xs-6 col-sm-4">
            <div class="card ombre" style="width: 18rem; height: 20rem; margin-right: 10px;">
              <div class="card-body">
                <h5 class="card-title">{{ note.title . slice(0,100)+ "..."}}</h5>
                <p class="card-text">{{ note.content[0].slice(0,100)+ "..."}}</p>
                <router-link :to="'/notes/' + note._id" class="btn btn-primary ajustdetails">Details</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
  </html>
</template>

<style>
body {
  background-color: beige;
  margin: 1em;
}
section{
  align-items: center;
  justify-items: center;  
  justify-content: center;
}
div a{
  background-color: beige;
}
h1{
  /* background-color: rgb(20, 118, 255); */
  border: solid;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-color: rgb(20, 118, 255);
}
.ajustdetails{
  position: absolute;
  bottom: 25px;
  left: 100px;
}
.ombre{
  box-shadow: 8px 8px 30px #555;
}

</style>

<script setup>
  import { useNotesStore } from '@/stores/My_posts';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const store = useNotesStore();
  store.fetchAllposts();
</script>