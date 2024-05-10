<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="">
    <img src="https://github.com/rezzSalmani/react-popcorn-app/blob/master/public/logo.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Movie & TV Show Review App</h3>

  <p align="center">
   This React application allows users to rate movies and TV shows. Ratings are stored in a Supabase database for persistence.
    <br />
    <a href="https://github.com/rezzSalmani/react-popcorn-app">View Demo</a>
    ·
    <a href="https://github.com/rezzSalmani/react-popcorn-app/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/rezzSalmani/react-popcorn-app/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>





<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot](https://github.com/rezzSalmani/react-popcorn-app/blob/master/src/assets/screenShots/Capture005.png)](https://github.com/rezzSalmani/react-popcorn-app/blob/master/src/assets/screenShots/Capture005.png)



### Key Features

* Movie and TV show rating functionality
* Supabase integration for storing ratings
* React with Tanstack Query for efficient movie data loading
* Context API and Reducer for state management
* Tailwind CSS for clean and responsive styling

### Built With
* [![React][React.js]][React-url]
* [![React](https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react)](https://legacy.reactjs.org/docs/context.html)
* [![React](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white)](https://tanstack.com/query/v5/docs/framework/react/overview)
* [![React](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)


### Technologies

* Frontend: React, Tanstack Query, Context API, Reducer, Tailwind CSS
* Backend: Supabase (database)
* API: OMDb API (The Open Movie Database)



<!-- GETTING STARTED -->
## Getting Started

Follow following steps to run the project.

### Prerequisites

<h4>you need follwoing packages to run project</h4>

  ```sh
  npm i @tanstack/react-query
  npm i tailwindcss
  npm i @supabase/supabase-js
  ```

### Installation

1. Get a free API Key at [https://www.omdbapi.com](https://www.omdbapi.com)
   
<br>

3. Get API Key and Url at [https://supabase.com](https://supabase.com)
   
<br>

4. Clone the repo
   ```sh
   git clone https://github.com/rezzSalmani/react-popcorn-app.git
   ```
   
   <br>
   
5. Install NPM packages
   ```sh
   npm install
   ```
   
   <br>
   
6. Create a Supabase project:
    * Sign up for a free Supabase account at https://supabase.com/docs.
    * Create a new project and note down the Supabase URL and Anon Key.
      
  <br>
  
7. Create and Enter your OMDB Key and supabse API Url and key in `.env.local` file
    * Create a file named .env in the project root directory.
    * Add the following lines, replacing the placeholders with your Supabase credentials:
   ```js
   VITE_OMDB_KEY = 'ENTER YOUR API';
   VITE_SUPABASE_URL = 'ENTER YOUR API';
   VITE_SUPABASE_ANON_KEY = 'ENTER YOUR API';
   ```
   
   <br>
   
8. Start the development server:
   ```sh
   npm start
   or
   npm run dev
   ```

<!-- USAGE EXAMPLES -->
## Usage
<!--
Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.
-->
  

<div align="center" display="inline-block">
  <a href="" display="inline-block" width="50%" height="100%">
    <img src="https://github.com/rezzSalmani/react-popcorn-app/blob/master/src/assets/screenShots/Capture001.png" alt="image1" width="50%" height="100%" display="inline-block">
  </a>
  <a href="" display="inline-block" width="50%" height="100%">
    <img src="https://github.com/rezzSalmani/react-popcorn-app/blob/master/src/assets/screenShots/Capture002.png" alt="image2" width="50%" height="100%" display="inline-block">
  </a>

</div>



<!-- CONTACT -->
## Contact

Reza Salmani - [contact me](rezasalmani.dev@gmail.com)

Project Link: [https://github.com/rezzSalmani/react-popcorn-app](https://github.com/rezzSalmani/react-popcorn-app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/rezzSalmani/react-popcorn-app.svg?style=for-the-badge
[contributors-url]: https://github.com/rezzSalmani/react-popcorn-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/rezzSalmani/react-popcorn-app.svg?style=for-the-badge
[forks-url]: https://github.com/rezzSalmani/react-popcorn-app/network/members
[stars-shield]: https://img.shields.io/github/stars/rezzSalmani/react-popcorn-app.svg?style=for-the-badge
[stars-url]: https://github.com/rezzSalmani/react-popcorn-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/rezzSalmani/react-popcorn-app.svg?style=for-the-badge
[issues-url]: https://github.com/rezzSalmani/react-popcorn-app/issues
[license-shield]: https://img.shields.io/github/license/rezzSalmani/react-popcorn-app.svg?style=for-the-badge
[license-url]: https://github.com/rezzSalmani/react-popcorn-app/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
