Multi-Role Dashboard System - Implementation Plan

Information Gathered:
- Project requires three types of logins: Admin, Staff, Student.
- Admin: full admin access.
- Staff: manage student IDs (add, remove, edit), add results, notices, remarks, attendance, and other necessary features.
- Student: edit profile photo, personal details, change/forgot password, view/download results, view notices, remarks, and their own attendance.
- Project structure suggested by user:
  - client/: React frontend with components, pages, dashboards.
  - server/: Node.js backend with routes, controllers, middlewares.
  - terraform/: Infrastructure as Code for AWS.
  - .github/workflows/: GitHub Actions for CI/CD.
  - README.md and package.json at root.

Plan:

1. Frontend (client/)
   - React app with routing and authentication.
   - Login page with role selection or role-based redirect.
   - Dashboards:
     - AdminDashboard.jsx: full admin features.
     - StaffDashboard.jsx: student management, results, notices, remarks, attendance.
     - StudentDashboard.jsx: profile editing, view/download results, notices, remarks, attendance.
   - Components for forms, tables, modals, notifications.
   - Utils for API calls, auth token management.

2. Backend (server/)
   - Express server with JWT authentication.
   - User model with roles (admin, staff, student).
   - Routes and controllers:
     - Auth routes: login, logout, forgot password, change password.
     - Admin routes: manage users, roles, system settings.
     - Staff routes: CRUD for students, results, notices, remarks, attendance.
     - Student routes: profile update, view data.
   - Middlewares for authentication and role-based authorization.
   - Utils for password hashing, email sending (for forgot password).

3. Infrastructure (terraform/)
   - AWS IAM roles and policies for the app.
   - EC2 or Lambda setup for backend.
   - RDS or DynamoDB for database.
   - S3 for storing profile photos.
   - Networking (VPC, subnets, security groups).

4. CI/CD (.github/workflows/)
   - Workflow to build and test frontend and backend.
   - Deploy to AWS infrastructure.
   - Notifications on success/failure.

Dependent Files to be created:
- client/src/dashboards/AdminDashboard.jsx
- client/src/dashboards/StaffDashboard.jsx
- client/src/dashboards/StudentDashboard.jsx
- client/src/components/* (login form, profile form, tables, etc.)
- client/src/pages/* (login page, error page, etc.)
- client/src/utils/api.js, auth.js
- server/routes/*.js
- server/controllers/*.js
- server/middlewares/auth.js, role.js
- server/utils/password.js, email.js
- terraform/main.tf
- .github/workflows/deploy.yml
- README.md
- package.json

Follow-up Steps:
- Implement frontend and backend code.
- Setup AWS infrastructure with terraform.
- Setup CI/CD pipeline.
- Test all features for each role.
- Document usage in README.md.

Please confirm if you approve this detailed plan so I can proceed with implementation.
