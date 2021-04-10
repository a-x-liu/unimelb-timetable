## Inspiration/What it does
- After contemplating what frustrated our team the most about working from home, we realised that time management and scheduling were one of the most important factors that impact our quality of life. We also agreed that the vast majority of existing time planners did not satisfy our criteria, being mainly an effective way to display the allocation of a user's time and how it varies week by week. Our time planner differs from other scheduling services, giving a visual representation of the distribution in the form of charts, based on custom user input.

## How we built it
- Frontend
    - The frontend was built using React with routes to different pages.
    - Most of the interactive components were designed using material ui
    - Modules that deal with the backend database work together using fetch statements, i.e. CRUD
    - We used Framer-motion to show transitions while navigating to different links
    - Event modals and timetables were connected to each other with separate files in the component folder
   - The graphs were generated using victory.js based on the data that's been passed through our backend data
- Backend
    - The backend was built using node.js and a MySQL database, hosted by Heroku, allowing persistent data and multiple users
    - It then provides custom API routes for the frontend to access via fetches, returning relevant data to be displayed to the user
    - These routes are separated into auth, user, timetable and event, using relative HTTP methods
    - SQL statements are passed to our database using the node.js MySQL module, allowing us to instantly access important information

## Challenges we ran into/What we learned
- As it is our first time using React for a large scale project, we struggled with adopting the React component style of rendering, in particular dealing with component dependencies
- Dealing with networking between our server side and client side, particularly response speeds and strange fetch results
- The asynchronous nature of Javascript presented many problems to us, where certain returns and information needed to be accessed, consuming a considerable amount of time to resolve
- **The biggest issue in the frontend we had was rendering the events to the right spaces on the timetable, this was caused by cyclical component dependency issues. Our current solution is to list the events below the timetable to still allow other functionality such as graph making.**

## Accomplishments that we're proud of
- Our team is proud of how much we achieved and the improvements we made in a short amount of time
- Our final product is missing many features that we initially wanted to include, as we realised the time constraints of the Hackathon would not allow for such in depth features to be implemented. As a result, we had to simplify our idea and only incorporate core concepts that were deemed essential
- Overall, we think we did well for our capability and have learnt a lot for future Hackathons.

## Try it out!
- [apple-surprise-39339.herokuapp.com](https://apple-surprise-39339.herokuapp.com/)
