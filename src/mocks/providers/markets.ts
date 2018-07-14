import { Injectable } from '@angular/core';

import { Market } from '../../models/market';

@Injectable()
export class Markets {
  markets: Market[] = [];

  defaultMarket: any = {
    "name": "CET/BTC",
    "last_price": "0.000001",
    "dollar": 1,
    "changes_24" : 23
  };


  constructor() {
    let markets = [
      {
        "market_id" : 1,
        "name": "CET/BTC",
        "last_price": "0.000001",
        "dollar": 1,
        "changes_24" : 23,
        "type" : "currency"
      },
      {
        "market_id" : 2,
        "name": "CET/NEM",
        "last_price": "0.000001",
        "dollar": 1,
        "changes_24" : 23,
        "type" : "currency"
      },
      {
        "market_id" : 3,
        "name": "CET/ETH",
        "last_price": "0.000001",
        "dollar": 1,
        "changes_24" : 23,
        "type" : "currency"
      },
      {
        "market_id" : 4,
        "name": "AZALEA CEBU/USD",
        "last_price" : 150,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Modern Serenity at the heart of Cebu.",
        "price_per_slot": 1000000,
        "city" : "Taguig",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "USD",
        "thumbnail" : "assets/img/properties/thumbnail/azalea.jpg"
      },
      {
        "market_id" : 5,
        "name": "Megaworld Avini/USD",
        "last_price" : 120,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Modern Serenity at the heart of Cebu.",
        "price_per_slot": 1000000,
        "city" : "Taguig",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "USD",
        "thumbnail" : "assets/img/properties/thumbnail/megaworld.jpg"
      },
      {
        "market_id" : 6,
        "name": "Admiral Baysuites/USD",
        "last_price" : 80,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "2138 Roxas Boulevard, Malate Malate, Manila",
        "price_per_slot": 1000000,
        "city" : "Manila",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "USD",
        "thumbnail" : "assets/img/properties/thumbnail/admiral.jpg"
      },
      {
        "market_id" : 7,
        "name": "Clairemont Hills/USD",
        "last_price" : 200,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Alfonso XIII St., Brgy. Corazon De Jesus Corazon de Jesus, San Juan",
        "price_per_slot": 1000000,
        "city" : "San Juan City",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "USD",
        "thumbnail" : "assets/img/properties/thumbnail/clairemont.jpg"
      },
      {
        "market_id" : 8,
        "name": "Huang Hsiang Development Corp/USD",
        "last_price" : 120,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Malate Manila",
        "price_per_slot": 60000,
        "city" : "Malate, Manila",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "USD",
        "thumbnail" : "assets/img/properties/thumbnail/huang.jpg"
      },
      {
        "market_id" : 9,
        "name": "Acqua Livingstone/USD",
        "last_price" : 120,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Hulo, Mandaluyong",
        "price_per_slot": 4000000,
        "city" : "Mandaluyong",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "USD",
        "thumbnail" : "assets/img/properties/thumbnail/acqua.jpg"
      },
      {
        "market_id" : 10,
        "name": "Mirea Residences/USD",
        "last_price" : 120,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Santolan, Pasig",
        "price_per_slot": 7000000,
        "city" : "Pasig",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "USD",
        "thumbnail" : "assets/img/properties/thumbnail/mirea.jpg"
      },
      {
        "market_id" : 11,
        "name": "AZALEA CEBU/PHP",
        "last_price" : 150,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Modern Serenity at the heart of Cebu.",
        "price_per_slot": 1000000,
        "city" : "Taguig",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "PHP",
        "thumbnail" : "assets/img/properties/thumbnail/azalea.jpg"
      },
      {
        "market_id" : 12,
        "name": "Megaworld Avini/PHP",
        "last_price" : 120,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Modern Serenity at the heart of Cebu.",
        "price_per_slot": 1000000,
        "city" : "Taguig",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "PHP",
        "thumbnail" : "assets/img/properties/thumbnail/megaworld.jpg"
      },
      {
        "market_id" : 13,
        "name": "Admiral Baysuites/PHP",
        "last_price" : 80,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "2138 Roxas Boulevard, Malate Malate, Manila",
        "price_per_slot": 1000000,
        "city" : "Manila",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "PHP",
        "thumbnail" : "assets/img/properties/thumbnail/admiral.jpg"
      },
      {
        "market_id" : 14,
        "name": "Clairemont Hills/PHP",
        "last_price" : 200,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Alfonso XIII St., Brgy. Corazon De Jesus Corazon de Jesus, San Juan",
        "price_per_slot": 1000000,
        "city" : "San Juan City",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "PHP",
        "thumbnail" : "assets/img/properties/thumbnail/clairemont.jpg"
      },
      {
        "market_id" : 15,
        "name": "Huang Hsiang Development Corp/PHP",
        "last_price" : 120,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Malate Manila",
        "price_per_slot": 60000,
        "city" : "Malate, Manila",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "PHP",
        "thumbnail" : "assets/img/properties/thumbnail/huang.jpg"
      },
      {
        "market_id" : 16,
        "name": "Acqua Livingstone/PHP",
        "last_price" : 120,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Hulo, Mandaluyong",
        "price_per_slot": 4000000,
        "city" : "Mandaluyong",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "PHP",
        "thumbnail" : "assets/img/properties/thumbnail/acqua.jpg"
      },
      {
        "market_id" : 17,
        "name": "Mirea Residences/PHP",
        "last_price" : 120,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Santolan, Pasig",
        "price_per_slot": 7000000,
        "city" : "Pasig",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "PHP",
        "thumbnail" : "assets/img/properties/thumbnail/mirea.jpg"
      },
      {
        "market_id" : 18,
        "name": "AZALEA CEBU/CET",
        "last_price" : 150,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Modern Serenity at the heart of Cebu.",
        "price_per_slot": 1000000,
        "city" : "Taguig",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "CET",
        "thumbnail" : "assets/img/properties/thumbnail/azalea.jpg"
      },
      {
        "market_id" : 19,
        "name": "Megaworld Avini/CET",
        "last_price" : 120,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Modern Serenity at the heart of Cebu.",
        "price_per_slot": 1000000,
        "city" : "Taguig",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "CET",
        "thumbnail" : "assets/img/properties/thumbnail/megaworld.jpg"
      },
      {
        "market_id" : 20,
        "name": "Admiral Baysuites/CET",
        "last_price" : 80,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "2138 Roxas Boulevard, Malate Malate, Manila",
        "price_per_slot": 1000000,
        "city" : "Manila",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "CET",
        "thumbnail" : "assets/img/properties/thumbnail/admiral.jpg"
      },
      {
        "market_id" : 21,
        "name": "Clairemont Hills/CET",
        "last_price" : 200,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Alfonso XIII St., Brgy. Corazon De Jesus Corazon de Jesus, San Juan",
        "price_per_slot": 1000000,
        "city" : "San Juan City",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "CET",
        "thumbnail" : "assets/img/properties/thumbnail/clairemont.jpg"
      },
      {
        "market_id" : 22,
        "name": "Huang Hsiang Development Corp/CET",
        "last_price" : 120,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Malate Manila",
        "price_per_slot": 60000,
        "city" : "Malate, Manila",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "CET",
        "thumbnail" : "assets/img/properties/thumbnail/huang.jpg"
      },
      {
        "market_id" : 23,
        "name": "Acqua Livingstone/CET",
        "last_price" : 120,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Hulo, Mandaluyong",
        "price_per_slot": 4000000,
        "city" : "Mandaluyong",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "CET",
        "thumbnail" : "assets/img/properties/thumbnail/acqua.jpg"
      },
      {
        "market_id" : 24,
        "name": "Mirea Residences/CET",
        "last_price" : 120,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Santolan, Pasig",
        "price_per_slot": 7000000,
        "city" : "Pasig",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "CET",
        "thumbnail" : "assets/img/properties/thumbnail/mirea.jpg"
      },
      {
        "market_id" : 25,
        "name": "AZALEA CEBU/BTC",
        "last_price" : 150,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Modern Serenity at the heart of Cebu.",
        "price_per_slot": 1000000,
        "city" : "Taguig",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "BTC",
        "thumbnail" : "assets/img/properties/thumbnail/azalea.jpg"
      },
      {
        "market_id" : 26,
        "name": "Megaworld Avini/BTC",
        "last_price" : 120,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Modern Serenity at the heart of Cebu.",
        "price_per_slot": 1000000,
        "city" : "Taguig",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "BTC",
        "thumbnail" : "assets/img/properties/thumbnail/megaworld.jpg"
      },
      {
        "market_id" : 27,
        "name": "Admiral Baysuites/BTC",
        "last_price" : 80,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "2138 Roxas Boulevard, Malate Malate, Manila",
        "price_per_slot": 1000000,
        "city" : "Manila",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "BTC",
        "thumbnail" : "assets/img/properties/thumbnail/admiral.jpg"
      },
      {
        "market_id" : 28,
        "name": "Clairemont Hills/BTC",
        "last_price" : 200,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Alfonso XIII St., Brgy. Corazon De Jesus Corazon de Jesus, San Juan",
        "price_per_slot": 1000000,
        "city" : "San Juan City",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "BTC",
        "thumbnail" : "assets/img/properties/thumbnail/clairemont.jpg"
      },
      {
        "market_id" : 29,
        "name": "Huang Hsiang Development Corp/BTC",
        "last_price" : 120,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Malate Manila",
        "price_per_slot": 60000,
        "city" : "Malate, Manila",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "BTC",
        "thumbnail" : "assets/img/properties/thumbnail/huang.jpg"
      },
      {
        "market_id" : 30,
        "name": "Acqua Livingstone/BTC",
        "last_price" : 120,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Hulo, Mandaluyong",
        "price_per_slot": 4000000,
        "city" : "Mandaluyong",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "BTC",
        "thumbnail" : "assets/img/properties/thumbnail/acqua.jpg"
      },
      {
        "market_id" : 31,
        "name": "Mirea Residences/BTC",
        "last_price" : 120,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Santolan, Pasig",
        "price_per_slot": 7000000,
        "city" : "Pasig",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "BTC",
        "thumbnail" : "assets/img/properties/thumbnail/mirea.jpg"
      },
      {
        "market_id" : 32,
        "name": "AZALEA CEBU/ETH",
        "last_price" : 150,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Modern Serenity at the heart of Cebu.",
        "price_per_slot": 1000000,
        "city" : "Taguig",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "ETH",
        "thumbnail" : "assets/img/properties/thumbnail/azalea.jpg"
      },
      {
        "market_id" : 33,
        "name": "Megaworld Avini/ETH",
        "last_price" : 120,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Modern Serenity at the heart of Cebu.",
        "price_per_slot": 1000000,
        "city" : "Taguig",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "ETH",
        "thumbnail" : "assets/img/properties/thumbnail/megaworld.jpg"
      },
      {
        "market_id" : 34,
        "name": "Admiral Baysuites/ETH",
        "last_price" : 80,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "2138 Roxas Boulevard, Malate Malate, Manila",
        "price_per_slot": 1000000,
        "city" : "Manila",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "ETH",
        "thumbnail" : "assets/img/properties/thumbnail/admiral.jpg"
      },
      {
        "market_id" : 35,
        "name": "Clairemont Hills/ETH",
        "last_price" : 200,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Alfonso XIII St., Brgy. Corazon De Jesus Corazon de Jesus, San Juan",
        "price_per_slot": 1000000,
        "city" : "San Juan City",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "ETH",
        "thumbnail" : "assets/img/properties/thumbnail/clairemont.jpg"
      },
      {
        "market_id" : 36,
        "name": "Huang Hsiang Development Corp/ETH",
        "last_price" : 120,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Malate Manila",
        "price_per_slot": 60000,
        "city" : "Malate, Manila",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "ETH",
        "thumbnail" : "assets/img/properties/thumbnail/huang.jpg"
      },
      {
        "market_id" : 37,
        "name": "Acqua Livingstone/ETH",
        "last_price" : 120,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Hulo, Mandaluyong",
        "price_per_slot": 4000000,
        "city" : "Mandaluyong",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "ETH",
        "thumbnail" : "assets/img/properties/thumbnail/acqua.jpg"
      },
      {
        "market_id" : 38,
        "name": "Mirea Residences/ETH",
        "last_price" : 120,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Santolan, Pasig",
        "price_per_slot": 7000000,
        "city" : "Pasig",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "ETH",
        "thumbnail" : "assets/img/properties/thumbnail/mirea.jpg"
      },
      {
        "market_id" : 39,
        "name": "AZALEA CEBU/XEM",
        "last_price" : 150,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Modern Serenity at the heart of Cebu.",
        "price_per_slot": 1000000,
        "city" : "Taguig",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "XEM",
        "thumbnail" : "assets/img/properties/thumbnail/azalea.jpg"
      },
      {
        "market_id" : 40,
        "name": "Megaworld Avini/XEM",
        "last_price" : 120,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Modern Serenity at the heart of Cebu.",
        "price_per_slot": 1000000,
        "city" : "Taguig",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "XEM",
        "thumbnail" : "assets/img/properties/thumbnail/megaworld.jpg"
      },
      {
        "market_id" : 41,
        "name": "Admiral Baysuites/XEM",
        "last_price" : 80,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "2138 Roxas Boulevard, Malate Malate, Manila",
        "price_per_slot": 1000000,
        "city" : "Manila",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "XEM",
        "thumbnail" : "assets/img/properties/thumbnail/admiral.jpg"
      },
      {
        "market_id" : 42,
        "name": "Clairemont Hills/XEM",
        "last_price" : 200,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Alfonso XIII St., Brgy. Corazon De Jesus Corazon de Jesus, San Juan",
        "price_per_slot": 1000000,
        "city" : "San Juan City",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "XEM",
        "thumbnail" : "assets/img/properties/thumbnail/clairemont.jpg"
      },
      {
        "market_id" : 43,
        "name": "Huang Hsiang Development Corp/XEM",
        "last_price" : 120,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Malate Manila",
        "price_per_slot": 60000,
        "city" : "Malate, Manila",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "XEM",
        "thumbnail" : "assets/img/properties/thumbnail/huang.jpg"
      },
      {
        "market_id" : 44,
        "name": "Acqua Livingstone/XEM",
        "last_price" : 120,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Hulo, Mandaluyong",
        "price_per_slot": 4000000,
        "city" : "Mandaluyong",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "XEM",
        "thumbnail" : "assets/img/properties/thumbnail/acqua.jpg"
      },
      {
        "market_id" : 45,
        "name": "Mirea Residences/XEM",
        "last_price" : 120,
        "dollar": 0.2,
        "changes_24" : 1,
        "location": "Santolan, Pasig",
        "price_per_slot": 7000000,
        "city" : "Pasig",
        "available_slots" : 4,
        "participant" : 2,
        "map" : "4.541482, 121.057204",
        "type" : "property",
        "base_currency" : "XEM",
        "thumbnail" : "assets/img/properties/thumbnail/mirea.jpg"
      }
    ];

    for (let market of markets) {
      this.markets.push(new Market(market));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.markets;
    }

    return this.markets.filter((market) => {
      for (let key in params) {
        let field = market[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return market;
        } else if (field == params[key]) {
          return market;
        }
        // if (field == params[key]) {
        //   return market;
        // }
      }
      return null;
    });
  }

  getMarketWithSelectedCurrency(params?: any, operator?:any) {
    if (!params) {
      return this.markets;
    }

    return this.markets.filter((market) => {
      for (let key in params) {
        let field = market[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0 && field == params["base_currency"]) {
          return market;
        } else if (field == params[key]) {
          return market;
        }
 
      }
      return null;
    });
  }

  add(market: Market) {
    this.markets.push(market);
  }

  delete(market: Market) {
    this.markets.splice(this.markets.indexOf(market), 1);
  }
}
