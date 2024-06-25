# Worko.ai Backend Internship Assignment

## Overview
This repository contains the backend assignment for the Worko.ai Backend Internship program. The project involves creating a Node.js API to help job seekers request referrals and other services.

## Goals
1. Assess candidate code writing for backend services skills.
2. Evaluate candidate self-learning skills and managing delivery skills.

## Specifications
Worko.ai is building a product to help job seekers request referrals from multiple companies they are interested in. They can use any job description URL to request a referral. At the same time, candidates have options for requests for services like resume review, interview handholding, career guidance, and mock interviews.

## Milestones

### Backend API Setup
1. **Create a Node.js project with MVC architecture:**
    - Create controller layer
    - Create service layer
    - Create DAO layer
    - Create models for CRUD operations
    - Create DTO for request and response
    - Add validator framework

2. **Create API:**
    - Create API for resource `/worko/user`
        - `GET` - List users
        - `GET /worko/user/:userId` - Get user details
        - `POST` - Create user
        - `PUT` - Update user
        - `PATCH` - Update user
        - `DELETE` - Soft delete user in DB

3. **Required Payload for User:**
    - `Id` (Generated)
    - `Email`
    - `Name`
    - `Age`
    - `City`
    - `Zip code`

4. **Validate following fields on API call:**
    - `Email`
    - `Zip code`
    - `Id` (in case of POST/PUT/DELETE)

5. **Persist User Information in Database:**
    - Choose DB of your choice (NoSQL is preferred)
    - Read DB config from environment variable

