const analyticsController = {
  getOverview: (req, res) => {
    res.json({ message: 'Get overview controller' });
  },
  getBusiestHours: (req, res) => {
    res.json({ message: 'Get busiest hours controller' });
  },
  getBusAnalytics: (req, res) => {
    res.json({ message: 'Get bus analytics controller' });
  }
};

module.exports = analyticsController;
