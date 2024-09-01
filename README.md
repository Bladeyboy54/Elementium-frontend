# Elementium frontend
<a id="readme-top"></a>
[![Contributors][contributors-shield]][contributors-url] 
[![Forks][Forks]][Forks-url]
[![Starsgazers][Stars]][Stars-url]
# 
<div align="center">
  <a href="https://github.com/Bladeyboy54/Elementium-frontend">
    <img src="elementium/elementium-app/src/assets/logo.svg" alt="Elementium" width="200" height="auto">
  </a>

  <h3 align="center">Elementium </h3>

  <p align="center">
    Elementium is an innovative banking app offering a unique blend of finance and science
    <br />
    <br />
    <a href="https://github.com/Bladeyboy54/Elementium-frontend/tree/main/elementium"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="demo Video link">View Demo</a>
    ·
    <a href="bug report link">Report Bug</a>
    ·
    <a href="Maybe">Request Feature</a>
  </p>
  <br />
</div>


<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a>
          <ul>
            <li><a href="#frontend-installation">Front-end Installation</a></li>
            <li><a href="#server-side-installation">Backend-end Installation</a></li>
            <li><a href="#server-side-installation">Backend-end Installation</a></li>
            <li><a href="#server-side-installation">Backend-end Installation</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



## About the Project

![Sign Up Page Mockup][mockup1]

Elementium revolutionizes traditional banking by integrating the elements of the periodic table into a tiered account system. 
Users can purchase and trade elements like Hydrogen, Lithium, Palladium, and Xenon, each representing a different account type—Reactive, 
Alkali, Transition, and Noble. With each upgrade, users gain access to exclusive perks and features, making financial management both engaging and rewarding.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

![Electron](https://img.shields.io/badge/Electron-2B2E3A?style=for-the-badge&logo=electron&logoColor=9FEAF9)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![.Net](https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![C#](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=csharp&logoColor=white)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)


## Getting Started

### Prerequisites

- [![VS Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)](https://code.visualstudio.com/)
- [![.Net](https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)](https://dotnet.microsoft.com/en-us/download/dotnet/6.0)
- [![NodeJS](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en/download/prebuilt-installer/current)
- [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.pgadmin.org/download/pgadmin-4-windows/)


### Installation

   #### Frontend Installation
1. Clone the frontend repo
   ```sh
   https://github.com/Bladeyboy54/Elementium-frontend.git
   ```
2. Install the node modules for Electron
   ```sh
   cd elementium
   ```
   then
   ```sh
   npm i
   ```
3. Install the node modules for React 
   ```sh
   cd elementium-app
   ```
   then
   ```sh
   npm i
   ```
   
#### Server Side Installation 
Please refer to [this repository.](https://github.com/CWKrahtz/elementium-backend)
<br/>
<br/>

1. Clone the repository:
   ```bash
    git clone https://github.com/CWKrahtz/elementium-backend.git
   ```
2. Navigate to the project directory:
   ```bash
    cd elementium-backend
   ```
3. Restore the .NET dependencies:
   ```bash
    dotnet restore
   ```
4. Set up your database (if possible). Ensure the connection string in `appsettings.json` is correct:
   ```json
    "ConnectionStrings": {
        "DefaultConnection": "Server=your_server;Database=your_db;User Id=your_user;Password=your_password;"
    }
   ```

5. Create Migration
   ```bash
    dotnet ef migrations add MigrationName
   ```

6. Apply any pending migrations:
   ```bash
    dotnet ef database update
   ```
#### Running the Application
<p>To run the application locally, use the following command:</p>

In the back end
  ```bash
    dotnet run
  ```
In the front end
  ```sh
    cd ..
  ```
  ```bash
    npm run dev
  ```
<p>The API should now be running at `https://localhost:5001` or `http://localhost:5000 for HTTP`.</p>

#### Using Swagger
<p>This project uses <a href="https://swagger.io/">Swagger</a> for API documentation. Once the application is running, you can access the Swagger UI by navigating to:</p>

  ```
    https://localhost:5001/swagger
  ```

   
<p align="right">(<a href="#readme-top">back to top</a>)</p>


[contributors-shield]: https://img.shields.io/github/contributors/Bladeyboy54/Elementium-frontend.svg?style=for-the-badge
[contributors-url]: https://github.com/Bladeyboy54/Elementium-frontend/graphs/contributors
[Forks]: https://img.shields.io/github/forks/Bladeyboy54/Elementium-frontend.svg?style=for-the-badge
[Forks-url]: https://github.com/Bladeyboy54/Elementium-frontend/forks
[Stars]: https://img.shields.io/github/stars/Bladeyboy54/Elementium-frontend.svg?style=for-the-badge
[Stars-url]: https://github.com/Bladeyboy54/Elementium-frontend/stargazers
[mockup1]: elementium/README.md-Assets/mockup1.png
