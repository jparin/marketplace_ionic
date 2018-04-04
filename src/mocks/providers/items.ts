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
        "about": "Modern Serenity at the heart of Cebu.",
        "price_per_slot": 1000000,
        "city" : "Taguig",
        "available_slots" : 4,
        "participant" : 2
      },
      {
        "name": "Galleria Residences",
        "profilePic": "assets/img/properties/galleria-residence.jpg",
        "about": "Amenities beyond compare, life above the ordinary.",
        "price_per_slot": 2000000,
        "city" : "Taguig",
        "available_slots" : 4,
        "participant" : 3
      },
      {
        "name": "Magnolia Residences",
        "profilePic": "assets/img/properties/magnolia-residence.jpg",
        "about": "Creating new dimensions in your neighborhood.",
        "price_per_slot": 3000000,
        "city" : "Las Pinas",
        "available_slots" : 4,
        "participant" : 6
      },
      {
        "name": "The Radiance Manila Bay",
        "profilePic": "assets/img/properties/Radiance-Manila-Bay.jpg",
        "about": "A life of wellness amidst the magnificent Manila bay.",
        "price_per_slot": 4000000,
        "city" : "Pasay",
        "available_slots" : 4,
        "participant" : 10
      },
      {
        "name": "The Sapphire Bloc",
        "profilePic": "assets/img/properties/Sapphire-Bloc.jpg",
        "about": "Make your life your own by picking the unique over the popular.",
        "price_per_slot": 5000000,
        "city" : "Tagaytay",
        "available_slot" : 4,
        "participant" : 10
      },
      {
        "name": "The Trion Towers",
        "profilePic": "assets/img/properties/The-Trion-Towers.jpg",
        "about": "The fastest growing commercial and business districts in Taguig City.",
        "price_per_slot_per_slot": 6000000,
        "city" : "Taguig",
        "available_slots" : 4,
        "participant" : 10
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
