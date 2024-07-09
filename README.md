# Registration Form Project

This project is a basic registration form built with HTML, CSS, and JavaScript for the frontend, and Node.js with Express and MongoDB for the backend. Users can register by filling out the form, and their information will be stored in a MongoDB database. An authorized person can view all user data.

## Features

- User registration form
- Form validation
- Data storage in MongoDB
- View all registered users (for authorized personnel)

## Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB


## Installation and Setup

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/thesagardahiwal/Registration_Form.git
    cd Registration_Form
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the MongoDB server:

    ```bash
    mongod --dbpath /path/to/your/db
    ```

4. Start the Node.js server:

    ```bash
    node server.js
    ```

5. Open your browser and navigate to:

    ```
    http://localhost:3000
    ```

## Usage

1. Fill out the registration form and submit.
2. The data will be stored in MongoDB.
3. An authorized person can view all registered users by accessing `http://localhost:3000/users`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by the need to learn full-stack development.
- Thanks to all the open-source contributors whose libraries and tools were used in this project.
