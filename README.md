# Ecommerce Website  

An e-commerce platform built using the **T3 App template** with **Next.js**, designed for seamless shopping experiences. The project includes a modern UI/UX, secure authentication, robust backend functionality, and integrates scalable database solutions with **Vercel PostgreSQL**.  

## Features  

- **Responsive Design**: User-friendly interface built with **Tailwind CSS**, optimized for both desktop and mobile devices.  
- **Product Management**: Includes product search, category filters, and dynamic product displays.  
- **User Authentication**: Implemented using **NextAuth.js** for secure login and account management.  
- **Database Management**: Utilizes **Vercel PostgreSQL** for efficient and scalable data storage.  
- **TypeScript Support**: Maintains type safety and cleaner code using TypeScript.  
- **Deployment**: Hosted on **Vercel**, leveraging its serverless architecture for scalability and performance.  

## Tech Stack  

### Frontend  
- **Next.js** (with **React**)  
- **Tailwind CSS**  

### Backend  
- **Next.js API Routes**  
- **tRPC** for type-safe API communication  

### Authentication  
- **NextAuth.js**  

### Database  
- **PostgreSQL** (via **Vercel PostgreSQL**)  
- **Drizzle ORM**  

### Deployment  
- **Vercel**  

### Development Tools  
- **TypeScript** for type-safe development  
- **ESLint** and **Prettier** for code quality and formatting  

## Installation  

### Prerequisites  
- **Node.js** (v16 or higher)  
- **npm** or **yarn**  
- A **PostgreSQL** database (e.g., Vercel PostgreSQL)  

### Steps  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/yourusername/ecommerce-website.git
   ```
2. Navigate to the project directory:
 ```bash  
   cd ecommerce-website  
   ```

3. Install dependencies:  
   ```bash  
   npm install  
   ```

4. Set up environment variables in a .env file:
   ```bash  
   DATABASE_URL=<your-vercel-postgresql-url>  
    NEXTAUTH_SECRET=<your-nextauth-secret>  
    NEXTAUTH_URL=http://localhost:3000  
    STRIPE_SECRET_KEY=<your-stripe-secret-key>  
   ```
   
5. Generate Prisma client:
  ```bash
    npx prisma generate  
   ```

6. Run database migrations:
 ```bash
    npx prisma migrate dev
   ```

7. Start the development server:
    ```bash
    npm run dev
   ```

8. Open your browser and navigate to http://localhost:3000.

### Acknowledgments
- T3 App Template for the project boilerplate.
- Vercel for hosting and database solutions.
- Drizzle for database ORM.
- Tailwind CSS for the responsive UI design framework.
