const Notification = (props) => {
  let { className, notificationText, img } = props;
  return (
    <div className={`notification-list ${className}`}>
      <img className="img" src={img} alt="img" />
      <p>{notificationText}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <div className="box-container">
      <h1 className="main-heading">Notifications</h1>
      <Notification
        className="info-btn"
        notificationText="Information Message"
        img="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        className="success-btn"
        notificationText="Success Message"
        img="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        className="warning-btn"
        notificationText="Warning Message"
        img="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        className="error-btn"
        notificationText="Error Message"
        img="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
