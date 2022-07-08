import React from "react";
import { Table, Button, InputGroup, Input } from "reactstrap";

export default function UniTable({
  uniList,
  setUniList,
  searcedUniList,
  setSearcedUniList,
  uniSearch,
  setUniSearch,
  click,
  setClick,
}) {
  const onChangeInput = (e) => {
    setUniSearch(e.target.value);
    if (e.key === "Enter") {
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setClick(click + 1);
    }
  };

  return (
    <div>
      <br></br>
      <InputGroup>
        <Input
          name="fullName"
          placeholder="Universite &  Şehir & Bölüm"
          onChange={onChangeInput}
          onKeyDown={handleKeyDown}
        />
        <Button color="success" onClick={() => setClick(click + 1)}>
          ARA
        </Button>
      </InputGroup>

      <br></br>

      <Table dark hover responsive striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Üniversite İsmi</th>
            <th>Bölüm</th>
            <th>Puan Türü</th>
            <th>Min. Puan</th>
            <th>Max. Puan</th>
          </tr>
        </thead>

        <tbody>
          {searcedUniList.map((uni, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{uni.name}</td>
              <td>{uni.department}</td>
              <td>{uni.point_type}</td>
              <td>{uni.min_point}</td>
              <td>{uni.max_point}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
