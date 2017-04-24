    var App = React.createClass({
      render: function() {
        return (
          <div>
            <h1>Siple PSA</h1>
            <ul className="header">
              <li>Home</li>
              <li>Stuff</li>
              <li>Contact</li>
            </ul>
            <div className="content">

            </div>
          </div>
        )
      }
    });

    
    var destination = document.querySelector("#container");

    ReactDOM.render(
      <div>
        <App/>
      </div>,
      destination
    );