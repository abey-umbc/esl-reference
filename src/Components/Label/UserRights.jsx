const UserRights = ({ adsOptOut, accountDel, dataExport }) => {
  return (
    <div id="userrights">
      <div className="User Rights">
        <div className="content">
          <div className="flex" style={{ alignItems: "center" }}>
            <span className="bold">User Rights</span>
          </div>
          <hr className="small-divider" />
          <div className="flex">
            <span>Ads Opt-Out</span>
            <span style={{ marginLeft: "auto" }}>{adsOptOut}</span>
          </div>
          <hr />
          <div className="flex">
            <span>Account Deletion</span>
            <span style={{ marginLeft: "auto" }}>{accountDel}</span>
          </div>
          <hr />
          <div className="flex">
            <span>User Data Export</span>
            <span style={{ marginLeft: "auto" }}>{dataExport}</span>
          </div>
        </div>
      </div>
      <hr className="small-divider" />
    </div>
  );
};

export default UserRights;
