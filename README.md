
# Second Milestone Project / Simon Game
____

Simon is an electronic memory game created in real life(https://en.wikipedia.org/wiki/Simon_(game)). The device creates a sequence, displayed by four coloured flashing lights accomapnied by tones, and requires a user to repeat the sequence.
This is the link to the deployed webapge: [Simon Game](https://martycistudent.github.io/2nd-milestone-project/)

## UX Design:

### Strategy

#### Who is this for?
This is for anybody who enjoys playing free games on the internet, or is already a fan of the original real life Simon game toy. 

#### What type of content will be relevant? 
Due to the nature of the project, the content of the that will be relevant will only include a virtual replica of the real life game.

### Scope

#### What should the game include?
* A start button to turn the game on.
* At the very least, the game needs to have four different colored buttons that flash.
* The game will also require some sounds to accompany these flashes.
* An audio file if the player has made a wrong move.
* An audio file for a "game over" sound effect.
* 
* A strict mode that allows the player to play a slightly harder version of the game.

#### User scenarios
**Scenario:**
The user wants to start the game ---
**Requirement:**
The ability to press a start button that will activate the game code.

**Scenario:**
The player wants to click any of the four colored buttons to play their turn ---  
**Requirement:**
The ability to click any of the four colored buttons to repeat the game sequence.

**Scenario:**
The user tries to press a any of the colored buttons while the game it is the games turn ---  
**Requirement:**  
The buttons are deactivated while it is the games turn.

**Scenario:**
The user wants to play the game in strict mode ---  
**Requirement:**  
A strict mode button that allows the player to play the game in "strict" mode.

### Structure

#### Information Architecture
This website will consist of a single page to display the game.

### Skeleton

#### Wireframe
[A link to my Mobile wireframe](https://github.com/martycistudent/First-milestone-project/tree/master/wireframes/mobile%20wireframes)
[A link to my Desktop wireframe](https://github.com/martycistudent/First-milestone-project/blob/master/Wireframe/Screenshot%20(52).png)

## Features

## Technology's Used:

* [HTML5](https://www.w3schools.com/html/html5_intro.asp) - a markup language used to create the structure of the webpage.
* [CSS3](https://www.w3schools.com/css/) - used to style the HTML code. 
* [Bootstrap4](https://getbootstrap.com/) - a front-end component library used to build responsive mobile-first desifn for this webpage.
* [JavaScript](https://www.w3schools.com/js/) - the coding language used to write the games functionality.
* [jQuery](https://jquery.com/) - a JavaScript library used for HTML document traversal and manipulation, event handling and animation.
* [Cloud9 - AWS](https://www.awseducate.com/student/s/awssite) - This is the IDE used to write and test the code for this project.
* [Git](https://git-scm.com/) - Git is a tool that is used to track and store changes to your codes as you work. It stores your code in a local repository.
* [Github](https://github.com/) - Github is a remote repository used to store our code. It is also used to deploy this project. 

## Testing
In order to ensure the game functioned as expected, I tested the code for the game as it was written, function by function. 
This was important as it allowed me to write a particualr function, and know what values I expected to be produced at the end of 
that functions execution, before moving onto the next function.
To track the changing values of different varibles in my javscript file I used "console.log" statements, to print a variables value
to the console. In order to under stand what variable I was looking at I tpically used a string stating the name of the variable.
I.E console.log("strict is " + strict);
The issues that this helped me resolve include:

* 
.. 1. Click each link on the main page to verify they work.
.. 2. Navigate to "Contact" page.
.. 3. Click each link on the "Contact" page to verify that they work.

* Games Buttons:
.. 1. Add relevant classes.
.. 2. Try to submit the empty form and verify that an error message about the required fields appears.
.. 3. Try to submit the form with an invalid email address and verify that an error message appears.
.. 4. Try to submit the form with all inputs valid and verify that a success message appears.


I used a *code validator* on [W3 Markup Validation Service](https://validator.w3.org/#validate_by_input) to checks for any errors that needed to be 
fixed in my code. 

Finally, I posted my project in the peer-code-review channel on Slack and received some very helpful criticism to help me fix some mistakes that 
slipped under the rader.

## Deployment 
1. The project was written and developed in the Cloud9 - AWS IDE.
2. A local repository was intialized using Git. Regular changes were commited to the local repository.
3. Github was used as a remote repository, and at the end of each development session, all local commits were pushed to (https://github.com/martycistudent/2nd-milestone-project)
4. The project’s source file was published from GitHub repository to GitHub pages using GitHub default settings via the master branch.
5. GitHub Pages was then enabled to publish the site from the master branch following this path:
.. 1. GitHub repository settings page.
.. 2. Scrolling down to the GitHub Pages Repository box, the master branch was selected from the dropdown menu.
.. 3. The action was saved by clicking the save button.

6. The Project’s source file is now published as a site on GitHub Pages at [Simon Game](https://martycistudent.github.io/2nd-milestone-project/)

## Credits
### Game Layout/ Design
The design for this game was based off the real life Simon game.

### Acknowledgements 
For the main layout of this project I took inspiration from <https://www.zelda.com/> and <https://bethesda.net/en/dashboard>. For more
specific features I also received inspiration from our Bootstrap classes creating the Whiskey Drop page and the Rosie Odenkirk resume page. 
