import React, { useState, useEffect } from "react";
import {
  ListGroup,
  ListGroupItem,
  Input,
  InputGroup,
  Button,
  ButtonGroup,
} from "reactstrap";

export default function FilterBar({ points, setPoints }) {
  const [minPoint, setMinPoint] = useState("");
  const [maxPoint, setMaxPoint] = useState("");
  const [pointType, setPointType] = useState("");
  const [city, setCity] = useState("");

  const pointSearchButton = () => {
    if (parseInt(minPoint) > 150 & parseInt(minPoint) < 600 & minPoint<maxPoint) {
      setPoints({ minPoint: minPoint, maxPoint: maxPoint });
    }
    else{console.log('hatalı puan girişi');}
  };

  useEffect(() => {
    console.log(pointType);
  }, [pointType]);
  useEffect(() => {
    console.log(city);
  }, [city]);
  useEffect(() => {
    console.log(points);
  }, [points]);

  const clearButton = () => {
    setMinPoint("");
    setMaxPoint("");
  };

  return (
    <div>
      <p />

      <ListGroup>
        <ListGroupItem action tag="button" disabled>
          <h4>Puan Türü</h4>
        </ListGroupItem>

        <ButtonGroup>
          <Button color="primary" onClick={() => setPointType("SAY")}>
            Sayısal
          </Button>
          <Button color="primary" onClick={() => setPointType("SÖZ")}>
            Sözel
          </Button>
          <Button color="primary" onClick={() => setPointType("EA")}>
            EA
          </Button>
          <Button color="primary" onClick={() => setPointType("DİL")}>
            Dil
          </Button>
        </ButtonGroup>
        <Button color="light" onClick={() => setPointType("")}>
          Tümü
        </Button>
      </ListGroup>

      <br></br>

      <ListGroup>
        <ListGroupItem action tag="button" disabled>
          <h4>Puan Aralığı</h4>
        </ListGroupItem>
        <InputGroup>
          <Input
            value={minPoint}
            placeholder="Min Puan"
            onChange={(e) => setMinPoint(e.target.value)}
          />
          <Input
            value={maxPoint}
            placeholder="Max Puan"
            onChange={(e) => setMaxPoint(e.target.value)}
          />
          <Button color="success" onClick={pointSearchButton}>
            Ara
          </Button>
          <Button color="danger" onClick={clearButton}>
            X
          </Button>
        </InputGroup>
      </ListGroup>

      <br></br>

      <ListGroup>
        <ListGroupItem action tag="button" disabled>
          <h3>Şehirler</h3>
        </ListGroupItem>

        <ListGroupItem action tag="button">
          <Input placeholder="Şehir"></Input>
        </ListGroupItem>
        <ListGroupItem
          action
          //active
          //className={false && 'active'}
          tag="button"
          onClick={()=>setCity('istanbul')}
        >
          İstanbul
        </ListGroupItem>
        <ListGroupItem action tag="button" onClick={()=>setCity('ankara')}>
          Ankara
        </ListGroupItem>
        <ListGroupItem action tag="button" onClick={()=>setCity('izmir')}>
          İzmir
        </ListGroupItem>
        <ListGroupItem action tag="button" onClick={()=>setCity('eskişehir')}>
          Eskişehir
        </ListGroupItem>
      </ListGroup>

      <br></br>

      <ListGroup>
        <ListGroupItem action tag="button" disabled>
          <h3>Bölümler</h3>
        </ListGroupItem>

        <ListGroupItem action tag="button">
          <Input placeholder="Bölüm"></Input>
        </ListGroupItem>
        <ListGroupItem
          action
          //active
          tag="button"
        >
          Tıp
        </ListGroupItem>
        <ListGroupItem action tag="button">
          Bilgisayar mühendisliği
        </ListGroupItem>
        <ListGroupItem action tag="button">
          Hukuk
        </ListGroupItem>
        <ListGroupItem action tag="button">
          Diş Hekimliği
        </ListGroupItem>
      </ListGroup>
      <br></br>
      <ListGroup>
        <ListGroupItem action tag="button" disabled>
          <h3>Üniversiteler</h3>
        </ListGroupItem>

        <ListGroupItem action tag="button">
          <Input placeholder="Üniversite"></Input>
        </ListGroupItem>
        <ListGroupItem
          action
          //active
          tag="button"
        >
          Hacettepe Üniversitesi
        </ListGroupItem>
        <ListGroupItem action tag="button">
          Boğaziçi Üniversitesi
        </ListGroupItem>
        <ListGroupItem action tag="button">
          İTÜ
        </ListGroupItem>
        <ListGroupItem action tag="button">
          Bilkent Üniversitesi
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
