
# Second Milestone Project / Simon Game
____

Simon is an electronic memory game created in real life. The device creates a sequence, displayed by four coloured flashing lights accomapnied by tones, and requires a user to repeat the sequence.
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
* [Cloud9 - AWS](https://c9.io/wiickmar) - This is the IDE used to write and test the code for this project.
* [Git](https://git-scm.com/) - Git is a tool that is used to track and store changes to your codes as you work. It stores your code in a local repository.
* [Github](https://github.com/) - Github is a remote repository used to store our code. It is also used to deploy this project. 

## Testing
In order to ensure the website functioned as expected, all of the testing for this project was done using the browser web developer tools. This was a very 
important tool for me through the creative process as it helped me to isolate where the problems were in my code. The issues that this helped me resolve 
include:

* Navigation bar links:
.. 1. Click each link on the main page to verify they work.
.. 2. Navigate to "Contact" page.
.. 3. Click each link on the "Contact" page to verify that they work.

* Contact form:
.. 1. Go to the "Contact Us" page.
.. 2. Try to submit the empty form and verify that an error message about the required fields appears.
.. 3. Try to submit the form with an invalid email address and verify that an error message appears.
.. 4. Try to submit the form with all inputs valid and verify that a success message appears.

* Subscribe button/ Modal:
.. 1. Click "subscribe" button.
.. 2. Try to submit without any information and verify that an error message about the required fields appears.
.. 3. Try t submit an invalid email address and and verify that a relevant error message appears.
.. 4. Verify that a successful message appears by submitting a valid email address.

* Game download links:
.. 1. Click on the "Games" link in the navigation bar.
.. 2. Click each card to verify that they open up the correct app page in a new tab.

* Social Media links:
.. 1. Go to the footer of the home page.
.. 2. Click each link to verify that they open up the correct social media page in a new tab.

* Hover effects:
.. 1. Hover over any buttons and links in the project.
.. 2. Ensure the use of appropriate color and time transitions to help ensure a good user experience.

* Grid system:
.. 1. Open bwoser developer tools. 
.. 2. Display device toolbar. 
.. 3. Select iPhone 5SE.
.. 4. Review layout for small screen widths.
.. 5. Select Ipad in the device toolbar.
.. 6. Review layout for medium screen widths.
.. 7. Select Laptop in the device toolbar.
.. 8. Review layout for large screen sizes.
.. 9. Make any necessary changes. 

* Layout - mostly padding and margins, to ensure adequate spacing between elements as well as sizing for elements.

* Media queries - certain elements that might overflow such as titles, on very small screen sizes. Viweing the change of elements with screen sizes allowed
  me to make the necessary changes so that elemnts were proportional across differnet screen widths. 

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


### Acknowledgements 
For the main layout of this project I took inspiration from <https://www.zelda.com/> and <https://bethesda.net/en/dashboard>. For more
specific features I also received inspiration from our Bootstrap classes creating the Whiskey Drop page and the Rosie Odenkirk resume page. 
