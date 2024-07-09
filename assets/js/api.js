/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright Seif Eddine Mouihbi 2024 All rights reserved
 * @author Seif Eddine Mouihbi <mouihbiseif@gmail.com>
 */

"use strict";

const api_key = "269dec58598313ec346f1988e1cc93a4";

/**
 * Fetch data from server
 * @param {string} url Api url
 * @param {Function} callback  callback
 */

export const fetchData = function (url, callback) {
  fetch(`${url}&appid=${api_key}`)
    .then((response) => response.json())
    .then((data) => callback(data));
};

export const url = {
  currentWeather(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`;
  },

  forecast(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`;
  },

  airPollution(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}&units=metric`;
  },

  reverseGeo(lat, lon) {
    return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`;
  },

  /**
   * @param {string} query Search query e.g.: 'London', 'New York'
   */
  geo(query) {
    return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
  },
};
