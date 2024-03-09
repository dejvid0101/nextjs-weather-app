# nextjs-weather-app

Weather app powered by next js and react, using three different api sources to display weather data by location. Use the navbar search field to access the details page (/details/) with information about weather conditions for the chosen location.

Website uses a json file with major cities in the world to let users select a location. Then, it queries the OpenCage API to get latitude and longitude of the chosen location. This information is then used to fetch weather information from the Open-Meteo API.
