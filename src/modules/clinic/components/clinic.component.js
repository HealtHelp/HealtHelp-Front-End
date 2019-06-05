import React,{Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {APIKEY} from '../../constants/constants';
import '../../css/style.css';



class Clinic extends Component{
  
render(){
  const style = {
    width: '50%',
    height: '50%'
  }
  return (
   
   <div className="icon-clinic">  
    <div>
    <Map google={this.props.google} 
        initialCenter={{
            lat: 41.5881062 ,
            lng: -3.6846565
          }} 
          zoom={14}
          style={style}>
 
       <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

       <InfoWindow onClose={this.onInfoWindowClose}>
       <div>
          <h1>HealtHelp</h1>
       </div>
        </InfoWindow>
      </Map>
    </div>  
    </div>
  );
}
}




export default GoogleApiWrapper({
  apiKey: (APIKEY)
})(Clinic)