import React, { Component, useEffect, useState } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import "../assets/Home.css";

function Home() {
  const [reddit, setReddit] = useState({
    "DD": [],
    "Gain": [],
    "Loss": [],
    "News": [],
    "YOLO": [],
    "Daily Discussion": [],
    "Chart": []
  });

  const [redditChoice, setRedditChoice] = useState([]);
  const [redditColor, setRedditColor] = useState({
    backgroundColor: ""
  })

  useEffect(() => {
    getReddit();
  }, []);

  const getReddit = () => {
    API.getReddit()
      .then((data) => {
        console.log(data);
        const redditData = data.data.data;
        const postObject = {
          "DD": [],
          "Gain": [],
          "Loss": [],
          "News": [],
          "YOLO": [],
          "Daily Discussion": [],
          "Chart": []
        };
        for (let i = 0; i < redditData.children.length; i++) {
          const currentFlair = redditData.children[i].data.link_flair_text;
          const dataObject = {};
          if (redditData.children[i].data.title) {
            dataObject["title"] = redditData.children[i].data.title
          }
          if (redditData.children[i].data.author) {
            dataObject["author"] = redditData.children[i].data.author
          }
          if (redditData.children[i].data.permalink) {
            dataObject["link"] = redditData.children[i].data.permalink
          }
          if (redditData.children[i].data.score) {
            dataObject["score"] = redditData.children[i].data.score
          }
          if (Object.keys(postObject).includes(currentFlair)) {
            postObject[currentFlair].push(dataObject);
          }
          console.log(dataObject);
        }
        console.log(postObject);
        setReddit({
          ...reddit,
          ...postObject
        })
      }
      )
      .catch((err) => {
        console.log(err)
      });
  };

function handleInputBtn(event) {
  const value = event.target.value;
  setRedditChoice(reddit[value]);
  if (value === "DD") {
    setRedditColor({backgroundColor: "green"});
  }
  if (value === "Gain") {
    setRedditColor({backgroundColor: "yellow"});
  }
  if (value === "Loss") {
    setRedditColor({backgroundColor: "red"});
  }
  if (value === "News") {
    setRedditColor({backgroundColor: "purple"});
  }
  if (value === "YOLO") {
    setRedditColor({backgroundColor: "blue"});
  }
  if (value === "Daily Discussion") {
    setRedditColor({backgroundColor: "pink"});
  }
  if (value === "Chart") {
    setRedditColor({backgroundColor: "brown"});
  }
};

  return (
    <div className="tile is-parent is-7">
				<div className="tile notification is-danger" id="reddit-container">
					<div className="sort-buttons">
						<input className="sort-button" id="reddit-dd" onClick={handleInputBtn} type="button" style={{backgroundColor: "#365b8c"}} value="DD" data-tip="Due Diligence" />
						<input className="sort-button" id="reddit-gain" onClick={handleInputBtn} type="button" style={{backgroundColor: "green"}} value="Gain" data-tip="Reported gains" />
						<input className="sort-button" id="reddit-loss" onClick={handleInputBtn} type="button" style={{backgroundColor: "crimson"}} value="Loss" data-tip="Reported losses" />
						<input className="sort-button" id="reddit-news" onClick={handleInputBtn} type="button" style={{backgroundColor: "goldenrod"}} value="News" data-tip="Market news" />
						<input className="sort-button" id="reddit-yolo" onClick={handleInputBtn} type="button" style={{backgroundColor: "cadetblue"}} value="YOLO" data-tip="Risky positions" />
						<input className="sort-button" id="reddit-discussion" onClick={handleInputBtn} type="button" style={{backgroundColor: "#b43fc4"}} value="Daily Discussion" data-tip="Discussion" />
						<input className="sort-button" id="reddit-chart" onClick={handleInputBtn} type="button" style={{backgroundColor: "orangered"}} value="Chart" data-tip="Chart" />
					</div>
					<div id="reddit">
						<div className="no-reddit tooltip"></div>
            {redditChoice.length ? (
              <List>
                {redditChoice.map((post) => (
                  <ListItem style={redditColor}>
                        <p>{post.title}</p>
                        <p>{post.author}</p>
                        <p>{post.score}</p>
                        <p><a href={"https://www.reddit.com"+post.link} target="_blank">Direct Link</a></p>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            {/* {reddit.Gain.length ? (
              <List>
                {reddit.Gain.map((post) => (
                  <ListItem color="blue">
                        <p>{post.title}</p>
                        <p>{post.author}</p>
                        <p>{post.score}</p>
                        <p>{post.link}</p>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            {reddit.Loss.length ? (
              <List>
                {reddit.Loss.map((post) => (
                  <ListItem>
                        <p>{post.title}</p>
                        <p>{post.author}</p>
                        <p>{post.score}</p>
                        <p>{post.link}</p>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            {reddit.News.length ? (
              <List>
                {reddit.News.map((post) => (
                  <ListItem>
                        <p>{post.title}</p>
                        <p>{post.author}</p>
                        <p>{post.score}</p>
                        <p>{post.link}</p>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            {reddit.YOLO.length ? (
              <List>
                {reddit.YOLO.map((post) => (
                  <ListItem>
                        <p>{post.title}</p>
                        <p>{post.author}</p>
                        <p>{post.score}</p>
                        <p>{post.link}</p>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            {reddit["Daily Discussion"].length ? (
              <List>
              {reddit["Daily Discussion"].map((post) => (
                <ListItem>
                      <p>{post.title}</p>
                      <p>{post.author}</p>
                      <p>{post.score}</p>
                      <p>{post.link}</p>
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
            {reddit.Chart.length ? (
              <List>
                {reddit.Chart.map((post) => (
                  <ListItem>
                        <p>{post.title}</p>
                        <p>{post.author}</p>
                        <p>{post.score}</p>
                        <p>{post.link}</p>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )} */}
					</div>
				</div>
			</div>
  );
}



  export default Home;
