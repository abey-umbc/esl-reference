const Interruptions = ({ notifications, popups, text, type }) => {
  if (type === "summarized") {
    return (
      <div id="interruptions" className="small-divider">
        <div className="content">
          <div className="flex" style={{ alignItems: "center" }}>
            <span className="bold">Average Daily Interruptions</span>
            <span style={{ marginLeft: "auto" }} className="bold">
              8
            </span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <details id="interruptions" open={type != "collapsed"}>
      <summary
        className={
          type != "collapsed" ? "notclickable small-divider" : "small-divider"
        }
      >
        <span className="bold">Average Daily Interruptions</span>
        <span className="value">{notifications + popups + text}</span>
      </summary>

      <div className="content">
        <div className="flex">
          <span style={{ marginLeft: "auto" }} className="small-font">
            # Avg Daily Value
          </span>
        </div>
        <hr />
        <div className="flex">
          <span>Notifications</span>
          <span style={{ marginLeft: "auto" }}>{notifications}</span>
        </div>
        <hr />
        <div className="flex">
          <span>Popups</span>
          <span style={{ marginLeft: "auto" }}>{popups}</span>
        </div>
        <hr />
        <div className="flex">
          <span>Emails/SMS</span>
          <span style={{ marginLeft: "auto" }}>{text}</span>
        </div>
        <hr className="small-divider" />
      </div>
    </details>
  );
};

export default Interruptions;
