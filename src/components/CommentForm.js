/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Row, Label, Button } from "reactstrap";

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

export default CommentForm;
