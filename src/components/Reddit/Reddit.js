import React from 'react';

function Reddit() {
    // Declared variable linking to the Reddit div in the HTML
    var redditContent = document.getElementById('reddit');
    // Declared empty arrays for all flair types 
    var redditDD = [];
    var redditGain = [];
    var redditLoss = [];
    var redditNews = [];
    var redditYolo = [];
    var redditDiscussion = [];
    var redditChart = [];
    // Declared an object with elements with properties for each flair
    var postObject = {
        "DD": redditDD,
        "Gain": redditGain,
        "Loss": redditLoss,
        "News": redditNews,
        "YOLO": redditYolo,
        "Discussion": redditDiscussion,
        "Chart": redditChart
    };

    function renderReddit(flair) {
        redditContent.innerHTML = "";
        // checking if there are any posts to show and returning a statement
        if (postObject[flair].length === 0) {
            console.log("No posts found");

            var deadFlair = $(`<div class="no-reddit">`).get()[0];
            deadFlair.setAttribute("data-dead-flair", `No posts found for flair '${flair}'`);

            redditContent.appendChild(deadFlair);
            return;
        }

        for (const post of postObject[flair]) {
            redditContent.appendChild(post);
        }
    }

    fetch('https://www.reddit.com/r/wallstreetbets/top.json')
        .then(function (response) {
            return response.json();
        })
        .then(
            // function that parses the returned array and applies it where necessary
            function (data) {
                for (var i = 0; i < data.data.children.length; i++) {
                    var redditRedirect = document.createElement('button');

                    // post titles parsing
                    var redditPosts = document.createElement('p');
                    redditPosts.textContent = data.data.children[i].data.title;

                    // username parsing
                    var redditUsers = document.createElement('span');
                    redditUsers.textContent = data.data.children[i].data.author;

                    // upvote/score parsing
                    var redditScore = document.createElement('span');

                    // url parsing, to add permalink to the clickable link functionality
                    const link = data.data.children[i].data.permalink;

                    // adding the results to the page
                    redditRedirect.appendChild(redditPosts);
                    redditRedirect.appendChild(redditUsers);
                    redditRedirect.appendChild(redditScore);
                    redditRedirect.addEventListener("click", function () {
                        window.open(`https://www.reddit.com${link}`, "_blank");
                        // renderPost(`https://www.reddit.com${link}.json`);
                    });
                    // adding classes for styling
                    redditRedirect.classList.add("reddit-post");
                    redditPosts.classList.add("post-title");
                    redditUsers.classList.add("post-author");
                    redditScore.classList.add("post-score");
                    // creating and appending element for the upvote
                    var upvote = document.createElement("i");
                    upvote.className = "fas fa-arrow-up";
                    redditScore.appendChild(upvote);
                    redditScore.append(data.data.children[i].data.score);
                    var currentFlair = data.data.children[i].data.link_flair_text;
                    if (Object.keys(postObject).includes(currentFlair)) {
                        postObject[currentFlair].push(redditRedirect);
                    }
                }
            }
        );

    function sortButton() {
        document.querySelectorAll(".sort-button").forEach(button => {
            button.addEventListener("click", function (event) {
                event.preventDefault();
                renderReddit(event.currentTarget.innerHTML);
            })
        });
    }

    return (
        <div class="tile is-parent is-7">
            <div class="tile notification is-danger" id="reddit-container">
                <div class="sort-buttons">
                    <button class="sort-button" id="reddit-dd" type="button" style="background-color: #365b8c;" data-tip="Due Diligence">DD</button>
                    <button class="sort-button" id="reddit-gain" type="button" style="background-color: green;" data-tip="Reported gains">Gain</button>
                    <button class="sort-button" id="reddit-loss" type="button" style="background-color: crimson;" data-tip="Reported losses">Loss</button>
                    <button class="sort-button" id="reddit-news" type="button" style="background-color: goldenrod;" data-tip="Market news">News</button>
                    <button class="sort-button" id="reddit-yolo" type="button" style="background-color: cadetblue;" data-tip="Risky positions">YOLO</button>
                    <button class="sort-button" id="reddit-discussion" type="button" style="background-color: #b43fc4;" data-tip="Discussion">Discussion</button>
                    <button class="sort-button" id="reddit-chart" type="button" style="background-color: orangered;" data-tip="Chart">Chart</button>
                </div>
                <div id="reddit">
                    <div class="no-reddit tooltip"></div>
                </div>
            </div>
        </div>
    )
}

export default Reddit;

// componentDidMount
// JSX
// 