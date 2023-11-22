import { useState } from "react";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";
import {
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  Card,
  CardBody,
  Text,
} from "@chakra-ui/react";
import chrome from "../../../public/assets/images/chrome.png";
import gmail from "../../../public/assets/images/gmail.png";
import music from "../../../public/assets/images/music.png";
import maps from "../../../public/assets/images/google-maps.png";
import photos from "../../../public/assets/images/photos.png";
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";
import "./Home.css";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const options = [
    { name: "Google Chrome", path: "/app/chrome", image: chrome },
    { name: "Gmail", path: "/app/gmail", image: gmail },
    { name: "Apple Music", path: "/app/applemusic", image: music },
    { name: "Google Maps", path: "/app/googlemaps", image: maps },
    { name: "Apple Photos", path: "/app/applephotos", image: photos },
  ];

  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleInputChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  return (
    <main>
      <Header />
      <section className="box" style={{ marginTop: "40px" }}>
        <div className="flex-column">
          <div className="title">
            <h1>Ethical Software: Your right, our mission.</h1>
            <small>Empowering users with ethical software choices.</small>
          </div>
          <div className="box" style={{ padding: "0 20%" }}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <SearchIcon />
              </InputLeftElement>
              <Input
                variant="filled"
                type="search"
                placeholder="Search for an Application, Software / Service"
                onChange={handleInputChange}
              />
              <InputRightElement>
                <ChevronDownIcon />
              </InputRightElement>
            </InputGroup>
            <Card variant="filled" className="app-list">
              <CardBody className="flex-column">
                {filteredOptions.map((option, index) => {
                  return (
                    <Link to={option.path} key={index} className="hover-fade">
                      <div className="flex">
                        <img
                          src={option.image}
                          className="icon"
                          alt={option.name}
                        />
                        <Text>{option.name}</Text>
                      </div>
                    </Link>
                  );
                })}
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
