BudgetEase
Project Description
BudgetEase is a personal finance management REST API that helps users track their income and expenses. The API allows users to perform basic CRUD (Create, Read, Update, Delete) operations on financial transactions, while securely managing user authentication through OAuth. Whether you’re an individual looking to manage your budget or a developer seeking to build a finance tracking app, BudgetEase provides a scalable and secure backend to meet your needs.

Features
User Authentication: Secure login using OAuth 2.0 (Google).
CRUD Operations: Manage income, expenses, and transactions through well-defined RESTful endpoints.
Transaction Categorization: Easily categorize transactions (e.g., salary, groceries, rent).
MySQL Database: Store and manage user and transaction data.
Scalable: Can be extended to include analytics, reporting, or even a frontend app for personal use.
Technologies Used
Backend Framework: Node.js with Express.js.
Database: MySQL for storing user and transaction data.
Authentication: OAuth 2.0 using Passport.js (Google strategy).
Version Control: GitHub for version control and collaboration.
Project Management: Trello for task tracking and sprint management.
Project Structure
graphql
Copier le code
BudgetEase/
├── config/               # Configuration files (e.g., OAuth)
├── controllers/          # Business logic for transactions and users
├── models/               # Database models for User and Transaction
├── routes/               # API routes for CRUD and authentication
├── package.json          # Project dependencies and scripts
└── app.js                # Main application entry point
Installation and Setup
To set up the project locally, follow these steps:

Clone the repository:

bash
Copier le code
git clone https://github.com/yourusername/BudgetEase.git
cd BudgetEase
Install dependencies: Make sure you have Node.js installed, then run:

bash
Copier le code
npm install
Set up the MySQL database:

Install MySQL locally or use a cloud-based MySQL service.
Create a database named budgetease.
Configure your database connection in a .env file in the root of your project:
env
Copier le code
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=budgetease
Configure OAuth 2.0:

Go to the Google Developer Console.
Create a new project and enable the Google+ API.
Get the client ID and client secret, and add them to your .env file:
env
Copier le code
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
Run the application: To start the server, run:

bash
Copier le code
npm start
Access the API: The API will be running at http://localhost:3000. You can use tools like Postman to test the endpoints.

Usage
Authentication
To use the API, users must first authenticate using Google OAuth. After successful authentication, a session token will be generated to authorize further requests.

Endpoints
POST /api/transactions: Create a new transaction (income/expense).
GET /api/transactions: Retrieve all transactions.
PUT /api/transactions/
: Update a specific transaction.
DELETE /api/transactions/
: Delete a specific transaction.
Example request for creating a new transaction:

bash
Copier le code
POST /api/transactions
{
  "type": "income",
  "amount": 5000,
  "category": "Salary"
}
Challenges and Future Improvements
Challenges: Managing financial transactions efficiently and ensuring security for sensitive financial data was challenging. OAuth integration required careful handling of user authentication.

Future Improvements:

Add financial analytics and reporting features.
Build a frontend to complement the API.
Improve scalability by deploying the app to the cloud (e.g., AWS, Heroku).
Contributing
Feel free to fork the project and create pull requests with your improvements. Contributions are always welcome!
