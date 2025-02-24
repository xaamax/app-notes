import { createRouter, createWebHistory } from 'vue-router'

import Note from '@/pages/notes/Note.vue'
import NoteIndex from '@/pages/notes/NoteIndex.vue'
import NoteDetails from '@/pages/notes/NoteDetails.vue'

const routes = [
    { path: '/',  redirect: '/notes', component: NoteIndex },
    {
        path: '/notes',
        component: Note,
        children: [
          { path: '', component: NoteIndex },
          { path: 'create', name: 'notes.create', component: NoteDetails },
          { path: ':id', name: 'notes.details', component: NoteDetails },
        ]
      },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router