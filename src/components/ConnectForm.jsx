import React from "react";

export default class ConnectForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className="flex flex-col items-center mt-16">
        <div className="flex flex-col items-center z-50">
          <h1 className="font-display text-center text-2xl pb-3 text-white">
            Get Updates on Development?
          </h1>
          <div className="w-1/2">
            <form
              onSubmit={this.submitForm}
              action="https://formspree.io/f/xqkgolaa"
              method="POST"
              className="w-full"
            >
              <div>
                <div>
                  <label className="font-display text-white">Email: </label>
                </div>
                <input
                  type="email"
                  name="email"
                  className="p-2 mt-2 rounded focus:outline-none"
                  placeholder="email@email.com"
                />
              </div>

              {status === "SUCCESS" ? (
                <p className="font-display text-green-500">Thanks!</p>
              ) : (
                <button className="bg-white p-2 mt-3 rounded-lg font-display hover:bg-gray-200">
                  Submit
                </button>
              )}
              {status === "ERROR" && (
                <p className="font-display text-red-500 pt-2">
                  Ooops! There was an error.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
