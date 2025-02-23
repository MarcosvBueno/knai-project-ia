# KNAI Analyst Intelligence

## Overview
KNAI Analyst Intelligence automates the creation and execution of complex queries on structured databases, enabling businesses to gain insights quickly without requiring advanced technical knowledge. Our solution optimizes time, reduces errors, and ensures more accurate financial forecasts.

## Architecture
KNAI utilizes WatsonX with the Granite-3.1-8b-instruct model to process natural language queries, convert them into SQL queries, and generate insights from structured data. The system retains conversation history in Redis for 24 hours, ensuring context-aware responses. Users receive responses in natural language, based on structured data analysis, without requiring any technical expertise.

## Live Demo
You can access the deployed frontend at: [Deployment Link](https://knai-project-ia.vercel.app/)

## Usage
1. Input a query in natural language (e.g., "Show me the revenue trends for the last quarter").
2. The system converts the query into an SQL statement and executes it.
3. The response is processed and presented in natural language.


## Technologies Used
- **Next.js** (React Framework)
- **ShadCN UI** (Component Library)
- **React Hook Form** (Form Handling)
- **Axios** (HTTP Client)
- **TailwindCSS** (Utility-First CSS Framework)

## Getting Started
### Prerequisites
Ensure you have the following installed:
- Node.js 16+
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/MarcosvBueno/knai-project-ia
   cd knai-project-ia
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```




