# ProjectPi3 - โครงการพัฒนาเว็บไซต์สำหรับบุคลากรมหาวิทยาลัยพะเยา โดยเชื่อมต่อข้อมูลจากกลุ่ม Facebook

A modern React application featuring a responsive navbar and authentication system built with Vite, React, and Tailwind CSS.

## Features

- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- 🔒 User authentication system
- 🎯 Clean and maintainable code structure

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (version 14.0 or higher)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Mikayuko/ProjectPi3.git
cd ProjectPi3
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

## Running the Application

To start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Build for Production

To create a production build:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
  ├── components/     # React components
  │   ├── Navbar/    # Navigation component
  │   ├── Login/     # Login component
  │   └── SignUp/    # SignUp component
  ├── assets/        # Static assets
  └── App.jsx        # Main application component
```

## Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Lucide React](https://lucide.dev/)

## Contributing

1. Create a new branch:
```bash
git checkout -b feature/your-feature-name
```

2. Commit your changes:
```bash
git commit -m "feat: add new feature"
```

3. Push to your branch:
```bash
git push origin feature/your-feature-name
```

4. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
