/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Property" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Property service manages creating instances of Property, so go ahead and rename
 * that something that fits your app as well.
 */
export class Property {

    constructor(fields: any) {
      // Quick and dirty extend/assign fields to this model
      for (const f in fields) {
        // @ts-ignore
        this[f] = fields[f];
      }
    }
  
  }
  
  export interface Property {
    [prop: string]: any;
  }
  