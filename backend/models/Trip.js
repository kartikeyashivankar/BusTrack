const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  busNumber: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  startTime: {
    type: Date
  },
  endTime: {
    type: Date
  },
  totalBoarded: {
    type: Number,
    default: 0
  },
  totalAlighted: {
    type: Number,
    default: 0
  },
  peakCount: {
    type: Number,
    default: 0
  },
  loopsCompleted: {
    type: Number,
    default: 0
  },
  stops: [{
    stopName: String,
    arrivedAt: Date,
    countAtStop: Number
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Trip', tripSchema);
