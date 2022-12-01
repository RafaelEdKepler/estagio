import { Container, Header, Info, InfoContainer, InfoNameContainer, InfoWithName, Location, LocationContainer, NameContainer } from "./style";
import { BsWind, BsFillCloudRainHeavyFill, BsFillSunFill, BsFillCloudsFill } from "react-icons/bs"
import { RiCompass3Fill, RiMistFill } from "react-icons/ri"
import { FaTemperatureHigh } from "react-icons/fa"
import { useEffect, useState } from "react";

export default function Read() {

  const [isLoading, setIsLoading] = useState(true);
  const [selectedLocal, setSelectedLocal] = useState("campus");
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setIsLoading(false);
    const { innerWidth } = window;
    setWidth(innerWidth);
    window.addEventListener("resize", handleResize);
  }, [])

  const handleResize = () => {
    if (typeof window !== "undefined") {
      const { innerWidth } = window;      
      width !== innerWidth && setWidth(innerWidth);
    }
  }
  
  const handleSelectLocation = (location) => {
    setSelectedLocal(location)
  }

  const info = {
    "campus": {
      nome: "Campus - Santa Rosa",
      direcao: "Leste",
      velocidade: "45",
      pluviometro: "80",
      temperatura: "25",
      umidade: "25",
      radiacao: "25",
      pressao: "72"
    },
    "aeroporto": {
      nome: "Aeroporto - Santa Rosa",
      direcao: "Norte",
      velocidade: "28",
      pluviometro: "41",
      temperatura: "22",
      umidade: "27",
      radiacao: "32",
      pressao: "42"
    }  
  }

  return (
    <>
      {!isLoading && (      
      <Container>
        <Header>
          <span>Temperatura: 25 °C</span>
        </Header>
        <LocationContainer>
          <Location location="santarosa" selected={selectedLocal === "campus"} onClick={() => handleSelectLocation("campus")}/>
          <Location location="aeroporto" selected={selectedLocal === "aeroporto"} onClick={() => handleSelectLocation("aeroporto")}/>
        </LocationContainer>
        <NameContainer>
          <h2>{info[selectedLocal].nome}</h2>
        </NameContainer>
        <InfoContainer>
          <InfoWithName>
              <InfoNameContainer>
                <span>Direção do Vento</span>
              </InfoNameContainer>
            <Info>
              <RiCompass3Fill/>
              <span>{info[selectedLocal].direcao}</span>
            </Info>
          </InfoWithName>
          <InfoWithName>
              <InfoNameContainer>
                <span>Velocidade do Vento</span>
              </InfoNameContainer>
            <Info>
              <BsWind/>
              <span>{info[selectedLocal].velocidade} Km/h</span>
            </Info>
          </InfoWithName>
          <InfoWithName>
              <InfoNameContainer>
                <span>Pluviometro</span>
              </InfoNameContainer>
            <Info>
              <BsFillCloudRainHeavyFill/>
              <span>{info[selectedLocal].pluviometro} mm</span>
            </Info>
          </InfoWithName>
          {width < 1024 && (
            <InfoWithName>
              <Info>
                <FaTemperatureHigh/>
                <span>{info[selectedLocal].temperatura} °C</span>
              </Info>
            </InfoWithName>
          )}
          <InfoWithName>
              <InfoNameContainer>
                <span>Umidade</span>
              </InfoNameContainer>
            <Info>
              <RiMistFill/>
              <span>{info[selectedLocal].umidade}%</span>
            </Info>
          </InfoWithName>
          <InfoWithName>
              <InfoNameContainer>
                <span>Radiação UV</span>
              </InfoNameContainer>
            <Info>
              <BsFillSunFill/>
              <span>{info[selectedLocal].radiacao}</span>
            </Info>
          </InfoWithName>
          <InfoWithName>
              <InfoNameContainer>
                <span>Pressão Atmosférica</span>
              </InfoNameContainer>
            <Info>
              <BsFillCloudsFill/>
              <span>{info[selectedLocal].pressao}</span>
            </Info>
          </InfoWithName>
        </InfoContainer>
      </Container>
    )}
    </>
  )
}