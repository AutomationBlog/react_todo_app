import "./todoapp.css";

export default function Todo() {
  return (
    <>
      <header>
        <div className="container-lg position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="text-center">
                <h1 className="mb-5 mt-5">My ToDo</h1>
                <form className="row g-3 justify-content-center">
                  <div className="col-auto">
                    <input
                      type="text"
                      className="form-control"
                      id="todoName"
                      placeholder="ToDo Name..."
                    />
                  </div>
                  <div className="col-auto">
                    <input
                      type="text"
                      className="form-control"
                      id="todoDescription"
                      placeholder="ToDo Description..."
                    />
                  </div>
                  <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">
                      Add ToDo
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="container-lg">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Status
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Yet to Start
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          In Progress
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Completed
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Status
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Yet to Start
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          In Progress
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Completed
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content.
                  </p>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Status
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Yet to Start
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          In Progress
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Completed
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Status
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Yet to Start
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          In Progress
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Completed
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
