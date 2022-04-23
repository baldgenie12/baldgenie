export const getLocationHnadler = () => {

    navigator.geolocation.getCurrentPosition(position => {
        fetchData(position.coords.latitude, position.coords.longitude)
    }, showError)


    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                setlocationErrorMsg("User denied the request for Geolocation.")
                break;
            case error.POSITION_UNAVAILABLE:
                setlocationErrorMsg("Location information is unavailable.")

                break;
            case error.TIMEOUT:
                setlocationErrorMsg("The request to get user location timed out.")

                break;
            case error.UNKNOWN_ERROR:
                setlocationErrorMsg("An unknown error occurred.")

                break;
            default:
                setlocationErrorMsg("An unknown error occurred.")


        }
    }
    async function fetchData(latitude, longitude) {

        if (location) {
            return
        }



        if (!location) {

            var location = {}
            try {
                const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=true&key=AIzaSyBq4_UrU1zgmlP2pmINbfbpu-O7MfY7F1c`)
                // const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=40.20197127507498,-100.66331257139588&sensor=true&key=AIzaSyBq4_UrU1zgmlP2pmINbfbpu-O7MfY7F1c`)
                location = await response.json()
                console.log(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=true&key=AIzaSyBq4_UrU1zgmlP2pmINbfbpu-O7MfY7F1c`);


                const part = location.plus_code.compound_code.trim()
                const index = part.indexOf(" ")
                const part2 = part.substring(index, part.length)

              return part2

            } catch (error) {
                locationErrorMsg ? alert(locationErrorMsg) : alert(error)

            }
            localStorage.setItem("location", JSON.stringify(location))
        }


    }
}
