<template>
  <div class="note-container">
    <header>
      <img src="@/assets/logo.png" alt="Logo App Notes" />
      <span><strong>Gerenciamento de Notas</strong></span>
      <a class="button" href="notes/create">Criar Nota</a>
    </header>
    <h1>Notas Registradas:</h1>
    <div v-if="notes.length">
      <ul>
        <li v-for="note in notes" :key="note.id">
          <strong>Título:</strong>
          <p>
            {{ note.title }}
          </p>
          <strong>Conteúdo:</strong>
          <p>
            {{ note.content }}
          </p>
          <a :href="`/notes/${note._id}`"> Editar </a>
          <a href="javascript:void(0);" @click="removeNote(note)"> Excluir </a>
        </li>
      </ul>
    </div>
    <div v-else>Nenhuma nota encontrada.</div>
  </div>
</template>
  
  <script>
import { getNotes, submitNote } from "@/services/noteService";
export default {
  name: "NoteIndex",
  data() {
    return {
      notes: [],
    };
  },
  methods: {
    async loadNotes() {
      this.notes = await getNotes();
    },
    async removeNote(note) {
      const request = {
        method: "DELETE",
        data: note,
      };
      const confirmDelete = window.confirm(
        "Tem certeza que deseja excluir esta nota?"
      );
      if (!confirmDelete) return;
      const response = await submitNote(request);
      alert(response.message)
      if (response.success) {
        await this.loadNotes();
      }
    },
  },
  async mounted() {
    this.loadNotes();
  },
};
</script>
  
  <style scoped>
.note-container {
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;
}

.note-container header {
  display: flex;
  align-items: center;
}

.note-container header span {
  font-size: 20px;
  margin-left: 24px;
}

.note-container header span strong {
  color: #251fc5;
}

.note-container header img {
  height: 64px;
}

.note-container header a {
  width: 160px;
  margin-left: auto;
  margin-top: 0;
}

.note-container h1 {
  margin-top: 80px;
  margin-bottom: 24px;
}

.note-container ul {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;
}

.note-container ul li {
  background: #ffffff;
  padding: 24px;
  border-radius: 8px;
  position: relative;
}

.note-container ul li a,
button {
  position: absolute;
  right: 24px;
  top: 24px;
  border: 0;
  background: transparent;
}

.note-container ul li a + a {
  top: 50px;
}

.note-container ul li strong {
  display: block;
  margin-bottom: 16px;
  color: #41414d;
}

.note-container ul li p + strong {
  margin-top: 32px;
}

.note-container ul li p {
  color: #737380;
  line-height: 21px;
  font-size: 16px;
}
</style>