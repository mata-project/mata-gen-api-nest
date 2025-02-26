# MATA Gen API (NestJS)

## Overview
MATA Gen API is a NestJS-based backend service designed to handle the generation functionalities within the MATA project. It provides a scalable and modular architecture, making it easy to integrate with other services in the ecosystem.

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- Node.js (vXX+)
- PostgreSQL

### Setup Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/mata-project/mata-gen-api-nest.git
   cd mata-gen-api-nest
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create and configure the `.env` file:
   ```bash
   cp .env.example .env
   # Edit the .env file with your configuration
   ```
4. Ensure a PostgreSQL database is running locally. You can use `init.sql` to initialize the database:
   ```bash
   psql -U your_user -d your_database -f init.sql
   ```
5. Run the application:
   ```bash
   npm run start:dev
   ```


## License
This project is licensed under the **MIT License**.

