import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Properties } from '../../providers/providers';
/**
 * Generated class for the PropertyDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-property-detail',
  templateUrl: 'property-detail.html',
})
export class PropertyDetailPage {

  property: any;

  @ViewChild(Slides) slides: Slides;
  @ViewChild('mapCanvas') mapElement: ElementRef;
  constructor(public navCtrl: NavController, navParams: NavParams, properties: Properties) {
    this.property = navParams.get('property') || properties.defaultProperty;

  }

  ionViewDidLoad() {

      let mapEle = this.mapElement.nativeElement;

      let map = new google.maps.Map(mapEle, {
        center: {
          lat : 14.541010, 
          lng : 121.057204
        },
        zoom: 16
      });
        let infoWindow = new google.maps.InfoWindow({
          content: `<h5>Azalea</h5>`
        });

        let marker = new google.maps.Marker({
          position: {
            lat : 14.541010, 
            lng : 121.057204
          },
          map: map,
          title: 'Azalea'
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
    
      google.maps.event.addListenerOnce(map, 'idle', () => {
        mapEle.classList.add('show-map');
      });
  }

  ionViewDidLeave() {
  }

}
