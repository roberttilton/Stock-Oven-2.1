# StockOven
Goal
- Create an interactive program that pulls stock information from the Reddit forum r/wallstreetbets and compares them to a live stock chart pulled from Yahoo Finance. In addition, a chart is added to view the top 5 movers of the day.


User Manual
-First browse through the Reddit forum on the left and choose a stock that a user has posted. Furthermore, you can click on the post to navigate directly to it on Reddit in order to get more information.

- Next, type in the abbreviation for the chosen stock in the search bar to the top right of the page. A suggestion bar is added for the user's convenience. 

- Select your chosen stock and click on the "search" button.

- A chart of your stock will appear directly below showing recent activity for your chosen stock. 

- Below the graph is a box containing the top movers of the day.


Styles Used
- Vanilla CSS
- Bulma
- Javascript
- JQuery


API's Used
- https://www.reddit.com/r/wallstreetbets/top.json'

- https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart?interval=5m&symbol=


Creator Contributions
- Krushil Naik
    - Front-end development
    - Code refactoring

- Robert Tilton
    - Parse Wallsreetbets subreddit
    - Add flare buttons to categorize Reddit posts

- Navid Ebrahimi
    - Fetch Yahoo Finance API
    - Display chart data to page

- Isiah Feeley
    - Develop auto-filling search bar 
    - Attach search bar to search within Yahoo Finance API





[Deployed Link](https://krushilnaik.github.io/StockOven/)




Built with Visual Studio Code



    











