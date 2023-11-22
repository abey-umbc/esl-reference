import AndroidLogo from "../../../public/assets/images/android.png";
import iOSLogo from "../../../public/assets/images/apple.png";
import windowsLogo from "../../../public/assets/images/windows.png";
import accessibilityIcon from "../../../public/assets/images/accessible.png";

const AndroidIcon = (
  <img src={AndroidLogo} alt="android" style={{ width: "16px" }} />
);

const IosIcon = <img src={iOSLogo} alt="ios" style={{ width: "16px" }} />;

const WindowsIcon = (
  <img src={windowsLogo} alt="windows" style={{ width: "16px" }} />
);

const Header = ({
  appName,
  iconSlug,
  platform,
  isAccessible,
  version,
  evaluatedOn,
}) => {
  return (
    <>
      <section className="flex">
        <div
          className="flex big-divider"
          style={{ flexDirection: "column", gap: "4px" }}
        >
          <div className="flex" style={{ alignItems: "center" }}>
            <img
              src={
                new URL(
                  `../../../public/assets/images/${iconSlug}.png`,
                  import.meta.url,
                ).href
              }
              alt="chrome"
            />
            <span style={{ alignItems: "center" }}> {appName} </span>
            <span style={{ marginLeft: "auto" }}>
              <div className="flex">
                {platform === "Android"
                  ? AndroidIcon
                  : platform === "iOS"
                    ? IosIcon
                    : WindowsIcon}
                {isAccessible && (
                  <img
                    src={accessibilityIcon}
                    alt="accessibility"
                    style={{ width: "16px" }}
                  />
                )}
              </div>
            </span>
          </div>

          <div className="flex">
            <span className="small-font"> Version: {version} </span>
            <span className="small-font" style={{ marginLeft: "auto" }}>
              For ages 12+
            </span>
          </div>
          <span className="small-font">Evaluated on: {evaluatedOn} </span>
        </div>
      </section>
    </>
  );
};

export default Header;
