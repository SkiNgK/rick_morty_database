import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';

const { Meta } = Card;

export default function CharacterListPage() {
  const [data, setData] = useState([]);
  const API = 'https://rickandmortyapi.com/api/character'
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        API,
      );

      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Row gutter={[16, 48]}>
        {data.results?.map(character => (
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={character.image} />}
            >
              <Meta title={character.name} description={character.email} />
              <div style={{ display: 'flex', flexDirection: 'Column', marginTop: '1rem' }}>
                <p>Last known location:</p>
                <p>First seen in:</p>
              </div>
            </Card>
          </Col>
      ))}
      </Row>
    </div>
  )
}
