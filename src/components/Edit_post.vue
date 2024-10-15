<template>
    <h1>Edit a post</h1>
    <form @submit.prevent="Update">
        <div class="form-control" style="height: 20em; width: 50em; align-content: center; justify-content: space-between;">
            <div>
                <label for="Title">Title : </label>
                <input v-model.trim ="store.notes.title" type="text" name="Title" required><br><br>
            </div>
            <div class="form control">
                <label for="Content">Content : </label>
                <textarea v-model.trim ="store.notes.content[0]" type="text" name="Content" style="height: 10em; width: 25em;" required></textarea><br><br>
            </div>
            <button type="submit" class="btn btn-primary">Edit</button>
        </div>
    </form>
</template>

<style></style>

<script setup>
    // Update method
    import router from '@/router';
    import { useNotesStore } from '@/stores/My_posts';
    import { ref, onBeforeMount } from 'vue';
    import { useRoute } from 'vue-router';
    const route = useRoute();
    const store = useNotesStore();

    // Creating the body
    const notes = ref({
        title: "",
        content: [
            ""
        ]
    });

    // Get the post in the details
    onBeforeMount(async () => {
        await store.detailpost(route.params.id, notes).then(()=>{
            notes.value=store.notes;
        });
    })
    
    function Update(){
        store.editpost(route.params.id, notes.value);
        if(store.editpost(route.params.id, notes.value)){
            store.fetchAllposts(notes);
            alert("Post edited successfully...");
            router.push('/');
        }
    }
</script>