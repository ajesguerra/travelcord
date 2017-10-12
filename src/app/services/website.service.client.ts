import {Injectable} from '@angular/core';

@Injectable()
export class WebsiteService {
  websites = [
    { '_id': '123', 'name': 'Facebook',    'developerId': '456', 'description': 'Lorem' },
    { '_id': '234', 'name': 'Tweeter',     'developerId': '456', 'description': 'Lorem' },
    { '_id': '456', 'name': 'Gizmodo',     'developerId': '456', 'description': 'Lorem' },
    { '_id': '890', 'name': 'Go',          'developerId': '123', 'description': 'Lorem' },
    { '_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem' },
    { '_id': '678', 'name': 'Checkers',    'developerId': '123', 'description': 'Lorem' },
    { '_id': '789', 'name': 'Chess',       'developerId': '234', 'description': 'Lorem' }
  ];
  api = {
    'createWebsite': this.createWebsite,
    'findWebsitesByUser': this.findWebsitesByUser,
    'findWebsiteById': this.findWebsiteById,
    'updateWebsite': this.updateWebsite,
    'deleteWebsite': this.deleteWebsite
  };
  createWebsite(userId, website) {
    website.developerID = userId;
    this.websites.push(website);
    // _id is given?
    // return id or website object?
  }

  findWebsitesByUser(userId) {
    const websitesByTheUser = [];
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x].developerId === userId) {
        websitesByTheUser.push(this.websites[x]);
      }
    }
    return websitesByTheUser;
  }

  findWebsiteById(websiteId) {
    const websitesByTheId = [];
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x].developerId === websiteId) {
        websitesByTheId.push(this.websites[x]);
      }
    }
    return websitesByTheId;
  }

  updateWebsite(websiteId, website)  {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        this.websites[x]._id = website.id;
        this.websites[x].name = website.name;
        this.websites[x].developerId = website.developerId;
        this.websites[x].description = website.description;
      }
    }
  }

  deleteWebsite(websiteId) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        this.websites.splice(x, 1);
      }
    }
  }
}
