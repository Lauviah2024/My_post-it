<template>
    <h1>Add a post</h1>
    <form @submit.prevent="Addpost">
        <div class="form-control" id="form" style="height: 15em; align-content: center; justify-content: space-between;">
            <div>
                <label for="Title">Title : </label>
                <input type="text" name="Title" placeholder="Enter a title..." v-model="title" required><br><br>
            </div>
            <div class="form control">
                <label for="Content">Content : </label>
                <input type="text" name="Content" placeholder="Enter description..." v-model="content" required><br><br>                          
            </div>
            <button type="submit" class="btn btn-primary">Add post</button>
        </div>
    </form>
</template>

<style>
input{
    margin-left: 1em;
    width: 15em;
    border: solid;
    border-radius: 5px;
    border-color: rgb(20, 118, 255);
}
div > #form{
    width: 25em;
}
</style>

<script setup>
import { useNotesStore } from '@/stores/My_posts';
const store = useNotesStore();
import router from '@/router';
import { ref } from 'vue';
//import { errorMessages } from 'vue/compiler-sfc';

const title = ref('');
const content = ref('');

function Addpost(){
    store.addpost(title.value, [content.value]);
    store.fetchAllposts();
    window.alert("Post successfully added...");
    router.push('/');
}
</script>