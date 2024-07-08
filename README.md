# BooksNote

This project is a web application for managing book summaries. Users can view, add, and delete book summaries stored in a PostgreSQL database.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following software installed on your system:

- Node.js
- npm (Node Package Manager)
- PostgreSQL

### Installation

1. **Fork the Repository:**

   - Go to the project's GitHub page.
   - Click on the "Fork" button in the top-right corner of the page to create a copy of the repository under your GitHub account.

2. **Clone the Repository:**

   Open a terminal and run the following command to clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
   Replace your-username with your GitHub username and your-repo-name with the name of the repository.

3.	**Navigate to the Project Directory:**
   ```
   cd your-repo-name
  ```
4.	**Install Dependencies:**

  	Run the following command to install the necessary npm packages:
    ```
    npm install
    ```
    This will install the following dependencies:
	•	Express
	•	Body-Parser
	•	PostgreSQL

### Database Setup

  **1.	Create a PostgreSQL Database:**
  
  Ensure PostgreSQL is running on your system. Create a new database for the project:
  
  ```
  CREATE DATABASE book_summaries;
  ```
  **2.Update Database Configuration:**
  Update your database configuration in the config.js file (or wherever your database configuration is located).

Running the Application
  1.	Start the Server:
     Run the following command to start the server:

    	```node index.js```

2.	View the Application:
Open your web browser and navigate to http://localhost:3000 to view the application.




**Built With**

	•	Express - The web framework used
	•	Body-Parser - Middleware to parse incoming request bodies
	•	PostgreSQL - The database used
	•	Node.js - JavaScript runtime

**Contributing**

If you want to contribute to the project, please fork the repository and create a pull request with your changes. Ensure your code adheres to the project’s coding standards.
