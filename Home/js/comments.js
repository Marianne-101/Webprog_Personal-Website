const app = Vue.createApp({
    data() {
        return {
            showForm: false, // Controls the visibility of the form
            name: "",
            newComment: "",
            comments: []
        };
    },
    methods: {
        toggleContent() {
            this.showForm = !this.showForm; // Toggles form visibility
        },
        addComment() {
            if (this.name && this.newComment) {
                const timestamp = new Date().toLocaleString();
                this.comments.push({
                    name: this.name,
                    text: this.newComment,
                    timestamp
                });
                this.name = "";
                this.newComment = "";
            } else {
                alert("Please enter your name and comment!");
            }
        }
    }
});

app.mount("#appContainer");
