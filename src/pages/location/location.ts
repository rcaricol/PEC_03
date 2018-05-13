import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';


@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  private coords = {lat: 0.0, long: 0.0, geocode: "" };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
    this.getLocation();
    this.getReverseGeocode();
    //this.getForwardGeocode();
  }

  getLocation(){
    this.geolocation.getCurrentPosition().then((res) => {
      console.log(res);
      this.coords.lat = res.coords.latitude;
      this.coords.long = res.coords.longitude;
      this.getReverseGeocode();
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  getReverseGeocode(){
    this.nativeGeocoder.reverseGeocode(this.coords.lat, this.coords.long)
    .then((result: NativeGeocoderReverseResult) =>
      this.coords.geocode = JSON.stringify(result))
    .catch((error: any) => this.coords.geocode = error);
  }

  getForwardGeocode(){
    this.nativeGeocoder.forwardGeocode('Berlin')
      .then((coordinates: NativeGeocoderForwardResult) => console.log('The coordinates are latitude=' + coordinates.latitude + ' and longitude=' + coordinates.longitude))
      .catch((error: any) => console.log(error));
  }

  latitude(){
    return this.coords.lat;
  }

  longitude(){
    return this.coords.long;
  }

  address(){
    return this.coords.geocode;
  }

}
