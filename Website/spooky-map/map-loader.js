/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
async function initMap() {

  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const map = new Map(document.getElementById("map"), {
    center: { lat: 35.853645, lng: 14.532363 }, // Declare Map Position
    zoom: 17, // Zoom Of Map Position
    mapId: "7324be5578bf2744", // Styling on google cloud
    disableDefaultUI: true, // Disable the menu which lets you pick various display modes
    mapTypeControl: true, // Re-enable a custom menu
    mapTypeControlOptions : {
        mapTypeIds : ['terrain'] // Menu consits of Terrain view option as a preference option instead of the designed style
    }
  });

  // Creation of variables and pointing created images to them. In this case, spooky spots & mystery spot
  const pumpkinImg = document.createElement("img");
  const pumpkinImg2 = document.createElement("img");
  const pumpkinImg3 = document.createElement("img");
  const pumpkinImg4 = document.createElement("img");
  const pumpkinImg5 = document.createElement("img");
  const pumpkinImg6 = document.createElement("img");
  const pumpkinImg7 = document.createElement("img");
  const pumpkinImg8 = document.createElement("img");
  const pumpkinImg9 = document.createElement("img");
  const pumpkinImg10 = document.createElement("img");
  const pumpkinImg11 = document.createElement("img");
  const pumpkinImg12 = document.createElement("img");
  const pumpkinImg13 = document.createElement("img");
  const pumpkinImg14 = document.createElement("img");
  const pumpkinImg15 = document.createElement("img");
  const pumpkinImg16 = document.createElement("img");
  const pumpkinImg17 = document.createElement("img");
  const pumpkinImg18 = document.createElement("img");
  const pumpkinImg19 = document.createElement("img");
  const pumpkinImg20 = document.createElement("img");
  const pumpkinImg21 = document.createElement("img");
  const pumpkinImg22 = document.createElement("img");
  const mysteryImg = document.createElement("img");

  // Assigning image sources to the created variables

  pumpkinImg.src = "images/pumpkin.png";
  pumpkinImg2.src = "images/pumpkin.png";
  pumpkinImg3.src = "images/pumpkin.png";
  pumpkinImg4.src = "images/pumpkin.png";
  pumpkinImg5.src = "images/pumpkin.png";
  pumpkinImg6.src = "images/pumpkin.png";
  pumpkinImg7.src = "images/pumpkin.png";
  pumpkinImg8.src = "images/pumpkin.png";
  pumpkinImg9.src = "images/pumpkin.png";
  pumpkinImg10.src = "images/pumpkin.png";
  pumpkinImg11.src = "images/pumpkin.png";
  pumpkinImg12.src = "images/pumpkin.png";
  pumpkinImg13.src = "images/pumpkin.png";
  pumpkinImg14.src = "images/pumpkin.png";
  pumpkinImg15.src = "images/pumpkin.png";
  pumpkinImg16.src = "images/pumpkin.png";
  pumpkinImg17.src = "images/pumpkin.png";
  pumpkinImg18.src = "images/pumpkin.png";
  pumpkinImg19.src = "images/pumpkin.png";
  pumpkinImg20.src = "images/pumpkin.png";
  pumpkinImg21.src = "images/pumpkin.png";
  pumpkinImg22.src = "images/pumpkin.png";
  mysteryImg.src = "images/mystery.png";

  // Actual creation of the markers, indicating their location as well as the image to use

  const pumpkinMarkerView = new AdvancedMarkerElement({
    map,
    position: { lat: 35.852845, lng: 14.532108 },
    content: pumpkinImg,
    title: "Spooky Spot [Triq Marsaxlokk]",
  });

  const pumpkinMarkerView2 = new AdvancedMarkerElement({
    map,
    position: { lat: 35.852540, lng: 14.531946 },
    content: pumpkinImg2,
    title: "Spooky Spot 2 [Triq Marsaxlokk]",
  });

  const pumpkinMarkerView3 = new AdvancedMarkerElement({
    map,
    position: { lat: 35.85182485978629, lng: 14.531611036843223 },
    content: pumpkinImg3,
    title: "Spooky Spot 3 [S Pietru]",
  });

  const pumpkinMarkerView4 = new AdvancedMarkerElement({
    map,
    position: { lat: 35.852034, lng: 14.530714 },
    content: pumpkinImg4,
    title: "Spooky Spot 4 [Triq Santa Marija]",
  });

  const pumpkinMarkerView5 = new AdvancedMarkerElement({
    map,
    position: { lat: 35.852844, lng: 14.531581 },
    content: pumpkinImg5,
    title: "Spooky Spot 5 [Triq Santa Marija]",
  });

  const pumpkinMarkerView6 = new AdvancedMarkerElement({
    map,
    position: { lat: 35.852458, lng: 14.533029 },
    content: pumpkinImg6,
    title: "Spooky Spot 6 [Xejba]",
  });

  const pumpkinMarkerView7 = new AdvancedMarkerElement({
    map,
    position: { lat: 35.853033, lng: 14.533012 },
    content: pumpkinImg7,
    title: "Spooky Spot 7 [Santa Lucija]",
  });

  const pumpkinMarkerView8 = new AdvancedMarkerElement({
    map,
    position: { lat: 35.853843, lng: 14.532616 },
    content: pumpkinImg8,
    title: "Spooky Spot 8 [Santa Marija]",
  });

  const pumpkinMarkerView9 = new AdvancedMarkerElement({
    map,
    position: { lat: 35.855185627314235, lng: 14.532496777604367 },
    content: pumpkinImg9,
    title: "Spooky Spot 9 [Gwiedi]",
  });

  const pumpkinMarkerView10 = new AdvancedMarkerElement({
    map,
    position: { lat: 35.855507876942205, lng: 14.532008147431783 },
    content: pumpkinImg10,
    title: "Spooky Spot 10 [L-Ispirtu s-Santu]",
  });

  const pumpkinMarkerView11 = new AdvancedMarkerElement({
    map,
    position: { lat: 35.852583, lng: 14.532371 },
    content: pumpkinImg11,
    title: "Spooky Spot 11 [Xejba]",
  });

  const pumpkinMarkerView12 = new AdvancedMarkerElement({
    map,
    position: { lat: 35.85271773930295, lng: 14.532725457409558 },
    content: pumpkinImg12,
    title: "Spooky Spot 12 [S. Cirillu]",
  });

  const pumpkinMarkerView13 = new AdvancedMarkerElement({
    map,
    position: { lat: 35.8536389, lng: 14.5333333 },
    content: pumpkinImg13,
    title: "Spooky Spot 13 [Triq Sant' Emidju]",
  });

  const pumpkinMarkerView14 = new AdvancedMarkerElement({
    map,
    position: { lat: 35.8543889, lng: 14.5337778 },
    content: pumpkinImg14,
    title: "Spooky Spot 14 [Triq San Guzepp]",
  });

  const pumpkinMarkerView15 = new AdvancedMarkerElement({
    map,
    position: { lat: 35.8536944, lng: 14.5358611 },
    content: pumpkinImg15,
    title: "Spooky Spot 15 [Triq il-Kantur]",
  });

  const pumpkinMarkerView16 = new AdvancedMarkerElement({
    map,
    position: { lat: 35.8551944, lng: 14.5379444 },
    content: pumpkinImg16,
    title: "Spooky Spot 16 [Triq L-Isqof Emmanuel Galea]",
  });

  const pumpkinMarkerView17 = new AdvancedMarkerElement({
    map,
    position: { lat: 35.8556667, lng: 14.5385278 },
    content: pumpkinImg17,
    title: "Spooky Spot 17 [Triq L-Isqof Emmanuel Galea]",
  });

  const pumpkinMarkerView18 = new AdvancedMarkerElement({
    map,
    position: { lat: 35.8568056, lng: 14.5400000 },
    content: pumpkinImg18,
    title: "Spooky Spot 18 [Triq L-Isqof Emmanuel Galea]",
  });

  const pumpkinMarkerView19 = new AdvancedMarkerElement({
    map,
    position: { lat: 35.8567500, lng: 14.5405556 },
    content: pumpkinImg19,
    title: "Spooky Spot 19 [Triq il-Qadi]",
  });

  const pumpkinMarkerView20 = new AdvancedMarkerElement({
    map,
    position: { lat: 35.8558333, lng: 14.5358056 },
    content: pumpkinImg20,
    title: "Spooky Spot 20 [Triq id-Duluri]",
  });

  const pumpkinMarkerView21 = new AdvancedMarkerElement({
    map,
    position: { lat: 35.852862297057854, lng: 14.531301338375041 },
    content: pumpkinImg21,
    title: "Spooky Spot 21 [Misrah Santa Marija]",
  });

  const pumpkinMarkerView22 = new AdvancedMarkerElement({
    map,
    position: { lat: 35.852806993342504, lng: 14.533739492076815 },
    content: pumpkinImg22,
    title: "Spooky Spot 22 [Luqa Briffa]",
  });

  const mysteryMarkerView = new AdvancedMarkerElement({
    map,
    position: { lat: 35.85267709126264, lng: 14.53101445462876 },
    content: mysteryImg,
    title: "Mystery Spot",
  });
}

initMap(); // Finally, Initialise the map