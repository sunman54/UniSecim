import "./App.css";
import UniTable from "./components/UniTable";
import { useState } from "react";
import NaviBAR from "./components/NaviBAR";
import FilterBAR from "./components/FilterBar";
import { Row, Col, Badge } from "reactstrap";
import GetApi from "./components/GetApi";

//json-server -p 3001 -w ./src/database/uni.json

function App() {
  const [uniList, setUniList] = useState([]);
  const [searcedUniList, setSearcedUniList] = useState([]);
  const [uniSearch, setUniSearch] = useState("");
  const [click, setClick] = useState(0);
  const [pointClick, setPointClick] = useState(0);
  const [collageList, setCollageList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [departmentList, setDepartmentList] = useState([]);
  const [points, setPoints] = useState({ minPoint: 0, maxPoint: 600 });

  return (
    <div className="pp" style={{ margin: "5px" }}>
      <GetApi
        uniList={uniList}
        setUniList={setUniList}
        searcedUniList={searcedUniList}
        setSearcedUniList={setSearcedUniList}
        uniSearch={uniSearch}
        setUniSearch={setUniSearch}
        click={click}
        setClick={setClick}
        collageList={collageList}
        setCollageList={setCollageList}
        cityList={cityList}
        setDepartmentList={setDepartmentList}
        departmentList={departmentList}
        setCityList={setCityList}
      />
      <Row>
        <Col xs={1}></Col>
        <Col>
          <Row className="Row">
            <NaviBAR></NaviBAR>

            <Col xs={3}>
              <br></br>
              <h4>
                Bölüm Sayısı :{" "}
                <Badge color="success">{searcedUniList.length}</Badge>{" "}
              </h4>

              <FilterBAR
                points={points}
                setPoints={setPoints}
                pointClick={pointClick}
                setPointClick={setPointClick}
              ></FilterBAR>
            </Col>

            <Col xs={9}>
              <UniTable
                uniList={uniList}
                setUniList={setUniList}
                searcedUniList={searcedUniList}
                setSearcedUniList={setSearcedUniList}
                uniSearch={uniSearch}
                setUniSearch={setUniSearch}
                click={click}
                setClick={setClick}
              ></UniTable>
            </Col>
          </Row>
        </Col>
        <Col xs={1}></Col>
      </Row>
    </div>
  );
}

export default App;
