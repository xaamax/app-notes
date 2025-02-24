<template>
  <div class="note-details-container">
    <div class="content">
      <section class="form">
        <img src="@/assets/logo.png" alt="Logo App Notes" />
        <h1>Nota</h1>
        <p>Preencha os campos e clique em "Salvar".</p>
        <a class="back-link" href="/notes"> Voltar para Notas </a>
      </section>
      <form @submit.prevent="saveNote">
        <input placeholder="Título..." v-model="note.title" />
        <div class="error-field" v-if="!note.title">* Campo obrigatório</div>
        <textarea rows="6" placeholder="Conteúdo..." v-model="note.content" />
        <button class="button" :disabled="!note.title">Salvar</button>
      </form>
    </div>
  </div>
</template>

<script>
import { submitNote, getNoteById } from "../../services/noteService";
export default {
  name: "NoteDetails",
  data() {
    return {
      note: {
        title: "",
        content: "",
      },
    };
  },
  methods: {
    async saveNote() {
        const request = {
            method: this.$route.params.id ? "PUT" : "POST",
            data: this.note 
        }
        const response = await submitNote(request);
        alert(response.message);
        if(response.success){
            this.$router.push("/notes")
        }
    },
  },
  async mounted() {
    const { id } = this.$route.params || "";
    if (id) {
      await getNoteById(id).then((data) => (this.note = data));
    }
  },
};
</script>

<style>
.note-details-container {
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.note-details-container .content {
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.note-details-container .content section {
  width: 100%;
  max-width: 380px;
}

.note-details-container section.form {
  width: 100%;
  max-width: 350px;
  margin-right: 30px;
}

.note-details-container section.form img {
  width: 45%;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.note-details-container .content section h1 {
  margin: 64px 0 32px;
  font-size: 32px;
}

.note-details-container .content section p {
  font-size: 18px;
  color: #737380;
  line-height: 32px;
}

.note-details-container .content form {
  width: 100%;
  max-width: 450px;
}

.note-details-container .content form input,
textarea {
  margin-top: 8px;
}

.error-field {
  padding: 5px;
  color: red;
}
</style>