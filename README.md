
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


## Technology's Used:

* [HTML5](https://www.w3schools.com/html/html5_intro.asp) - a markup language used to create the structure of the webpage.
* [CSS3](https://www.w3schools.com/css/) - used to style the HTML code. 
* [Bootstrap4](https://getbootstrap.com/) - a front-end component library used to build responsive mobile-first desifn for this webpage.
* [JavaScript](https://www.w3schools.com/js/) - the coding language used to write the games functionality.
* [jQuery](https://jquery.com/) - a JavaScript library used for HTML document traversal and manipulation, event handling and animation.
* [Cloud9 - AWS](https://docs.aws.amazon.com/cloud9/latest/user-guide/welcome.html) - This is the IDE used to write and test the code for this project.
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

* Games Buttons:
** 1. Create seperate functions for each buttons animation effects.
** 2. Use jQuery's addClass to highlight different buttons when pressed, and set a timeout function to reomve those classes after half a second.
** 3. Use the play method on the variable for the respective color to play the associated sound.
** 4. Click each colored button to see that the color ias added and removed, ad the game sound plays.
** 5. Use a console.log statement to show that when a button is clicked, the correct nummber is pushed to the user's array.

* FillArray function: 
** 1. Create a console.log function within the function.
** 2. Call the FillArray function when the start button is pressed.
** 3. Check the console to see the array is produced, and is the correct length.

* Start button 
** 1. The start button should run the game.
** 2. Call the fillArray fucntion.                                                       
** 3. Click the start button.
** 4. Check the console for the prefilled array.

* playSequence function: setting the tempo
** 1. Use an anonymouse setInterval function to loop through the prefilled array.
** 2. Depending on the number at the given index of the array, call the relevant animation function.
** 3. Add the playSequence function to the start click event.
** 4. Click the start button and check that the playSequence function plays through the array.
** 5. Go back to the code and set an apprpriate time interval between each animation.

* playSequence function: controlling movement through the array
** 1. Use an if statement within the setInterval function to restrict the animations.
** 2. Cick the start button.
** 3. Check to see that only the first animation function is played.

* playSequence function: controlling button activation
** 1. Set active to true once the sequence is finished.
** 1. Press the start button.
** 2. Allow the sequence to play. 
** 3. Try to click the colored buttons during the animation, making sure they are inactve.
** 4. Try to click the buttons again when the sequence is finished.

* checkPlayerTurn function: recalling the playSequence function
** 1. Use a conditional statment to check the the users choice matches the value at the 0th index of sequenceindex.
** 2. If the players sequence length is equal to the turn + 1, increase the turn value, turn off the buttons, change the counter display and call the playSequence function.
** 3. Add the playSequence function to the start click event.
** 4. Click the start button, allow sequence to play. 
** 5. Click the same colored button.
** 6. Check that the playSequence function is called correctly.

* checkPlayerTurn function: wrong move condition
** 1. Using an else statment, if the players move is wrong, call an alert box to notify the player, call the playSequence function.
** 2. Click the start button allow the sequence to play. 
** 3. Click the worng colored button, check for "wrong move" alert.
** 4. playSequence should resume. 

* Strict button
** 1. Write a a click function that toggles whether strict is true or active.
** 2. If the button is clicked, add a highlight-yellow class and change active to true. If the button is clicked again, remove the class and change active to false.
** 3. Add a console.log statement to display the value of "strict" in the console.
** 4. Click the strict button, check for the color change. Check that "strict" = true in the console.
** 5. Click the button again, check for the color change and check that "strict" = false in the console.
** 6. The button should only be accessible before the user has clicked the start button. Add this condition to the code.
** 7. Click the start button.
** 8. Click the "strict" button. Check that there is no change to value of "Strict" in the console.

* checkPlayerTurn: adding a strict condition
** 1. Add an "else if" condition to the checkPlayerTurn function
** 2. Click the "strict" button.
** 3. Click the "start" button.
** 4. Click the wrong colored button.
** 5. Check for "Game over" alert and game over sound.

* start button: reset game 
** 1. If the start button is clicked again after starting the game, it should rest the game.
** 2. Add an "if/else" condition to control the states of the game.
** 3. Click the start button to start the game. 
** 4. Click the start button again, checking the counter display is reset, all highlight classes are removed, and all values are reset.
** 5. Click the start button again to make sure the game restarts normally. 

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
The design for this game was based off the real life Simon game and this particular build of the game. 
(https://codepen.io/BenLBlood/pen/LGLEoJ).

### Acknowledgements 
To help me get started writing the code for this project, I found various different versions of the game made 
by different people, as well as some tutorials. Below is a list of links to the different code bases I examined 
to get an idea of how to tackle this project:

* https://www.youtube.com/watch?v=n_ec3eowFLQ
* https://www.youtube.com/watch?v=9MTR3V2XpRI
* https://medium.com/front-end-weekly/create-simon-game-in-javascript-d53b474a7416
* https://codepen.io/BenLBlood/pen/LGLEoJ
* https://github.com/bethqiang/simon-game