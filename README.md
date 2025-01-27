# Unsplash Api

## Description
Users can search keywords, fetch data via an API, and view results efficiently. Searches are saved in history, and images load lazily in various sizes. Errors are displayed for better feedback.


## Features

-Keyword search functionality with API integration.

-Saves search history for future use.

-Displays images with lazy loading.

-Supports multiple image sizes.

-Error handling and user-friendly feedback.

## Technical Decisions

State Management: Zustand was chosen for state management to efficiently share states across different parts of the project.

TypeScript: Used for type safety and better developer experience.

Styling: Tailwind CSS was utilized for styling due to its flexibility and efficiency.

API Integration: A custom Axios instance was created with a base URL and includes a function for API data fetching and error handling.

Component Structure: The project is divided into small, reusable components to improve maintainability and scalability.

Lazy Loading: Implemented lazy loading for images to enhance performance and user experience.

## Installation

Clone the repository:

git clone <https://github.com/sohseyedi-web/looks-test>

Navigate to the project directory:

cd <looks-test>

Install dependencies:

npm install

## Usage

Start the application:

npm start

Open your browser and navigate to:

http://localhost:5173

Enter a keyword to search and view results.
