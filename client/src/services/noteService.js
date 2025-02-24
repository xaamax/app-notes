import axios from '@/plugins/axios.js'

const getNotes = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_URL_API}/notes`)
        return response.data
    } catch (error) {
        console.error('Erro ao carregar notas:', error)
    }
}

const getNoteById = async (id) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_URL_API}/notes/${id}`)
        return response.data
    } catch (error) {
        console.error('Erro ao carrega nota:', error)
    }
}

const submitNote = async (request = {}) => {
    const baseURL = request.data._id ?
        `${import.meta.env.VITE_URL_API}/notes/${request.data._id}`
        : `${import.meta.env.VITE_URL_API}/notes`

    const message = request.method === "DELETE" ?
        "removida"
        : "salva"

    try {
        await axios({url: baseURL, ...request})
        return { success: true, message: `Nota ${message} com sucesso!` }
    } catch (error) {
        return { success: false, message: `Erro ao ${message} nota: ${error}` }
    }
}

export { getNotes, getNoteById, submitNote }