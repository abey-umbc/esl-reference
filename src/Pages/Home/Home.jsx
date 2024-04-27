import { useEffect, useState } from "react";
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
import web from "../../../public/assets/images/web.png";
import mail from "../../../public/assets/images/mail.png";
import music from "../../../public/assets/images/music.png";
import maps from "../../../public/assets/images/maps.png";
import photos from "../../../public/assets/images/photos.png";
import { SearchIcon, ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import "./Home.css";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { name: "UMBC Browser", path: "/app/umbc-browser", image: web },
    { name: "UMBC Email", path: "/app/umbc-email", image: mail },
    { name: "UMBC Music", path: "/app/umbc-music", image: music },
    { name: "UMBC Maps", path: "/app/umbc-maps", image: maps },
    { name: "UMBC Photos", path: "/app/umbc-photos", image: photos },
  ];

  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleInputChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (searchTerm.length) {
      setIsOpen(true);
    }
  }, [searchTerm.length]);

  return (
    <>
      <Header />
      <div className="box" style={{ marginTop: "40px" }}>
        <div className="flex-column">
          <div className="title">
            <h1>Ethical Software: Your rights, our mission.</h1>
            <small>Empowering users with ethical software choices.</small>
          </div>
          <div className="search-box" pointerEvents="none">
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
              <InputRightElement onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </InputRightElement>
            </InputGroup>
            {isOpen && (
              <Card variant="filled" className="app-list">
                <CardBody className="flex-column">
                  {filteredOptions.length > 0 ? (
                    filteredOptions.map((option, index) => {
                      return (
                        <Link
                          to={option.path}
                          key={index}
                          className="hover-fade app-list-item"
                        >
                          <div className="flex">
                            <img
                              src={option.image}
                              className="icon"
                              alt={option.name}
                            />
                            <Text className="app-item-text">{option.name}</Text>
                          </div>
                        </Link>
                      );
                    })
                  ) : (
                    <Text style={{ textAlign: "center" }}>
                      {"No Results Found"}
                    </Text>
                  )}
                </CardBody>
              </Card>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
