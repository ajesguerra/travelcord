import {Injectable} from '@angular/core';

@Injectable()
export class PageService {
  pages = [
    { '_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem' }
  ];
  api = {
    'createPage': this.createPage,
    'findPageByWebsiteId': this.findPageByWebsiteId,
    'findPageById': this.findPageById,
    'updatePage': this.updatePage,
    'deletePage': this.deletePage
  };
  createPage(websiteId, page) {
    page.websiteID = websiteId;
    this.pages.push(page);
    return;
    // return page or something? eventually some status information if successfull or not (e.g. error).
    // generate or given _id? given
  }

  findPageByWebsiteId(websiteId) {
    const pagesByThisWebsiteId = [];
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x].websiteId === websiteId) {
        pagesByThisWebsiteId.push(this.pages[x]);
      }
    }
    return pagesByThisWebsiteId;
  }

  findPageById(pageId) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        return this.pages[x];
      }
    }
  }

  updatePage(pageId, page)  {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        this.pages[x]._id = page._id;
        this.pages[x].name = page.name;
        this.pages[x].websiteId = page.websiteId;
        this.pages[x].description = page.description;
        // don't need to do this this.pages[x] = page. database will do this in the future.
      }
    }
  }

  deletePage(pageId) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        this.pages.splice(x, 1);
      }
    }
  }
}
