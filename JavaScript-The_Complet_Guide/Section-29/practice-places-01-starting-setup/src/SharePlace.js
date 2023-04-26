import { Modal } from "./UI/Modal";
import { Map } from "./UI/Map";
import { getCoordsFromAddress, getAddressFromCoords } from "./Utility/Location";
import { async } from "regenerator-runtime";
class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-btn");
    this.shareBtn = document.getElementById("share-btn");
    this.shareBtn.addEventListener("click", this.sherePlaceHandler);
    locateUserBtn.addEventListener("click", this.locateUserHandler.bind(this));
    addressForm.addEventListener("submit", this.findAddressHandler.bind(this));
  }

  sherePlaceHandler() {
    const sharedLinkInputElement = document.getElementById("share-link");
    if (!navigator.clipboard) {
      sharedLinkInputElement.select();
      return;
    }
    navigator.clipboard
      .writeText(sharedLinkInputElement.value)
      .then(() => {
        alert("Copied into clipboard!");
      })
      .catch((err) => {
        console.log(err);
        sharedLinkInputElement.select();
      });
  }

  selectPlace(coordinates, address) {
    if (this.map) {
      this.map.render(coordinates);
    } else {
      this.map = new Map(coordinates);
    }
    this.shareBtn.disabled = false;
    const sharedLinkInputElement = document.getElementById("share-link");
    sharedLinkInputElement.value = `${
      location.origin
    }/my-place?address=${encodeURI(address)}&lat${coordinates.lat}&lng${
      coordinates.lng
    }`;
  }

  async locateUserHandler() {
    if (!navigator.geolocation) {
      alert("location featrue in not avilable in your browser");
      return;
    }
    const modal = new Modal(
      "loading-modal-content",
      "Loading Location -  please Weate"
    );
    modal.show();
    navigator.geolocation.getCurrentPosition(
      async (successResult) => {
        const coordinates = {
          lat: successResult.coords.latitude,
          lng: successResult.coords.longitude,
        };
        const address = await getAddressFromCoords(coordinates);
        this.selectPlace(coordinates, address);
        modal.hide();
      },
      (error) => {
        modal.hide();
        alert(
          "Could Not locate you unfortunately. Please enter an address manually"
        );
      }
    );
  }

  async findAddressHandler(event) {
    event.preventDefault();
    const address = event.target.querySelector("input").value;
    if (!address || address.trim().length === 0) {
      alert("Invalid address enterd - please try again!");
      return;
    }
    const modal = new Modal(
      "loading-modal-content",
      "Loading Location -  please Weate"
    );
    modal.show();
    try {
      const coordinates = await getCoordsFromAddress(address);
      this.selectPlace(coordinates, address);
    } catch (err) {
      alert(err.message);
    }
    modal.hide();
  }
}

const placeFinder = new PlaceFinder();