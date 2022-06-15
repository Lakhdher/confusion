/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Media,
} from "reactstrap";
class DishDetail extends Component {

  renderDish(dish) {
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

  renderComments(comments) {
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
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">{this.renderDish(this.props.dish)}</div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComments(this.props.dish.comments)}
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetail;
