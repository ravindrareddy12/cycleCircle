const State = require('../models/stateSchema')


module.exports.states = async (req, res) => {
    try{
      const state = await State.create(req.body);
      res.status(201).json(state);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  module.exports.state =  async (req, res) => {
    try {
      const states = await State.find();
      res.json(states);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };