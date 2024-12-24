# Fullstack Developer Technical Assessment  

## Objective  
This project is a React-based application created as part of a technical assessment for a Fullstack Developer Intern position. It mirrors the design provided in the [Figma File](https://www.figma.com/design/2raZwGOfHhhXvhsuoJyg4P/Full-Stack-Developer-Technica l-Assessment?node-id=1-19&t=dPNaunn8dVX2Niu2-1) and implements CRUD functionality with a Supabase database and Prisma ORM.

---

## Features  

### UI and State Management  
- **Design & Layout**:  
  - The UI replicates the primary screen from the provided Figma design, with responsive layouts, accurate color schemes, and typography.  
  - Components include:  
    - Responsive Header & Navigation  
    - Reusable Cards/Sections  

- **Styling**:  
  - TailwindCSS utility classes for styling.  
  - Optional use of Shadcn for UI effects and polish.  

- **State Management**:  
  - Global state managed with [Redux](https://redux.js.org/)
  - Integrated with the Supabase database to fetch and update data.  

### Database and ORM  
- **Supabase**:  
  - Database tables/models for `students`  created and managed in Supabase.  
  - API keys stored securely in `.env` files.  

- **Prisma ORM**:  
  - Simple API routes for Create, Read, Update, and Delete (CRUD) operations.  
  - Prisma integrated with Node.js for seamless data handling.  

---

## Installation and Setup  

### Prerequisites  
- Node.js and npm installed.  
- A Supabase account and project set up.  

