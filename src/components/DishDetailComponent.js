/* eslint-disable no-useless-constructor */
import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Media,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Component } from "react";

/* eslint-disable react/jsx-pascal-case */
import { Control, LocalForm, Errors } from "react-redux-form";
import { Row, Label } from "reactstrap";
function RenderDish({ dish }) {
  if (dish !== null)
    return (
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle heading>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  else return <div></div>;
}

const maxLength = (len) => (value) => !value || value.length <= len;
const minLength = (len) => (value) => value && value.length >= len;

const CommentForm = (props) => {
  return (
    <div>
      <LocalForm onSubmit={(values) => props.onSubmit(values)}>
        <Row className="form-group m-2">
          <Label htmlfor="Rating">Rating</Label>
          <Control.select
            model=".rating"
            name="rating"
            id="rating"
            className="form-control"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Control.select>
        </Row>
        <Row className="form-group m-2">
          <Label htmlfor="Author">Author</Label>
          <Control.text
            model=".author"
            name="author"
            id="author"
            className="form-control"
            validators={{ maxLength: maxLength(15), minLength: minLength(3) }}
          />
          <Errors
            classname="text-danger"
            model=".author"
            show="touched"
            messages={{
              minLength: "Must be greater than 2 numbers",
              maxLength: "Must be 15 characters or less",
            }}
          />{" "}
        </Row>
        <Row className="form-group m-2">
          <Label htmlfor="Comment">Comment</Label>
          <Control.textarea
            model=".comment"
            name="comment"
            id="comment"
            className="form-control"
            rows="6"
          />
        </Row>
        <Row className="form-group m-2">
          <Button type="submit" color="primary" className="mt-2">
            Submit Comment
          </Button>
        </Row>
      </LocalForm>
    </div>
  );
};

function RenderComments({ comments }) {
  if (comments !== null)
    return (
      <div className="container ml-0">
        <h4>Comments</h4>
        <div className="ml-0">
          <Media list className="list-unstyled ml-0">
            {comments.map((comment) => {
              const time = new Date(comment.date);
              const months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ];
              return (
                <Media tag="li">
                  <div className="media-body">
                    <span>{comment.comment}</span>
                    <p>
                      --{comment.author} ,{months[time.getMonth()]}{" "}
                      {time.getDate() + 1} , {time.getFullYear()}
                    </p>
                  </div>
                </Media>
              );
            })}
          </Media>
        </div>
      </div>
    );
  else return <div></div>;
}

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (values) => {
    console.log("current State is " + JSON.stringify(values));
    alert("current State is " + JSON.stringify(values));
    this.toggleModal();
  };

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  render() {
    if (this.props.dish != null) {
      return (
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link to="/menu">Menu</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>Menu</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <RenderDish dish={this.props.dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
              <RenderComments comments={this.props.comments} />{" "}
              <Button outline className="ml-3" onClick={this.toggleModal}>
                <span className="fa fa-solid fa-pencil mr-2"></span> Submit
                Comment
              </Button>
            </div>
          </div>
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
            <ModalBody>
              <CommentForm onSubmit={(values) => this.handleSubmit(values)} />
            </ModalBody>
          </Modal>
        </div>
      );
    }
    return <div></div>;
  }
}

export default DishDetail;
