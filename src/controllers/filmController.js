const mongoose = require("mongoose");
const { Film: FilmModel } = require('../models/Film');

const filmController = {
    create: async (req, res) => {
        try {
            const { title, description, image_url, trailer_url } = req.body;
            const film = { 
                title: title, 
                description: description, 
                image_url: image_url, 
                trailer_url: trailer_url
            };
            
            // create a new film
            const newFilm = await FilmModel.create(film);
            return res.status(201).json(newFilm);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    getAll: async (req, res) => {
        try {
            const films = await FilmModel.find();
            if (!films) {
                return res.status(404).json({ message: 'No films found' });
            }
            return res.status(200).json({films});
        } catch (error) {
            return res.status(500).json({ error: error.message },"Pqp");
        }
    },
    get: async (req, res) => {
        try {
            const { id } = req.params;
            const film = await FilmModel.findById(id);
            if (!film) {
                return res.status(404).json({ message: 'Film not found' });
            }
            return res.status(200).json(film);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { title, description, image_url, trailer_url } = req.body;
            const film = { 
                title: title, 
                description: description, 
                image_url: image_url, 
                trailer_url: trailer_url
            };
            const updatedFilm = await FilmModel.findByIdAndUpdate(id, film, { new: true });
            if (!updatedFilm) {
                return res.status(404).json({ message: 'Film not found' });
            }
            return res.status(200).json(updatedFilm);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedFilm = await FilmModel.findByIdAndDelete(id);
            if (!deletedFilm) {
                return res.status(404).json({ message: 'Film not found' });
            }
            return res.status(200).json({ message: 'Film deleted successfully' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = filmController;