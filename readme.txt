UI Project 1 - README
Name: Maurice Goldberg
UNI: mg3183
————————————————————————————————————————————————————————————————————————————————
Instructions on how to run the app:
Open the zip file, and double-click index.html. The website will open locally in the browser of your choice. Click on the rectangular text input box in the middle of the screen and type in a location where you want to find out more about local representatives. The location can be a zip code, a state, a city, or a full address. Be sure to capitalize your input appropriately.

Once you’ve entered the location, you can select the “include offices” dropdown menu to choose whether or not to include representatives’ offices in your results. Then select the roles dropdown menu to select with role of representative you wish to see. Do the same for levels. (Note: you do not have to choose a role or a level from the dropdown menu. If you don’t choose, the results will show representatives of all roles and levels). Click submit to submit the search.

You will receive a table with the representatives that fit the location and description provided. If you choose “yes” for “include offices,” then you will have the option of choosing between a table of information on government offices that fit the description or a table of officials that fit the description. You can toggle between these two tables by pressing the “show offices” and “show officials” buttons in the top-right of the screen. You can also start over again by pressing the “back” button on the top-left of the screen.
————————————————————————————————————————————————————————————————————————————————
Dependencies:
No dependencies are necessary to be downloaded. I have included in my zip file all necessary external dependencies. Other than the required script.js and styles.css files, these external dependencies are the following:

CSS:
bootstrap.css
dropdown-enhancement.css

JS:
bootstrap.js
jquery-1.12.3.js
dropdown-enhancement.js
dataTables.bootstrap.min.js
jQuery.dataTables.min.js
—————————————————————————————————————————————————————————————————————————————————
Design process:
First and foremost in the heuristics I considered when making this app was that of minimalist aesthetic and design. I wanted the interface to similar to that of Google’s search bar homepage (like Professor Feiner mentioned in class): simple and uncluttered in its design, but powerful and dynamically responsive in its functionality. For this reason, I chose calming colors like cooled light and navy blue (implemented in CSS). Furthermore, I used CSS and Bootstrap to make buttons, dropdown menus, and text input with a larger value border radius for smoothed edges. Bootstrap font preset also seemed conducive with the soft non-edgy aesthetic I was striving for.

The jQuery implemented fade in and fade out effects present throughout the functionality of the app complemented this theme gesturally as well. With the textbox and filter buttons softly fading into the blue background after the user successfully submits, it creates the sense the website’s interface is actually physical material that is responding in a natural human way to the user. In this manner, I saw this as a confluence of the design heuristic and the visibility of system status. When one of my tables fades in or the textbox fades out, the user is simultaneously experiencing aesthetic pleasure and gaining knowledge of the what the system is currently doing.

I chose to place a header at the top of the screen telling the user what he or she is meant to do. This might classify as “help” by Nielsen’s tenth heuristic, but it was by no means a guide of any sort. I knew that the task was simple enough that minimal guidance beforehand would be needed for the average user, beyond informing them where to put in their location and where to click to apply the filters. I did deliberately make “Enter your location” the most bold-faced letters on the page because I wanted the user to be immediately directed to the most important task at hand. Placing the search bar and filters all in the same place in exactly the middle of the screen works to accomplish that same goal.

Some other aspects of system visibility that I used were the focus feature of the textbox, the hover features of the submit button and dropdown menus, and the shifting size of the dropdown menus, based on the input they received. The focus feature of the textbox and hover feature of the submit button were both made in CSS, and the dropdown menus were made using bootstrap but supplemented by an extension I found at https://behigh.github.io/bootstrap_dropdowns_enhancement/#inputs that gave bootstrap dropdown menus radio capability.

I felt that it was important to use radio dropdown menus over checkboxes or radio checkboxes because there are simply so many potential values for roles and levels that it would have been a lot to ask of the user to mouse over every checkbox and click each one if he or she wants to see all roles and levels. Now, if the user wants to see all roles and levels, the super simply doesn’t have to select anything at all for those values, and they immediately send all the values to the API in the request.

In terms of error prevention, another important heuristic of Nielsen’s, I made sure to tell the user in the form of a jQuery alert pop-up window if the he or she did not enter the location or specify whether or not to include offices. I felt it was important to have the location error prevention pop-up thrown before the include office error prevention pop-up because the location is the most important value for the API’s functionality and requires the most mental work for the user.

In terms of the tables, I again choose bootstrap’s table framework for its smooth edges, consistent with my aesthetic choice. The white of the table matched with the white of the dropdown menu buttons from the homepage. If a value is ever empty or the information for that representative does not exist in the API, I had the table filled with the value “N/A” standing for “Not Available”.

If the user chose to include offices, I gave the user the option of toggling between seeing the offices table and seeing the officials table through the use of two bootstrap buttons. The two categories, offices and officials, seemed like two distinct enough categories that they should be in separate tables. This way, the user can see the roles of government officials around him or her, and the user can also see who his officials are.

I provide the user with the ability to fade back to the homepage to do a new search using a bootstrap button with the label “Back”.

Unfortunately, I was unable to figure out how to paginate in time, and phone number of channels don’t load in the table properly yet, so for the sake of cohesive and professional-looking design, I took them out of the table.
—————————————————————————————————————————————————————————————————————————————————
Citations:
In addition to the external frameworks mentioned above, I implemented algorithms/combinations of methods mentioned on the following webpages:

For help with Javascript string manipulation:
http://stackoverflow.com/questions/5582228/insert-space-before-capital-letters
http://stackoverflow.com/questions/4878756/javascript-how-to-capitalize-first-letter-of-each-word-like-a-2-word-city

The dropdown-enhancement.js and dropdown-enhancement.css files, which allowed me to use bootstrap dropdown menus as dynamic radio inputs, came from the following webpage:
https://behigh.github.io/bootstrap_dropdowns_enhancement/#inputs