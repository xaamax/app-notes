const express = require('express');
const router = express.Router();

function apiResource(Model) {   
    router.post('/', async (req, res) => {
        try {
            const newItem = new Model(req.body);
            await newItem.save();
            res.status(201).json(newItem);
        } catch (error) {
            res.status(500).json({ error: `Erro ao criar registro: ${error.message}` });
        }
    });

    router.get('/', async (req, res) => {
        try {
            const items = await Model.find();
            res.json(items);
        } catch (error) {
            res.status(500).json({ error: `Erro ao buscar registros: ${error.message}` });
        }
    });

    router.get('/:id', async (req, res) => {
        try {
            const item = await Model.findById(req.params.id);
            if (!item) {
                return res.status(404).json({ error: 'Registro não encontrado.' });
            }
            res.json(item);
        } catch (error) {
            res.status(500).json({ error: `Erro ao buscar registro: ${error.message}` });
        }
    });

    router.put('/:id', async (req, res) => {
        try {
            const updatedItem = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedItem) {
                return res.status(404).json({ error: 'Registro não encontrado.' });
            }
            res.json(updatedItem);
        } catch (error) {
            res.status(500).json({ error: `Erro ao atualizar registro: ${error.message}` });
        }
    });

    router.delete('/:id', async (req, res) => {
        try {
            const deletedItem = await Model.findByIdAndDelete(req.params.id);
            if (!deletedItem) {
                return res.status(404).json({ error: 'Registro não encontrado.' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: `Erro ao deletar registro: ${error.message}` });
        }
    });

    return router;
}

module.exports = apiResource;