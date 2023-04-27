const mongoose = require('mongoose');

const WorksnapsTimeEntrySchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  },
  timeEntries: {
    type: Object,
    startTime : {
        type: Date,
        default: Date.now
    },
    endTime : {
        type: Date,
        default: Date.now
    }
  }
});

module.exports = mongoose.model('WorksnapsTimeEntry', WorksnapsTimeEntrySchema);
