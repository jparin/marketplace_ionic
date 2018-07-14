import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
// import {StockChart} from 'angular-highcharts';
import * as highstock from 'highcharts/highstock';
import { Market } from '../../models/market';
import { Markets } from '../../providers/providers';
import { Favorite } from '../../models/favorite';
import { Favorites } from '../../providers/providers';
/**
 * Generated class for the TradePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trade',
  templateUrl: 'trade.html',
})
export class TradePage {
    market: Market;
    favorite : Favorite;
    listed_as_favorite = false;

    constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient, public favorites:Favorites, public markets:Markets, public viewCtrl: ViewController, public platform: Platform) {
    this.market = this.navParams.get('market');
    if(this.market === undefined){
        this.market = this.markets.query()[0];
    }

    this.favorite = this.favorites.query({market_id: this.market.market_id});
    this.listed_as_favorite = this.favorite.length > 0?true:false;
    console.log(this.listed_as_favorite);
    

    this.platform.registerBackButtonAction(()=> {
        return false;
      });
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TradePage');

    highstock.theme = {
        colors: ['#95989A', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
            '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
        chart: {
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                stops: [
                    [0, '#16233E'],
                    [1, '#16233E']
                ]
            },
            style: {
                fontFamily: '\'Unica One\', sans-serif'
            },
            plotBorderColor: '#95989A'
        },
        title: {
            style: {
                color: '#E0E0E3',
                textTransform: 'uppercase',
                fontSize: '20px'
            }
        },
        subtitle: {
            style: {
                color: '#E0E0E3',
                textTransform: 'uppercase'
            }
        },
        xAxis: {
            gridLineColor: '#192641',
            labels: {
                style: {
                    color: '#E0E0E3'
                }
            },
            lineColor: '#192641',
            minorGridLineColor: '#192641',
            tickColor: '#707073',
            title: {
                style: {
                    color: '#A0A0A3'
    
                }
            }
        },
        yAxis: {
            gridLineColor: '#707073',
            labels: {
                style: {
                    color: '#E0E0E3'
                }
            },
            lineColor: '#707073',
            minorGridLineColor: '#505053',
            tickColor: '#707073',
            title: {
                style: {
                    color: '#A0A0A3'
                }
            }
        },
        tooltip: {
            backgroundColor: 'rgba(51, 81, 139, 0.85)',
            style: {
                color: '#F0F0F0'
            }
        },
        plotOptions: {
            series: {
                dataLabels: {
                    color: '#95989A'
                },
                marker: {
                    lineColor: '#333'
                }
            },
            boxplot: {
                fillColor: '#95989A'
            },
            candlestick: {
                lineColor: 'white'
            },
            errorbar: {
                color: 'white'
            }
        },
        legend: {
            itemStyle: {
                color: '#E0E0E3'
            },
            itemHoverStyle: {
                color: '#FFF'
            },
            itemHiddenStyle: {
                color: '#606063'
            }
        },
        credits: {
            style: {
                color: '#666'
            }
        },
        labels: {
            style: {
                color: '#707073'
            }
        },
    
        drilldown: {
            activeAxisLabelStyle: {
                color: '#F0F0F3'
            },
            activeDataLabelStyle: {
                color: '#F0F0F3'
            }
        },
    
        navigation: {
            buttonOptions: {
                symbolStroke: '#DDDDDD',
                theme: {
                    fill: '#33518B'
                }
            }
        },
    
        // scroll charts
        rangeSelector: {
            buttonTheme: {
                fill: '#33518B',
                stroke: '#000000',
                style: {
                    color: '#CCC'
                },
                states: {
                    hover: {
                        fill: '#2699FB',
                        stroke: '#2699FB',
                        style: {
                            color: 'white'
                        }
                    },
                    select: {
                        fill: '#2699FB',
                        stroke: '#2699FB',
                        style: {
                            color: 'white'
                        }
                    }
                }
            },
            inputBoxBorderColor: '#505053',
            inputStyle: {
                backgroundColor: '#33518B',
                color: 'silver'
            },
            labelStyle: {
                color: 'silver'
            }
        },
    
        navigator: {
            handles: {
                backgroundColor: '#33518B',
                borderColor: '#AAA'
            },
            outlineColor: '#CCC',
            maskFill: 'rgba(255,255,255,0.1)',
            series: {
                color: '#7798BF',
                lineColor: '#A6C7ED'
            },
            xAxis: {
                gridLineColor: '#505053'
            }
        },
    
        scrollbar: {
            barBackgroundColor: '#808083',
            barBorderColor: '#808083',
            buttonArrowColor: '#CCC',
            buttonBackgroundColor: '#606063',
            buttonBorderColor: '#606063',
            rifleColor: '#FFF',
            trackBackgroundColor: '#404043',
            trackBorderColor: '#404043'
        },
    
        // special colors for some of the
        legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
        background2: '#505053',
        dataLabelsColor: '#B0B0B3',
        textColor: '#C0C0C0',
        contrastTextColor: '#F0F0F3',
        maskColor: 'rgba(255,255,255,0.3)'
    };
    
    // Apply the theme
    highstock.setOptions(highstock.theme);
    

    highstock.stockChart('container', {
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
        text: ''
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
                   

    viewPropertyDetails(){
        this.navCtrl.push("PropertyDetailPage");
    }

    viewProfile(id){
    this.navCtrl.push("ProfilePage", {userId : id});
    }

    favoriteButton(market){
        
        if(this.listed_as_favorite === true){
            this.favorites.delete(this.favorite)
            this.listed_as_favorite = false;
        }else {
            this.favorites.add(new Favorite(market));
            this.listed_as_favorite = true;
        }
        
    }

}
