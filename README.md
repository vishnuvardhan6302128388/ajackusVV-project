In this project, let's build **User Management DashBoard** by applying the concepts we have learned till now.

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions
In this project You have to implement the following functionality

**User Interface:**

Display a list of users with details such as ID, First Name, Last Name, Email, and Department.
Provide buttons or links to "Add", "Edit", and "Delete" users.
A form to input details of a new user or edit details of an existing user.

**Backend Interaction:**

Use JSONPlaceholder, a free online REST API that you can use for demonstration and test purposes.
Specifically, use the '/users' endpoint to fetch and manipulate user data.

**Functionality:**

**View**: Display all users by fetching data from the '/users' endpoint.
**Add**: Allow adding a new user by posting to the '/users' endpoint. (Note: JSONPlaceholder won't actually add the user, but will simulate a successful response.)
**Edit**: Allow editing an existing user. This should involve fetching the current data for a user, allowing for edits, and then putting the updated data back via the API.
**Delete**: Allow users to be deleted, by sending a delete request to the API.

**Error Handling:**

Handle scenarios where the API request might fail - show an error message to the user in such cases.
Bonus (Optional):
Implement pagination or infinite scrolling for the user list.
Add client-side validation for the user input form.
Make the interface responsive.




> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
