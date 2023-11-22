import React, { useId } from "react";

const Privacy = ({ permissions, dataHandling, updateAlerts, type }) => {
  const id = useId();
  let keys = permissions;
  if (type === "summarized") {
    keys = {
      camera: { ...permissions.camera },
      mic: { ...permissions.mic },
      photos: { ...permissions.photos },
      loc: { ...permissions.loc },
    };
  }
  let permissionsContent = (
    <>
      <summary className={type != "collapsed" ? "notclickable" : ""}>
        <span style={{ fontWeight: "400" }}>Access to </span>
        <span
          style={{ marginLeft: "auto", fontWeight: 400 }}
          className="small-font"
        >
          (Camera, Mic, Photos, ...)
        </span>
        <hr />
      </summary>
      <div className="content">
        {Object.values(keys).map((permission) => {
          return (
            <React.Fragment key={id + permission.label}>
              <div className="flex">
                <span>{permission.label}</span>
                <span style={{ marginLeft: "auto" }}>
                  {permission.access}
                  <span className="annotation">
                    {permission.prompts && "*"} {permission.limits && "†"}
                  </span>
                </span>
              </div>
              <hr />
            </React.Fragment>
          );
        })}
        <hr className="xsmall-divider" />
      </div>
    </>
  );
  return (
    <div id="privacy">
      <div className="content">
        <div className="flex" style={{ alignItems: "center" }}>
          <span className="bold">Privacy</span>
        </div>
        <hr className="small-divider" />
        {type === "default" ? (
          <div className="permissions">{permissionsContent}</div>
        ) : (
          <details className="permissions" open={type != "collapsed"}>
            {permissionsContent}
          </details>
        )}
        {type === "summarized" ? (
          <>
            <div className="flex">
              <span>Data Collection and Sharing</span>
              <span style={{ marginLeft: "auto" }}>Yes</span>
            </div>
            <hr />
          </>
        ) : (
          <>
            <details className="datahandling" open={type != "collapsed"}>
              <summary className={type != "collapsed" ? "notclickable" : ""}>
                <span style={{ fontWeight: 400 }}>
                  Data Handling and Sharing
                </span>
              </summary>
              <hr />
              <div className="content">
                <div className="flex">
                  <span>Data Collection</span>
                  <span style={{ marginLeft: "auto" }}>
                    {dataHandling.dataCollection}
                  </span>
                </div>
                <hr />
                <div className="flex">
                  <span>Data Transmission Freq</span>
                  <span style={{ marginLeft: "auto" }}>
                    {dataHandling.dataTransmissionFreq}
                  </span>
                </div>
                <hr />
                <div className="flex">
                  <span>Third Party Sharing</span>
                  <span style={{ marginLeft: "auto" }}>
                    {dataHandling.thirdPartySharing + " "}
                    {dataHandling.thirdPartySharingConsent && (
                      <span className="small-font">(With Consent)</span>
                    )}
                  </span>
                </div>
              </div>
            </details>
            <hr />
          </>
        )}
        <div className="flex">
          <span>
            Update Alerts{" "}
            <span className="small-font">
              (Terms of Service, Privacy Policy)
            </span>
          </span>
          <span style={{ marginLeft: "auto" }}>{updateAlerts}</span>
        </div>
      </div>
      <hr className="small-divider" />
    </div>
  );
};

export default Privacy;
