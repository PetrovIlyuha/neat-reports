import React, { useState } from "react";

const ArticleForm = ({ onSubmit, errors, initialValues }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [description, setDescription] = useState("");
  const [tagList, setTagList] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ foo: "Foo" });
  };
  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            BackendErrorMessages
            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Article Title"
                  />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Article Description in general..."
                  />
                </fieldset>

                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Here you can write your article (in markdown)"
                    rows="10"
                  ></textarea>
                </fieldset>

                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter descriptive tags..."
                  />
                </fieldset>

                <fieldset className="form-group">
                  <button
                    type="submit"
                    className="btn btn-lg pull-xs-right btn-primary"
                  >
                    Publish Now
                  </button>
                </fieldset>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleForm;
