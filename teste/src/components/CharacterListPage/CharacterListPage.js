import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';

const { Meta } = Card;

export default function CharacterListPage() {
  const [chars, setChars] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(20);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  useEffect(() => {
    document.addEventListener('scroll', function (event) {
      if (document.body.scrollHeight === 
          document.body.scrollTop +        
          window.innerHeight) {
          alert("Bottom!");
      }
  });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  function handleScroll() {
    if ((document.documentElement.clientHeight)>=document.documentElement.scrollHeight ||
      page === totalPage ||
      loading) {
        return;
      }
      console.log('aq')
    setPage(page + 1);
  }

  function getPosts() {
    setLoading(true);
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data.results)
        setChars([...chars, ...data.results]);
        setLoading(false);
      });
  }

  return (
    <div>
      <Row gutter={[60, 48]}>
        {chars?.map(character => (
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
      {loading && page > 1 && <p>loading</p>}
    </div>
  )
}
