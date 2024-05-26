# Project Management System

## description
Project management system is a web application capable of creating projects and tasks, assigning deadlines, and managing user roles. It involves setting up projects, creating accounts, login sessions, and accessing project-related functionalities. The system allows for dragging and dropping tasks based on roles and provides visual cues for deadline statuses using color-coded tags (gray for completed or passed deadlines, red for nearing deadlines, and green for projects with ample time remaining).

## Deployed live server: http://13.232.85.119:3000/
## Prerequisites
- Node.js (https://nodejs.org/)
- npm (https://www.npmjs.com/)
- MongoDB (https://www.mongodb.com/)

### 1. Clone the Repository
```bash
git clone https://github.com/amittiwari-007/project-management-system.git
cd project-management-system

# Roles in the System

The Project Management System involves different roles with varying levels of access and responsibilities:

## 1. Admin
## 2. Project Manager
## 3. Task Manager
## 4. User

**Installation**
Follow these steps to install the dependencies for both the backend and frontend:
Clone the repository: 
```bash
git clone https://github.com/amittiwari-007/project-management-system.git


Install dependencies for the backend: 
```bash
cd server  
npm install

Install dependencies for the frontend:
```bash
cd ../client 
npm install

##Project Structure
Project documentation
└── package.json # Project metadata
project-management-system/
├── server/       # Backend code (Node.js, Express)
├── client/       # Frontend code (React)
├── README.md     # Project documentation
└── package.json  # Project metadata

##System Diagram
+----------------------------------+
|           Frontend (React)       |
|                                  |
| +------------------------------+ |
| |         User Interface       | |
| | (Create, Update, Delete)     | |
| | Projects and Tasks           | |
| +------------------------------+ |
|                                  |
+----------------------------------+
               |
               |
               V
+----------------------------------+
|           Backend (Node.js)      |
|                                  |
| +------------------------------+ |
| |       REST API Endpoints      | |
| | (CRUD operations for Projects | |
| |  Tasks, Sections, and Users)  | |
| +------------------------------+ |
|                                  |
+----------------------------------+
               |
               |
               V
+----------------------------------+
|            Database (MongoDB)    |
|                                  |
| +------------------------------+ |
| |           Collections        | |
| |   - Projects                 | |
| |   - Tasks                    | |
| |   - Sections                 | |
| |   - Users                    | |
| +------------------------------+ |
|                                  |
+----------------------------------+
##Database Schema
Projects Collection:
 "user": "ObjectId",
 "icon": "string",
 "title": "string",
 "description": "string",
 "position": "number",
 "teams": [{}],
 "deadline": "Date",
 "favourite": "boolean",
 "favouritePosition": "number"
}
Tasks Collection:
 "section": "ObjectId",
 "title": "string",
 "deadline": "date",
 "content": "string",
 "position": "number"
}
Users Collection:
 "username": "string",
 "password": "string"
}
Sections Collection:
 "board": "ObjectId", "title": "string"

 ##FUTURE IMPROVISATION
As there was a time constrains so we could not explore much about this but the thing we thought of implementing in near future is : 
Making it robots including members to add people in the project 
Like project manager to include team leads and software people to include in the project
Email Notifications: Introduce email notifications to keep users informed about important updates such as task assignments, deadlines, and project status changes. This can improve communication and keep everyone on the same page.
Task Dependencies: Enable the ability to define dependencies between tasks, where one task cannot start until another is completed. This will provide a more accurate representation of project timelines and help in better planning.
Time Tracking: Incorporate time tracking features to allow users to log time spent on tasks. This data can be used for better project estimation, resource allocation, and invoicing.
Integration with Third-Party Tools: Integrate your project management system with other popular tools and services such as Slack, Trello, or Google Calendar. This will enhance productivity by allowing users to access project information from their preferred platforms.

