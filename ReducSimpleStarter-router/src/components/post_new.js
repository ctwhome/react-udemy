import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>
          {field.label}
        </label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  }
  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title for Post"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field
            label="Post Content"
            name="content"
            component={this.renderField}
          />
          <Link to="/" className="btn btn-danger">
            Cancel
          </Link>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  // if error has *any* properties, redux form assuems form is invalid
  const errors = {};

  // !values < 3 && (errors.title = 'It should have more than 3 characters!');

  !values.title && (errors.title = 'Enter a title!');
  !values.categories && (errors.categories = 'Enter a category!');
  !values.content && (errors.content = 'Enter some content!');

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostNewForm',
})(connect(null, { createPost })(PostsNew));
