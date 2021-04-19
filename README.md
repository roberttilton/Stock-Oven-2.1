# StockOven
Goal
- Create an interactive program that pulls stock information from the Reddit forum r/wallstreetbets and compares them to a live stock chart pulled from Yahoo Finance. In addition, a chart is added to view stocks the user has saved to watch.

User Manual
-First browse through the Reddit forum on the left and choose a stock that a user has posted. Furthermore, you can click on the post to navigate directly to it on Reddit in order to get more information.
- Next, type in the abbreviation for the chosen stock in the search bar to the top right of the page. A suggestion bar is added for the user's convenience. 
- Select your chosen stock and click on the "search" button.
- A chart of your stock will appear directly below showing recent activity for your chosen stock. 

Technologies Used
- Javascript
- React
- Material UI
- Morgan

API's Used
- https://www.reddit.com/r/wallstreetbets/top.json'
- https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart?interval=5m&symbol=

Creator Contributions
- Robert Tilton
    - Complete backend call to Reddit API
    - Rebuild functionalities from original StockOven using React
    - Styled completed portions of project

- Navid Ebrahimi
    - Focus on authentication and mysql database manipulation
    - Rebuilt project into frontend, backend, and extras(Vanilla JS code) folder structures to clearly separate package.jsons and keep project work organized
    - Focus on using state and jsx to build a session that updates and renders changes of the input fields as they happen

- Isiah Feeley
    - Develop auto-filling search bar 
    - Attach search bar to search within Yahoo Finance API



Built with Visual Studio Code
