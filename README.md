# InkFinder 
A multi-page tattoo style matching website built with **HTML**, **CSS**, and **JavaScript**, featuring persistent user data, artist filtering, and interactive UI components. Designed as a clean, portfolio-ready front-end project showcasing UI design, interactivity, and multi-page navigation.

## Live Demo  
If deployed with GitHub Pages, your site will appear here:

https://yourusername.github.io/InkFinder/ (yourusername.github.io in Bing)

## Overview

InkFinder helps users:

- Explore tattoo styles  
- Discover artists  
- Submit their preferred tattoo style  
- Create a simple account  
- View a personalized profile  

All user data (email + style preferences) is stored using **localStorage**, allowing persistence across sessions without a backend.

## Project Structure

InkFinder/
│
├── index.html              # Home page
├── find-artists.html       # Artist directory + search filtering
├── submit-style.html       # User tattoo style submission form
├── login.html              # Login / create account page
├── profile.html            # User profile page (loads saved data)
│
├── style.css               # Global styling
├── script.js               # Global interactivity + persistence
│
└── images/                 # Site images and assets

## Features

### Find Artists  
- Search bar filters artists by name, style, or keywords  
- Artist cards animate on hover  
- Clicking an artist shows a profile alert (placeholder for future modal)

### Submit Your Style  
- Users select a tattoo style and optionally describe it  
- Data is saved using **localStorage**  
- Form auto-fills if the user previously submitted a style

### Login / Create Account  
- Simple login form  
- Email is saved persistently  
- Profile page displays saved user info

### Profile Page  
- Shows saved email  
- Shows saved tattoo style + description  
- Updates automatically based on localStorage

### UI / Styling  
- Fully responsive layout  
- Custom color palette  
- Section dividers  
- Styled cards, forms, buttons, and navigation  
- Optional dark mode toggle (if added)

## Technologies Used

- **HTML5**  
- **CSS3**  
- **JavaScript (ES6)**  
- **LocalStorage API**  
- **Git & GitHub**

## How to Run Locally

1. Clone the repository:
git clone https://github.com/yourusername/InkFinder.git (github.com in Bing)

2. Open the project folder:
cd InkFinder

3. Open `index.html` in your browser.

No build tools or dependencies required.

## Deploying with GitHub Pages

1. Go to your repository  
2. Click **Settings**  
3. Scroll to **Pages**  
4. Under “Source”, choose **main branch**  
5. Save  

Your live site will appear at:

https://yourusername.github.io/InkFinder/ (yourusername.github.io in Bing)

## Future Improvements

- Artist profile modal popups  
- Real tattoo-style matching algorithm  
- User authentication backend  
- Database for artists  
- Style quiz  
- Mobile-first redesign  

## About the Project

InkFinder is designed as a clean, beginner-friendly full website demonstrating multi-page navigation, persistent user data, and interactive UI components — perfect for showcasing front-end development skills for internships or portfolio use.
