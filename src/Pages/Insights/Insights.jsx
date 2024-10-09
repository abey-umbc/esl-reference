import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Label from "../../Components/Label/Label";
import { Link } from "react-router-dom";
import "./Insights.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

// Import all the props for the different apps
import webProps from "../../data/Labels/UmbcBrowser";
import mailProps from "../../data/Labels/UmbcEmail";
import musicProps from "../../data/Labels/UmbcMusic";
import mapsProps from "../../data/Labels/UmbcMaps";
import photosProps from "../../data/Labels/UmbcPhotos";

const Insights = () => {
  const { id } = useParams();
  const types = ["collapsed", "summarized", "expanded", "tabular", "linear"];

  // Map app names to their respective props
  const appProps = {
    "example-browser": webProps,
    "example-email": mailProps,
    "example-music": musicProps,
    "example-maps": mapsProps,
    "example-photos": photosProps,
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
    const props = appProps[id.toLowerCase()] || webProps; // Fallback to BrowserProps if id doesn't match
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
              <BreadcrumbLink>
                <Link to="/" className="back-button">
                  <ChevronLeftIcon boxSize={8} />
                  <b>Back to Search</b>
                </Link>
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <button
              onClick={goToPrevType}
              disabled={currentTypeIndex === 0}
              className="nav-button"
            >
              <ChevronLeftIcon
                color={currentTypeIndex === 0 && "gray.500"}
                boxSize={6}
              />
            </button>
            <Text fontSize="20px" textTransform="capitalize" textAlign="center">
              {types[currentTypeIndex] + " Label"}
            </Text>
            <button
              onClick={goToNextType}
              disabled={currentTypeIndex === types.length - 1}
              className="nav-button"
            >
              <ChevronRightIcon
                color={currentTypeIndex === types.length - 1 && "gray.500"}
                boxSize={6}
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
