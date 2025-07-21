# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# OnlyPlans

## Introduction

Welcome to OnlyPlans – Your All-in-One Digital Wellness Companion

Say goodbye to scattered notes, forgotten tasks, and misplaced journals. OnlyPlans is the ultimate digital tracking app designed to help you take control of your mental health, build better habits, stay on top of your to-do list, and keep your thoughts safe and private in your personal journal.

Whether you're managing your mood, tracking your daily routines, or simply looking for a safe space to reflect—OnlyPlans makes it simple, secure, and personal. With everything in one place, your mind is finally free to focus on what matters most: you.



## Project Type
Frontend 

## Deplolyed App
Frontend: https://only-plans.netlify.app/

## Directory Structure
onlyplans/
├─src /
│  ├─ auth/
│  │    ├─authSlice.js
   │─components/
   │     ├─Footer.jsx
   │     ├─Habit.jsx
   │     ├─Home.jsx
   │     ├─Intro.jsx
   │     ├─Journal.jsx
   │     ├─Login.jsx.jsx
   │     ├─Mental.jsx
   │     ├─MoodChart.jsx
   │     ├─Navbar.jsx
   │     ├─Signup.jsx
   │     ├─Todo.jsx
   │─utils/ 
       │─firebase.js
       │─store.js


## Video Walkthrough of the project
(https://drive.google.com/file/d/1hUP8t4mFq0VkeVCWL-kwBqaNi96JP2n4/view?usp=drive_link)

## Video Walkthrough of the codebase
https://drive.google.com/file/d/1a0-RJuak-Ab5-blyLdLxLPLgZT7ktAxL/view?usp=drive_link

## Features
The key features of OnlyPlans are:

1. ✅ Smart To-Do List
Organize your day effortlessly with a clean, intuitive to-do page that helps you prioritize and stay focused.

2. 🧠 Mental Health Tracker
Keep track of your mental well-being with guided check-ins designed to help you understand and support your emotional health.

3.📊 Mood Tracker with Visual Insights
Log your daily mood and visualize your emotional patterns over time through beautiful, easy-to-read graphs.

4.🔁 Habit Tracker
Build better habits with daily, weekly, or custom tracking—see your progress and stay motivated.

## design decisions or assumptions

To begin designing OnlyPlans, I started with the navigation bar. I ensured it was fully responsive, so users on mobile devices would see a hamburger menu. When tapped, it opens a clean pop-up menu, while desktop users enjoy the full navbar layout seamlessly displayed.

Next, I moved on to the footer design. To gather inspiration, I explored a few modern websites and combined elements from two or more designs to create a unique, cohesive style that complements the overall look of the app.

Once the structure was in place, I focused on styling the pages consistently, using a gradient background to give a fresh, modern feel across the app. I also explored various animations—like bounce effects—to add a touch of interactivity and personality. I ran into a few challenges along the way, but with the help of ChatGPT, I was able to troubleshoot and implement the features smoothly and efficiently.


## Credentials
email-a@a.com   
pass-123456

## APIs Used
NO APIs used, used firebase for authenticatin and storing the data.



## Technology Stack
List and provide a brief overview of the technologies used in the project.

- React.js
- axios
- tailwind
- Redux