let AirCheapAPI = {
    fetchAirports(){
        fetch('../fixtures/airports.json')
        .then((response) => response.json())
        .then((responseData) => {

        }).catch((error) => {

        });
    }
};

export default AirCheapAPI;