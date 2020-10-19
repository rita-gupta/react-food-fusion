import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Col,
  Label,
  Row,
} from "reactstrap";
import { LocalForm, Control, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  handleInput = (values) => {
    // alert(`Your Comment is \n ${JSON.stringify(values)}`);
    this.toggleModal();
    this.props.postComment(
      this.props.dishId,
      values.rating,
      values.author,
      values.comment
    );
  };

  // handleSubmit = (values) => {
  //   console.log(values)
  //   this.toggleModal();

  // }

  render() {
    return (
      <>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleInput(values)}>
              <Row className='form-group  pl-3 pr-3'>
                <Label htmlFor='rating'>Rating</Label>
                <Control.select
                  model='.rating'
                  className='form-control'
                  name='rating'
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
              </Row>
              <Row className='form-group pl-3 pr-3'>
                <Label htmlFor='author'>Your Name</Label>
                <Control.text
                  model='.author'
                  className='form-control'
                  id='author'
                  name='author'
                  placeholder='Enter Your Name'
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className='text-danger'
                  model='.author'
                  show='touched'
                  messages={{
                    required: "Required ",
                    minLength: " Must be greater than 2 characters",
                    maxLength: " Must be less than 15 characters",
                  }}
                />
              </Row>
              <Row className='form-group pl-3 pr-3'>
                <Label htmlFor='comment'>Your Comment</Label>
                <Control.textarea
                  model='.comment'
                  className='form-control'
                  id='comment'
                  name='comment'
                  rows='6'
                />
              </Row>

              <Button type='submit' color='primary'>
                Submit
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>

        <Button color='secondary' outline onClick={this.toggleModal}>
          <span className='fa fa-pencil fa-lg'></span> Submit Button
        </Button>
      </>
    );
  }
}

export default CommentForm;
