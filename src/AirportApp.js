import React, { Component } from 'react';
import { Container } from 'flüx/utils';
import Autosuggest from 'react-auto-suggest';
import airportStore from './store/AirportStore';
import AirportActionCreators from './AirportActionCreators';
import * as logo from './logo.svg';


class AirportApp extends Component {
  
    componentDidMount(){
        AirportActionCreators.fetchAairports();
    }

    render() {
        return (
            <div>
                <header className="header-brand">
                    <img src={logo} height="35" />
                    <p>Check discount prices and pay using your Aircheap Points</p>
                    <div className="header-route">
                        <Autosuggest 
                            id='origin'
                            inputAttributes={{ placeholder: 'From' }}
                        />
                        <Autosuggest 
                            id='destination'
                            inputAttributes={{ placeholder: 'To' }}
                        />
                    </div>
                </header>                
            </div>
        );
    }
}

/* AirportApp.getStores = () => ([ airportStore ]);
AirportApp.caalculateState = (prevState) => ({
    airports: AirportStore.getState()
});

const AppContainer = Container.create(AirportApp); */

export default AirportApp;