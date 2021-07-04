### Bugs and Issues

- Google Fonts
    * @import url('https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        * Applied to top of style.css but font not changing. To investigate.
            * Ok Body font-family css is to also be updated...it's late ok...
    * link rel="preconnect" href="https://fonts.gstatic.com"
        link href="https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"
        * Applied to index.html to overwrite font but font not changing. To investigate.
            * Ok Body font-family css is to also be updated...it's late ok...
    
    * As a result of finding reason for why font was not showing have decided to use different fonts Source Serif Pro and Dance Script for Hero text

- Google Maps
    * Applied two google maps to Index.html (Commit 14). When page is re-loaded only one of them is interactive.
        * A potential solution found in stackoverflow to show multiple maps per page: https://stackoverflow.com/questions/4074520/how-to-display-multiple-google-maps-per-page-with-api-v3
            * This has worked but just need to amend location focus for each map, to be done in commit 15
                *solution found by simply creating an additional empty variable :)

- font awesome 5.15.3 cdn from Bootstrap not working
    * Found another 5.15.3 version at cdnjs website: https://cdnjs.com/libraries/font-awesome

- Card collapse on load as opposed to pressing the Read more button
    * Bootstrap has a class = "collapse in" which collapses the div on page load

- Button collapse not working with Bootstrap cdn.com link.
    * Bootstrap site Get Bootstrap.com has recommended links for javascript and jquery: https://getbootstrap.com/docs/4.4/getting-started/introduction/


- Nav bar to collapse when link is pressed for toggler width versions only.
    * JQuery code written but affected menu also for wider versions
        *To investigate

- 2. Alignment to left? 
    * picture tile margin too mush, reduced and alignment works ok now.

