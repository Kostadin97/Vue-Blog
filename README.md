# VueJs-Blog-API
A VueJs Application using Express and REST APIs

#Project's Aim
VueJs-Blog is a blog application for writing, reading and managing posts. A user can create a post, edit it or delete it. 
On "My Posts" page, users can see the posts that they have created and edit or delete them.  
Users can also Like and Comment on posts and also if they like a certain post, it can be saved and previewed on the "Saved Posts" page.

#Authentication and Authorization
The application has a homepage for guest users and one for logged in users. 
A user cannot see any posts until he is logged in. On the guest users page there are only two buttons which redirect to Login / Register pages.
The homepage for the logged in users contains all posts. By clicking on the "Details" button of a certain post, a user is redirected to the "Details" page where 
he can save, comment or like the certain post. And also if he is the creator of the post, he can edit or delete it.

#Error Handling and Validation
When registering a new user, the application checks if the username or the email are already taken and also if the password matches the confirmation password.
If there is an error the user recieves a notification on the top of the page with a message which describes the error.

When logging in, the application checks if the provided credentials match a user from the database and if there are no errors, he is being redirected to the homepage.
If an error occurs, the user recieves a notification which contains the error message.

#Technologies
The VueJs-Blog Application runs on a NodeJs server written in ExpressJs. It uses APIs to connect to the database. 
The frontend part runs on VueJs. The application uses VueX which serves as a store for all the components in an application and keeps track of the application's state.


# Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```


# Application Description





### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
