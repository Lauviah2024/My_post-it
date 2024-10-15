//import Edit_post from "@/components/Edit_post.vue";
import router from "@/router";
import { defineStore } from "pinia";
export const useNotesStore = defineStore('notes',{
    state: () => ({
        notes: [],
        note: '',
        content: "",
        // loading: false,
        // error: ""
    }),

    actions: {
        // Get all the posts from the API
        async fetchAllposts(){
            try {
                const response = await fetch("http://62.72.5.95:1999/notes/");
                this.notes = await response.json();
            } catch (error) {
                error.message;
            }
        },
        
        // Get the details of a post
        async detailpost(id){
            try {
                const response = await fetch("http://62.72.5.95:1999/notes/"+id);
                this.notes = await response.json();
                this.content = this.notes.content[0];
            } catch (error) {
                error.message;
            }
        },

        // Edit a post 
        async editpost(id, body) {
            try {  
                const response = await fetch('http://62.72.5.95:1999/notes/' + id, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body : JSON.stringify(body)
                });
                this.notes = await response.json();
            } catch (error) {
                error.message;
            }
        },

        // Add a post
        async addpost (title, content) {
            try {
                await fetch('http://62.72.5.95:1999/notes', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body : JSON.stringify({title, content}),
                });
                router.push('/');          
            } catch (error) {
                error.message;
            }
        },

        // Delete a post
        async delpost(){
            let confirm = window.confirm("Are you sure you want to delete this post ?");
            if (confirm){
                await fetch("http://62.72.5.95:1999/notes/" + router.currentRoute.value.params.id, { method: 'DELETE' });
                router.push('/');
            }
        }
    }
})