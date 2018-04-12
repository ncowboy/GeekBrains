import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div className="map-marker">{text}</div>;



export default class Contacts extends React.Component {

    static defaultProps = {
        center: {lat: 55.69454338, lng: 37.5402832},
        zoom: 16
      };

      
    render() {
        return <div className="container map">
        <h2>Наш адрес:</h2>
        <p>119296, г.Москва, проспект Вернадского, 7</p>
          <GoogleMapReact
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={55.69454338}
              lng={37.5402832}
              text={'Цирк'}
            />
          </GoogleMapReact>
     </div>
      }
}
