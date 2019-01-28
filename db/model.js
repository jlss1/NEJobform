var mongoose = require("mongoose");

var jobSchema = new mongoose.Schema({
   client: String,
   clientPhoneNumber: Number,
   employee: String,
   jobType: Number,
   jobSite: String,
   atSite: Boolean,
   createdAt: { type: Date, 
    default: Date.now 
  },
   completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
   
});

module.exports = mongoose.model("Job", jobSchema);