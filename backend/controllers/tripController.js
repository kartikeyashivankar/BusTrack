const tripController = {
  getAllTrips: (req, res) => {
    res.json({ message: 'Get all trips controller' });
  },
  getTripsByBus: (req, res) => {
    res.json({ message: 'Get trips by bus controller' });
  },
  createTrip: (req, res) => {
    res.json({ message: 'Create trip controller' });
  }
};

module.exports = tripController;
