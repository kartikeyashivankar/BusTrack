const busController = {
  getAllBuses: (req, res) => {
    res.json({ message: 'Get all buses controller' });
  },
  createBus: (req, res) => {
    res.json({ message: 'Create bus controller' });
  },
  getBusByNumber: (req, res) => {
    res.json({ message: 'Get bus by number controller' });
  },
  updateBus: (req, res) => {
    res.json({ message: 'Update bus controller' });
  },
  deleteBus: (req, res) => {
    res.json({ message: 'Delete bus controller' });
  },
  updateStop: (req, res) => {
    res.json({ message: 'Update stop controller' });
  },
  resetLoop: (req, res) => {
    res.json({ message: 'Reset loop controller' });
  },
  updateRoute: (req, res) => {
    res.json({ message: 'Update route controller' });
  }
};

module.exports = busController;
