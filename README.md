Certainly! Below is a README file template for your .NET Web API and Angular frontend project, as per the provided instructions.

# CountryFinderTestProject

## Description

This project consists of two parts: a .NET Web API using Entity Framework for the backend and an Angular frontend for the user interface. The API retrieves and displays a list of projects along with their associated countries. Additionally, there is a bonus exercise that includes creating an "Add Project" form with country validation.

## Backend (.NET Web API)

### Setup

1. **Database Setup**
   - Create a new database called "Project." I have used SQLite as my database engine.
   - Configure the database connection string in the `appsettings.json` file under the `appSettings` section.

2. **Entity Framework Code-First Migration**
   - Run the following command in the Package Manager Console to create the initial migration:
     ```
     Add-Migration InitialCreate
     ```
   - After creating the migration, update the database with the following command:
     ```
     Update-Database
     ```

3. **Seed Data**
   - The database will be seeded with a few records during the migration process.

### Running the API

To start the .NET Web API, follow these steps:

1. Open the solution in Visual Studio or your preferred code editor.

2. Build the solution.

3. Start the API by pressing F5 or using your preferred method.

4. The API will be accessible at `http://localhost:port/api/projects`.

### API Endpoints

- **GET /api/projects**: Retrieve a list of projects along with their associated countries.

#### Bonus Exercise (Add Project Form)

- Create an "Add Project" form that requires the project name and country.

---

## Frontend (Angular)

### Setup

1. **Prerequisites**
   - Make sure you have Node.js and npm installed on your system. You can download them from [https://nodejs.org/](https://nodejs.org/).

2. **Angular CLI Installation**
   - If you don't have the Angular CLI installed, install it globally using the following command:
     ```
     npm install -g @angular/cli
     ```

3. **Project Setup**
   - Navigate to the `frontend` directory in your command line.

   - Install project dependencies using the following command:
     ```
     npm install
     ```

### Running the Frontend

To start the Angular frontend, follow these steps:

1. Navigate to the `frontend` directory in your command line.

2. Run the following command to start the development server:
   ```
   ng serve
   ```

3. The frontend will be accessible at `http://localhost:4200`.

### Accessing the Application

- Open your web browser and navigate to `http://localhost:4200` to access the Angular application.

### Bonus Exercise (Add Project Form)

- The "Add Project" form can be accessed through the frontend application. Make sure the backend is running to validate the country input.
