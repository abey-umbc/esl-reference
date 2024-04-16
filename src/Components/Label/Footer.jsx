const Footer = () => {
  return (
    <div className="footer">
      <div
        className="flex"
        style={{ flexDirection: "column", gap: "4px", marginBottom: "6px" }}
      >
        <span className="small-font">
          <span className="annotation">*</span> A prompt may ask you to allow or
          reject this permission once or every time it&apos;s needed, based on
          the app&apos;s privacy settings.
        </span>
        <span className="small-font">
          <span className="annotation">†</span> Not granting this permission may
          reduce app features.
        </span>
      </div>
    </div>
  );
};

export default Footer;
