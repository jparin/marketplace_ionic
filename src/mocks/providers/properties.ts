import { Injectable } from '@angular/core';

import { Property } from '../../models/property';

@Injectable()
export class Properties {
  properties: Property[] = [];

  defaultProperty: any = {
    "name": "Azalea Place",
    "profilePic": "assets/img/properties/azalea.jpg",
    "about": "Modern Serenity at the heart of Cebu."
  };


  constructor() {
    let properties = [
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

    for (let property of properties) {
      this.properties.push(new Property(property));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.properties;
    }

    return this.properties.filter((property) => {
      for (let key in params) {
        let field = property[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return property;
        } else if (field == params[key]) {
          return property;
        }
      }
      return null;
    });
  }

  add(property: Property) {
    this.properties.push(property);
  }

  delete(property: Property) {
    this.properties.splice(this.properties.indexOf(property), 1);
  }
}
