<template>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Details</title>
    </head>
    <body>
        <h1>Details posts</h1>
        <div class="col-xs-6 col-sm-4">
            <p v-if="store.notes==null">Chargement en cours...</p>
            <div v-else class="card" style="width: 30em;">
                <div class="card-body">
                    <h5 class="card-title"><strong>Title</strong> : {{ store.notes.title }} </h5>
                    <p class="card-text"><strong>Content</strong> : {{ store.content }}</p>
                    <p class="card-text"><strong>Created at</strong> : {{ store.notes.createdAt }}</p>
                    <p class="card-text"><strong>Updated at</strong> : {{ store.notes.updatedAt }}</p>
                    <router-link to="/" class="btn btn-primary">Back</router-link>
                    <router-link :to="'/editnotes/' + store.notes._id" class="btn btn-primary" style="margin-left: 8em;">Edit</router-link>
                    <button class="btn btn-primary" @click="store.delpost" style="margin-left: 7em;"><img src="./trash.png" alt="" height="25 px"></button>
                </div>
            </div>
        </div>
    </body>

    </html>
</template>

<style>
    
</style>

<script setup>
//import router from '@/router';
import { useRoute } from 'vue-router';
import { useNotesStore } from '@/stores/My_posts';
import { onMounted } from 'vue';
const route = useRoute();
const store = useNotesStore();
onMounted(async() => {
    await store.detailpost(route.params.id);
})

// import { onUnmounted } from 'vue';
// onUnmounted(async() => {
//     await store.delpost(route.params.id);
// })

</script>