// Project // Select & Share a Place App (using Google Maps)
import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY = "process.env.TS_GOOGLE_API_KEY";
declare var google: any;
type GoogleGeocodingResponse = {
    results: { geometry: { location: { lat: number, lng: number } } }[];
    status: "OK" | "ZERO_RESULTS" | "OVER_DAILY_LIMIT"
};

function searchAddressHandler(event: Event) {
    event.preventDefault();
    const enteredAddresss = addressInput.value;
    // Google API
    axios.get<GoogleGeocodingResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${
        encodeURI(enteredAddresss)}&key=${GOOGLE_API_KEY}`)
    .then(res => {
        if (res.data.status !== "OK") { // If status is NOT OK
            throw new Error(res.data.status === "OVER_DAILY_LIMIT" ?
                "API key reached daily limit. Please try again tomorrow" :
                "Could not fetch location!"
            )
        }
        const coordinates = res.data.results[0].geometry.location;
        const map = new google.maps.Map(document.getElementById("map"), {
            center: coordinates,
            zoom: 16
        });

        new google.maps.Marker({ position: coordinates, map: map });
    })
    .catch(err => {
        console.log(err);
    });
}

form.addEventListener("submit", searchAddressHandler);