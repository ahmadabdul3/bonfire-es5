var mongoose = require('mongoose');

var CgStorySchema = new mongoose.Schema({
  isDeleted: { type: Boolean, default: false },
  title: String,
  body: String,
  //upvotes: {type: Number, default: 0},
  //comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

CgStorySchema.methods.softDelete = function(cb) {
	this.isDeleted = true;
	this.save(cb);
};

mongoose.model('CgStory', CgStorySchema);