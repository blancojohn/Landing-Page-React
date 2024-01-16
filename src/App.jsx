import React from 'react';

const App = () => {
    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {/* sección cards */}
            <div className="container text-center">
                <div className="row">
                    <div className="col-3">
                        <div className="card">
                            <img
                                src="https://picsum.photos/id/19/500/325"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias commodi ducimus laboriosam numquam reiciendis</p>
                            </div>
                            <div className="card-body">
                                <button type="button" class="btn btn-primary">Find Out More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <img
                                src="https://picsum.photos/id/10/500/325"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias commodi ducimus laboriosam numquam reiciendis</p>
                            </div>
                            <div className="card-body">
                                <button type="button" class="btn btn-primary">Find Out More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <img
                                src="https://picsum.photos/id/11/500/325"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias commodi ducimus laboriosam numquam reiciendis</p>
                            </div>
                            <div className="card-body">
                                <button type="button" class="btn btn-primary">Find Out More</button>
                            </div>
                        </div>
                    </div>
                    {/* sección footer */}
                    <div className="col-3">
                        <div className="card">
                            <img
                                src="https://picsum.photos/id/29/500/325"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias commodi ducimus laboriosam numquam reiciendis</p>
                            </div>
                            <div className="card-body">
                                <button type="button" class="btn btn-primary">Find Out More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-flex text-center pt-3">
                <div className="row expand-lg align-items-center p-3 bg-dark">
                    <div className="col-lg">
                        <p className="text-white p-3">Copyright& Your Website 2023</p>
                    </div>
                </div>
            </div>

        </>
    )
}


export default App;
