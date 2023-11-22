import { useState, useEffect } from "react";

import ad from "../../../public/assets/images/ad.png";
import subscriptionModel from "../../../public/assets/images/subscription-model.png";
import purchases from "../../../public/assets/images/purchases.png";

const Monetization = ({
  usageCost,
  recurringPayments,
  inAppPurchases,
  type,
}) => {
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
    <details id="monetization" open={!collapsed}>
      <summary
        className={
          type != "collapsed" ? "notclickable small-divider" : "small-divider"
        }
        onClick={toggleCollapsed}
      >
        <span className="bold">Monetization</span>
        {collapsed && (
          <span className="value">
            <div className="flex">
              <img
                src={ad}
                style={{ width: "24px", height: "24px" }}
                alt="ads"
              />
              <img
                src={subscriptionModel}
                style={{ width: "24px", height: "24px" }}
                alt="subscription-model"
              />
              <img
                src={purchases}
                style={{ width: "24px", height: "24px" }}
                alt="in-app purchases"
              />
            </div>
          </span>
        )}
      </summary>
      <div className="content">
        <div className="flex">
          <span>Usage Cost</span>
          <span style={{ marginLeft: "auto" }}>
            {usageCost.price}{" "}
            <span className="small-font">({usageCost.note})</span>
          </span>
        </div>
        <hr />
        <div className="flex">
          <span>
            Includes Recurring Payments
            <span className="small-font">
              (Such as Subscriptions, Membership Fees, Service Renewals)
            </span>
          </span>
          <span style={{ marginLeft: "auto" }}>{recurringPayments}</span>
        </div>
        <hr />
        <div className="flex">
          <span>Includes In-App Purchases</span>
          <span style={{ marginLeft: "auto" }}>{inAppPurchases}</span>
        </div>
        <hr className="small-divider" />
      </div>
    </details>
  );
};

export default Monetization;
