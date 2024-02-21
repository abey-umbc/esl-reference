import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Label from "../../Components/Label/Label";
import "./Insights.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

// Import all the props for the different apps
import ChromeProps from "../../data/Labels/Chrome";
import GmailProps from "../../data/Labels/Gmail";
import AppleMusicProps from "../../data/Labels/AppleMusic";
import GoogleMapsProps from "../../data/Labels/GoogleMaps";
import ApplePhotosProps from "../../data/Labels/ApplePhotos";

const Insights = () => {
  const { id } = useParams();
  const types = ["collapsed", "summarized", "expanded", "tabular", "linear"];

  // Map app names to their respective props
  const appProps = {
    chrome: ChromeProps,
    gmail: GmailProps,
    applemusic: AppleMusicProps,
    googlemaps: GoogleMapsProps,
    applephotos: ApplePhotosProps,
  };

  // State to keep track of the current type
  const [currentTypeIndex, setCurrentTypeIndex] = useState(0);
  const currentType = types[currentTypeIndex];

  // Handlers for previous and next navigation
  const goToPrevType = () => {
    if (currentTypeIndex > 0) {
      setCurrentTypeIndex(currentTypeIndex - 1);
    }
  };

  const goToNextType = () => {
    if (currentTypeIndex < types.length - 1) {
      setCurrentTypeIndex(currentTypeIndex + 1);
    }
  };

  // Event listeners for arrow keys
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 37) {
        // Left arrow key
        goToPrevType();
      } else if (event.keyCode === 39) {
        // Right arrow key
        goToNextType();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentTypeIndex, types.length]);

  // Determine the content to render based on the current type and app id
  const renderContent = () => {
    const props = appProps[id.toLowerCase()] || ChromeProps; // Fallback to ChromeProps if id doesn't match
    switch (currentType) {
      case "collapsed":
      case "expanded":
        return <Label type={currentType} {...props} />;
      case "tabular":
        return (
          <img
            src={
              new URL(
                `../../../public/assets/drafts/${id}-tabular.png`,
                import.meta.url,
              ).href
            }
            alt="Tabular"
            style={{ width: "100%" }}
          />
        );
      case "linear":
        return (
          <img
            src={
              new URL(
                `../../../public/assets/drafts/${id}-linear.png`,
                import.meta.url,
              ).href
            }
            alt="Linear"
            style={{ width: "100%" }}
          />
        );
      default:
        return <Label {...props} />;
    }
  };

  return (
    <main>
      <Header />
      <div className="insights-container box">
        <aside className="type-selector">
          <Breadcrumb spacing="8px">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <ChevronLeftIcon />
                Back to Search
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <div>
            <Text fontSize="24px" fontWeight="bold">
              Digital Nutrition Labels
            </Text>
            <Text fontSize="sm" style={{ marginBottom: "20px" }}>
              The labels and values shown are solely for illustrative purposes;
              Actual measurement is in progress.
            </Text>
            <Text fontSize="sm">
              Use the arrows below to explore various Nutrition Label formats.
            </Text>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
            <button onClick={goToPrevType} disabled={currentTypeIndex === 0}>
              <ChevronLeftIcon color={currentTypeIndex === 0 && "gray.200"} />
            </button>
            <Text fontSize="20px" textTransform="capitalize">
              {types[currentTypeIndex] + " Label"}
            </Text>
            <button
              onClick={goToNextType}
              disabled={currentTypeIndex === types.length - 1}
            >
              <ChevronRightIcon
                color={currentTypeIndex === types.length - 1 && "gray.200"}
              />
            </button>
          </div>
        </aside>
        <section className="content-display">{renderContent()}</section>
      </div>
    </main>
  );
};

export default Insights;
