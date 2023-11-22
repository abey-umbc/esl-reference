import { useEffect, useState } from "react";
import batteryStatus from "../../../public/assets/images/battery-status.png";
import floppyDisk from "../../../public/assets/images/floppy-disk.png";
import browser from "../../../public/assets/images/browser.png";

const DeviceResources = ({ batteryImpact, storage, internet, type }) => {
  const [collapsed, setCollapsed] = useState(() => {
    if (type === "collapsed") {
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (type === "collapsed") {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [type]);

  const toggleCollapsed = (e) => {
    e.preventDefault();
    if (type == "collapsed") {
      setCollapsed(!collapsed);
    }
  };

  return (
    <details id="device-resources" open={!collapsed}>
      <summary
        className={
          type != "collapsed" ? "notclickable small-divider" : "small-divider"
        }
        onClick={toggleCollapsed}
      >
        <span className="bold">Device Resources</span>
        {collapsed && (
          <span className="value">
            <div className="flex">
              <img
                src={batteryStatus}
                style={{ width: "20px", height: "20px" }}
                alt="battery"
              />
              <img
                src={floppyDisk}
                style={{ width: "20px", height: "20px" }}
                alt="storage"
              />
              <img
                src={browser}
                style={{ width: "20px", height: "20px" }}
                alt="internet"
              />
            </div>
          </span>
        )}
      </summary>
      <div className="content">
        <div className="flex">
          <span>Battery Impact</span>
          <span style={{ marginLeft: "auto" }}>
            {batteryImpact}% <span className="small-font">per hour</span>
          </span>
        </div>
        <hr />
        <div className="flex">
          <span>Storage Footprint</span>
          <span style={{ marginLeft: "auto" }}>
            {storage.size} <span className="small-font">{storage.unit}</span>
          </span>
        </div>
        <hr />
        <div className="flex">
          <span>Internet Requirement</span>
          <span style={{ marginLeft: "auto" }}>
            {internet.req + " "}
            {internet.req && (
              <span className="small-font">({internet.dataPh})</span>
            )}
          </span>
        </div>
      </div>
      <hr className="small-divider" />
    </details>
  );
};

export default DeviceResources;
