var WidgetSchema = require("../widget/widget.schema.server");
var mongoose = require('mongoose');

var PageSchema = mongoose.Schema ( {
  websiteId: {type:mongoose.Schema.Types.ObjectId, ref: 'WebsiteModel'},
  name: String,
  title: String,
  description: String,
  widgets: [WidgetSchema],
  dateCreated: Date
}, {collection: 'page'});

module.exports = PageSchema;