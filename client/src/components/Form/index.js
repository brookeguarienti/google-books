import React from "react";

function Form(props) {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="search">
            <h2>Explore for books here</h2>
          </label>
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search for a Book"
            id="search"
          />
          <button onClick={props.handleFormSubmit} className="btn" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;