# Quotes API Documentation

This API provides endpoints for managing quotes with different themes. The API is built with Next.js and uses MongoDB for data storage.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env.local` file in the root directory and add your MongoDB URI:
   ```
   MONGODB_URI=your_mongodb_connection_string_here
   ```

3. Seed the database with sample quotes:
   ```bash
   npm run seed
   ```

## API Endpoints

### 1. Get All Quotes
- **URL**: `/api/quotes`
- **Method**: `GET`
- **Query Parameters**:
  - `theme` (optional): Filter quotes by theme (motivation, discipline, focus, plans, dreams, inspiration)
  - `limit` (optional): Number of quotes per page
  - `page` (optional): Page number for pagination

**Examples**:
- Get all quotes: `GET /api/quotes`
- Get motivation quotes: `GET /api/quotes?theme=motivation`
- Get paginated quotes: `GET /api/quotes?limit=10&page=1`
- Get motivation quotes with pagination: `GET /api/quotes?theme=motivation&limit=5&page=1`

### 2. Get Random Quote
- **URL**: `/api/quotes/random`
- **Method**: `GET`
- **Query Parameters**:
  - `theme` (optional): Get random quote from specific theme

**Examples**:
- Get any random quote: `GET /api/quotes/random`
- Get random motivation quote: `GET /api/quotes/random?theme=motivation`

### 3. Get Quote by ID
- **URL**: `/api/quotes/[id]`
- **Method**: `GET`

**Example**: `GET /api/quotes/507f1f77bcf86cd799439011`

### 4. Create New Quote
- **URL**: `/api/quotes`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "text": "Your quote text here",
    "author": "Author name (optional)",
    "theme": "motivation"
  }
  ```

### 5. Update Quote
- **URL**: `/api/quotes/[id]`
- **Method**: `PUT`
- **Body**:
  ```json
  {
    "text": "Updated quote text",
    "author": "Updated author",
    "theme": "discipline"
  }
  ```

### 6. Delete Quote
- **URL**: `/api/quotes/[id]`
- **Method**: `DELETE`

## Response Format

All successful responses follow this format:
```json
{
  "success": true,
  "data": { ... },
  "pagination": { ... } // Only for paginated responses
}
```

Error responses:
```json
{
  "success": false,
  "error": "Error message"
}
```

## Themes

The following themes are supported:
- `motivation`
- `discipline`
- `focus`
- `plans`
- `dreams`
- `inspiration`

## Usage in Your Pages

You can now fetch quotes in your theme pages like this:

```typescript
// In your motivation page
const fetchMotivationQuotes = async () => {
  const response = await fetch('/api/quotes?theme=motivation');
  const data = await response.json();
  return data.data;
};

// Get a random motivation quote
const fetchRandomMotivationQuote = async () => {
  const response = await fetch('/api/quotes/random?theme=motivation');
  const data = await response.json();
  return data.data;
};
```