import React, { Component, useEffect, useState } from "react";
import API from "../utils/API";

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

  return (
    <div className="tile is-parent is-7">
				<div className="tile notification is-danger" id="reddit-container">
					<div className="sort-buttons">
						<button className="sort-button" id="reddit-dd" type="button" style={{backgroundColor: "#365b8c"}} data-tip="Due Diligence">DD</button>
						<button className="sort-button" id="reddit-gain" type="button" style={{backgroundColor: "green"}} data-tip="Reported gains">Gain</button>
						<button className="sort-button" id="reddit-loss" type="button" style={{backgroundColor: "crimson"}} data-tip="Reported losses">Loss</button>
						<button className="sort-button" id="reddit-news" type="button" style={{backgroundColor: "goldenrod"}} data-tip="Market news">News</button>
						<button className="sort-button" id="reddit-yolo" type="button" style={{backgroundColor: "cadetblue"}} data-tip="Risky positions">YOLO</button>
						<button className="sort-button" id="reddit-discussion" type="button" style={{backgroundColor: "#b43fc4"}} data-tip="Discussion">Discussion</button>
						<button className="sort-button" id="reddit-chart" type="button" style={{backgroundColor: "orangered"}} data-tip="Chart">Chart</button>
					</div>
					<div id="reddit">
						<div className="no-reddit tooltip"></div>
            {reddit.DD.length ? (
              <ul>
                {reddit.DD.map((post) => (
                  <li>
                        <p>{post.title}</p>
                        <p>{post.author}</p>
                        <p>{post.score}</p>
                        <p>{post.link}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <h3>No Results to Display</h3>
            )}
            {/* {reddit.Gain.length ? (
              <List>
                {reddit.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            {reddit.Loss.length ? (
              <List>
                {reddit.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            {reddit["Daily Discussion"].length ? (
              <List>
                {reddit.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            {reddit.DD.length ? (
              <List>
                {reddit.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            {reddit.DD.length ? (
              <List>
                {reddit.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteBook(book._id)} />
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
