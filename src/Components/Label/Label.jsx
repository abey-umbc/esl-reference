import DeviceResources from "./DeviceResources";
import Header from "./Header";
import Footer from "./Footer";
import Interruptions from "./Interruptions";
import Monetization from "./Monetization";
import Privacy from "./Privacy";
import UserRights from "./UserRights";
import "./Label.css";

const Label = ({
  headerProps,
  interruptionsProps,
  privacyProps,
  monetizationProps,
  userRightsProps,
  deviceResourcesProps,
  type = "summarized",
}) => {
  if (type === "summarized") {
    return (
      <article className="label">
        <h1 className="title">Digital Nutrition Facts</h1>
        <Header {...headerProps} type={type} />
        <Interruptions {...interruptionsProps} type={type} />
        <Privacy {...privacyProps} type={type} />
        <UserRights {...userRightsProps} />
        <Footer />
      </article>
    );
  }
  return (
    <article className="label">
      <h1 className="title">Digital Nutrition Facts</h1>
      <Header {...headerProps} />
      <Interruptions {...interruptionsProps} type={type} />
      <Privacy {...privacyProps} type={type} />
      <UserRights {...userRightsProps} type={type} />
      <Monetization {...monetizationProps} type={type} />
      <DeviceResources {...deviceResourcesProps} type={type} />
      <Footer />
    </article>
  );
};

export default Label;
