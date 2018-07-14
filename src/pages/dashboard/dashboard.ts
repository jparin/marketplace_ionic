import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as HighCharts from 'highcharts/highstock';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
    current_page
    intervalS = undefined;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  
  }
  
  highchart = null;
  ionViewDidLoad() {



   
   this.highchart = HighCharts.stockChart('container', {
    chart: {
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = Math.round(Math.random() * 100);
                    series.addPoint([x, y], true, true);
                }, 1000);
            }
        }
    },
    rangeSelector: {
        selected: 1
    },

    title: {
        text: 'CET Market Cap'
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'AAPL',
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -999; i <= 0; i += 1) {
                data.push([
                    time + i * 1000,
                    Math.round(Math.random() * 100)
                ]);
            }
            return data;
        }()),
        tooltip: {
            valueDecimals: 2
        }
    }]
    });
  }

  
  
}
