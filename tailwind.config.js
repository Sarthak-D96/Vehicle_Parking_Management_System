
// Tailwind CSS configuration file for the Smart Parking System application. 
// This file specifies the content sources for Tailwind to scan for class names, 
// as well as any custom theme extensions and plugins. 
// The configuration ensures that Tailwind generates the necessary CSS based on the classes used in the application's views and JavaScript files, 
// allowing for a consistent and efficient styling approach throughout the application.

module.exports = {
  content: [
    './views/**/*.ejs',
    './public/js/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
