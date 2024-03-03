import React from 'react'
import "./bookatable.css"

function bookatable() {
    return (
        <section className="booktable">
            <div className="container-bookatable">
                <div className="booktable-title">
                    <h1>Book a <span>Table</span> </h1>
                    <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci <br /> expedita at voluptas atque vitae autem.</p>
                </div>
                <div className="container-booktable">
                    <form role="form" method="post">
                        <div className="row form-group">
                            <div className="col-md-4 form-group mt-4">
                                <input
                                    type="text"
                                    placeholder="first-name"
                                    className="form-control"
                                    required
                                ></input>
                            </div>
                            <div className="col-md-4 form-group mt-4 mt-md-o">
                                <input
                                    type="text"
                                    placeholder="last-name"
                                    className="form-control"
                                    required
                                ></input>
                            </div>
                            <div className="col-md-4 form-group mt-4 mt-md-o">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="form-control"
                                    required
                                ></input>
                            </div>
                        </div>
                        <div className="row form-group ">
                            <div className="col-md-4 form-group mt-4">
                                <input
                                    type="text"
                                    placeholder="Date"
                                    className="form-control"
                                    required
                                ></input>
                            </div>
                            <div className="col-md-4 form-group mt-4 mt-md-o">
                                <input
                                    type="text"
                                    placeholder="Time"
                                    className="form-control"
                                    required
                                ></input>
                            </div>
                            <div className="col-md-4 form-group mt-4 mt-md-o">
                                <input
                                    type="text"
                                    placeholder="No of people"
                                    className="form-control"
                                    required
                                ></input>
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <textarea
                                name="msg"
                                placeholder="message"
                                id=""
                                cols="30"
                                rows="5"
                                className="form-control"
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit">send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default bookatable
