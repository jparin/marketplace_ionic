import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Azalea Place",
    "profilePic": "assets/img/properties/azalea.jpg",
    "about": "Modern Serenity at the heart of Cebu."
  };


  constructor() {
    let items = [
      {
        "name": "Azalea Place",
        "profilePic": "assets/img/properties/azalea.jpg",
        "about": "Modern Serenity at the heart of Cebu."
      },
      {
        "name": "Galleria Residences",
        "profilePic": "assets/img/properties/galleria-residence.jpg",
        "about": "Amenities beyond compare, life above the ordinary."
      },
      {
        "name": "Magnolia Residences",
        "profilePic": "assets/img/properties/magnolia-residence.jpg",
        "about": "Creating new dimensions in your neighborhood."
      },
      {
        "name": "The Radiance Manila Bay",
        "profilePic": "assets/img/properties/Radiance-Manila-Bay.jpg",
        "about": "A life of wellness amidst the magnificent Manila bay."
      },
      {
        "name": "The Sapphire Bloc",
        "profilePic": "assets/img/properties/Sapphire-Bloc.jpg",
        "about": "Make your life your own by picking the unique over the popular."
      },
      {
        "name": "The Trion Towers",
        "profilePic": "assets/img/properties/The-Trion-Towers.jpg",
        "about": "The fastest growing commercial and business districts in Taguig City."
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
