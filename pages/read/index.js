import { Container, Header, Info, InfoContainer, InfoNameContainer, InfoWithName, Location, LocationContainer, NameContainer } from "./style";
import { BsWind, BsFillCloudRainHeavyFill, BsFillSunFill, BsFillCloudsFill } from "react-icons/bs"
import { RiCompass3Fill, RiMistFill } from "react-icons/ri"
import { FaTemperatureHigh } from "react-icons/fa"
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export default function Read() {

  const [isLoading, setIsLoading] = useState(true);
  const [selectedLocal, setSelectedLocal] = useState(1);
  const [width, setWidth] = useState(0);
  const [data, setData] = useState({});

  useEffect(() => {
    setIsLoading(false);
    const { innerWidth } = window;
    setWidth(innerWidth);
    api.get(`/estacao/${selectedLocal}`).then(dados => setData(dados.data));
    window.addEventListener("resize", handleResize);
  }, [selectedLocal])

  const handleResize = () => {
    if (typeof window !== "undefined") {
      const { innerWidth } = window;
      width !== innerWidth && setWidth(innerWidth);
    }
  }

  const handleSelectLocation = (location) => {
    setSelectedLocal(location)
  }

  return (
    <>
      {!isLoading && (
      <Container>
        <Header>
          <span>Temperatura: {data.temperatura} °C</span>
        </Header>
        <LocationContainer>
          <Location location="santarosa" selected={selectedLocal === 1} onClick={() => handleSelectLocation(1)}/>
          <Location location="aeroporto" selected={selectedLocal === 2} onClick={() => handleSelectLocation(2)}/>
        </LocationContainer>
        <NameContainer>
          <h2>{data.nome}</h2>
        </NameContainer>
        <InfoContainer>
          <InfoWithName>
              <InfoNameContainer>
                <span>Direção do Vento</span>
              </InfoNameContainer>
            <Info>
              <RiCompass3Fill/>
              <span>{data.direcao}</span>
            </Info>
          </InfoWithName>
          <InfoWithName>
              <InfoNameContainer>
                <span>Velocidade do Vento</span>
              </InfoNameContainer>
            <Info>
              <BsWind/>
              <span>{data.velocidade} Km/h</span>
            </Info>
          </InfoWithName>
          <InfoWithName>
              <InfoNameContainer>
                <span>Pluviometro</span>
              </InfoNameContainer>
            <Info>
              <BsFillCloudRainHeavyFill/>
              <span>{data.pluviometro} mm</span>
            </Info>
          </InfoWithName>
          {width < 1024 && (
            <InfoWithName>
              <Info>
                <FaTemperatureHigh/>
                <span>{data.temperatura} °C</span>
              </Info>
            </InfoWithName>
          )}
          <InfoWithName>
              <InfoNameContainer>
                <span>Umidade</span>
              </InfoNameContainer>
            <Info>
              <RiMistFill/>
              <span>{data.umidade} %</span>
            </Info>
          </InfoWithName>
          <InfoWithName>
              <InfoNameContainer>
                <span>Radiação UV</span>
              </InfoNameContainer>
            <Info>
              <BsFillSunFill/>
              <span>{data.radiacao} mW</span>
            </Info>
          </InfoWithName>
          <InfoWithName>
              <InfoNameContainer>
                <span>Pressão Atmosférica</span>
              </InfoNameContainer>
            <Info>
              <BsFillCloudsFill/>
              <span>{data.pressao} Pa</span>
            </Info>
          </InfoWithName>
        </InfoContainer>
      </Container>
    )}
    </>
  )
}