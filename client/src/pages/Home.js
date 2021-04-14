import React, { Component, useState } from "react";
import API from "../utils/API";

function Home() {
  const [reddit, setReddit] = useState({
    "DD": [],
	"Gain": [],
	"Loss": [],
	"News": [],
	"YOLO": [],
	"Discussion": [],
	"Chart": []
  })
  

  getReddit = () => {
    API.getReddit(state.q)
      .then((res) =>
        setReddit({
          DD: 
        })
      )
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query",
        })
      );
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.getBooks();
  };

  handleBookSave = (id) => {
    const book = this.state.books.find((book) => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
    }).then(() => this.getBooks());
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">
                Search for and Save Books of Interest.
              </h2>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Card title="Book Search" icon="far fa-book">
              <Form
                handleInputChange={/* YOUR CODE HERE */}
                handleFormSubmit={/* YOUR CODE HERE */}
                q={/* YOUR CODE HERE */}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Results">
              {/* Render the arrays of books in this.state. If the array is empty, display the message in this.state */}
              {/* YOUR CODE HERE */}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Home;
