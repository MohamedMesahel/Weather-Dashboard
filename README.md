<div id="top"></div>

<!-- Badges -->
[![Website shields.io](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](http://shields.io/)
[![Website shields.io](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](http://shields.io/)
[![Website shields.io](https://badges.aleen42.com/src/javascript.svg)](http://shields.io/)
[![Website shields.io](https://img.shields.io/badge/LICENSE-MIT-green)](http://shields.io/)

# Weather-Dashboard

Weather dashboard that will run in the browser and feature dynamically updated HTML and CSS and built to display the current weather in a city of user choice within (5) days forecast using open source Weather API.
## Table of Contents
<!-- TABLE OF CONTENTS -->
<details>
  <summary><strong>Table of Contents</strong></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#user-story">User Story</a></li>
    <li><a href="#link-to-live-demo">Link to Live Demo</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project
<p align="center">
  <img alt="Light Mode" src="./assets/img/WeatherDashboard.png" width="60%"> 
</p>
Weather-Dashboard is an application to find a weather condition of a given city both  current and 5-Days and these data includes:

* City
* Humidity
* Temperature
* Wind
* UV %

## User Story
```md
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```
### Link to Live Demo
[Weather-Dashboard](https://mohamedmesahel.github.io/Weather-Dashboard/?)

## Usage
In order to use this application and check the weather, you can download the zip file and run it in your browser or simply visit the link above.

### Built With

HTML, CSS and JavaScript by using OpenWeather API.
* code snippet
```js
var formSumbitHandler = function(event){
    event.preventDefault();
    
    var city = cityInputEl.value.trim();
    if(city){
        getCityWeather(city);
        get5Day(city);
        cities.unshift({city});
        cityInputEl.value = "";
    } 

    saveSearch();
    pastSearch(city);
}
```
<p align="right">(<a href="#top">back to top</a>)</p>

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- CONTACT -->
## Contact
[![Website shields.io](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](http://shields.io/)

Mohamed Mesahel - mohamed.mesahel86@gmail.com

[![Website shields.io](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](http://shields.io/)

https://github.com/MohamedMesahel

[![LinkedIn][linkedin-shield]][linkedin-url] 

<!-- LICENSE -->
## License

Distributed under the MIT License. 
<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

List for some useful resources!
* [Open Weather free API](https://openweathermap.org/api)
* [Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys).


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/mohamed-mesahel-pmp-570a0423/