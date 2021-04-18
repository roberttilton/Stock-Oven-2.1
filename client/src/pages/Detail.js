import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
// import Card from "../components/Card";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";

class Saved extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then((res) =>
        this.setState({
          books: res.data,
        })
      )
      .catch((err) => console.log(err));
  };

  handleBookDelete = (id) => {
    API.deleteBook(id).then((res) => this.getSavedBooks());
  };

  render() {
    return (
      // <Container>
      //   <Row>
      //     <Col size="md-12">
      //       <Jumbotron>
      //         <h1 className="text-center">
      //           <strong>(React) Google Books Search</strong>
      //         </h1>
      //         <h2 className="text-center">
      //           Search for and Save Books of Interest.
      //         </h2>
      //       </Jumbotron>
      //     </Col>
      //   </Row>
      //   <Row>
      //     <Col size="md-12">
      //     </Col>
      //   </Row>
      //   <Footer />
      // </Container>
      <div></div>
    );
  }
}

export default Saved;
