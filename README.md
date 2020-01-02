## Dreamloom Dream Journal

A database where users can record and view dreams they've had. Information like the date, how well they slept, and the contents of their dream. The user can log in, create dreams, view a list of dreams, view and edit an individual dream.

Try it out:
[Dreamloom Dream Journal](https://derekmurphy1993.github.io/dreamloom-front-end/)


![Dream Journal App](https://i.imgur.com/gCsuQNH.png)

Heroku Back End:
[Hosted Back-End](https://oreironautapi.herokuapp.com/)


See more at the back end repo:
[Dreamloom Back-End](https://github.com/derekmurphy1993/dreamloom-back-end)

### Storing and Retrieving Data
The core element to this app is the functionality and communication with the back-end api database.
When a user logs in the have the ability to log a new dream, browse their collection of dreams, view the full details of a dream, edit that dream or delete it.

##### Technologies Used
1. Ruby on Rails
2. Javascript
3. Handlebars
4. Ajax
4. Bootstrap
5. HTML

### Future Iterations

A problem left unsolved in version one involves viewing and updating dreams. I would like to be able to control how dreams are viewed by date, or a calander view. Another feature would be when a user clicks to edit an existing dream, the form should be autofilled with the existing dream, so the user can edit in the casual sense of the word, rather than create all new text to replace it.

### The Process
The concept of this app has existed for a long time, with a large scope of functions and views. Keeping SOLID design principals in mind, I decided on building the app in several stages. I created user stories and wireframes for a version 1 that would strictly be the foundational database that could store users and dreams.

#### User Stories
1. As a user, I want to sign in.
1. As a user, I want to create a new dream.
1. As a user, I want to view my saved dreams.
1. As a user, I want to view a specific dream.
1. As a user, I want to be able to edit my saved dreams.
1. As a user, I want to delete dreams.
2. As a user I want to change my password.
2. As a user I want to be able to sign out.

#### Wireframes

![Dreamloom Wireframe](https://i.imgur.com/RrBggAI.jpg)
