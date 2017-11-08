var PageSchema = require("./page.schema.server");
var mongoose = require('mongoose');
var PageModel = mongoose.model("PageModel", PageSchema);
var WebsiteModel = require('../website/website.model.server');

PageModel.createPage = createPage;
PageModel.findAllPagesForWebsite = findAllPagesForWebsite;
PageModel.findPageById = findPageById;
PageModel.updatePage = updatePage;
PageModel.deletePage = deletePage;

module.exports = PageModel;

function createPage(websiteId, page) {
  var newPage = null;
  return PageModel.create(page)
    .then(function (page) {
      newPage = page;
      WebsiteModel.findWebsiteById(websiteId)
        .then(function (website) {
          website.pages.push(newPage);
          return website.save();
        });
    });
}

function findAllPagesForWebsite(websiteId) {
  return PageModel.find({websiteId: websiteId})
    .populate('websiteId')
    .exec();
}

function findPageById(pageId) {
  return PageModel.findOne({_id: pageId});
}

function updatePage(pageId, page) {
  return PageModel.update({_id: pageId}, page);
}

function deletePage(pageId) {
  return PageModel.deleteOne({_id: pageId});
}