import React from 'react'
import { useState, useEffect } from 'react'
import {
  Card,
  Col,
  Row,
  Modal,
  Divider,
  Image,
  List
} from 'antd';

const { Meta } = Card;

export default function CharacterListPage() {
  const [chars, setChars] = useState([]);
  const [page, setPage] = useState(1);
  const [episodeFetch, setEpisodeFetch] = useState(1);
  const [totalPage, setTotalPage] = useState(20);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false)
  const [modalData, setModalData] = useState([])
  const [location, setLocation] = useState([])
  const [origin, setOrigin] = useState([])
  const [episodes, setEpisodes] = useState([])
  const [allEpisodes, setAllEpisodes] = useState([])

  const showModal = (character => {
    setVisible(true)
    setModalData(character)
    setLocation(character.location)
    setOrigin(character.origin)
    setEpisodes(character.episode)
    fetchAllEpisodes()
  });

  const handleOk = e => {
    setVisible(false)
  };

  const handleCancel = e => {
    setVisible(false)
  };

  useEffect(() => {
    fetchCharacters();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    fetchAllEpisodes();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [episodeFetch]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  function handleScroll() {
    if ((document.documentElement.clientHeight) >= document.documentElement.scrollHeight ||
      page === totalPage ||
      loading) {
      return;
    }
    setPage(page + 1);
  }

  function fetchCharacters() {
    setLoading(true);
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        setChars([...chars, ...data.results]);
        setLoading(false);
      })
      .catch(e => {

      })
  }

  function fetchAllEpisodes() {
    setLoading(true);
    fetch(`https://rickandmortyapi.com/api/episode?page=1`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        setAllEpisodes([data.results]);
        setLoading(false);
      })
      .then(() => {
        fetch(`https://rickandmortyapi.com/api/episode?page=2`, {
          method: "GET"
        })
          .then(response => {
            return response.json();
          })
          .then(data => {
            setAllEpisodes(allEpisodes.concat(data.results));
          })
      })
  }

  return (
    <div>
      <Row gutter={[60, 48]}>
        {chars?.map((character, index) => (
          <Col span={6}>
            <Card
              onClick={() => {
                showModal(character)
              }}
              key={index}
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={character.image} />}
            >
              <Meta title={character.name} description={character.status} />
              <hr />
              <div style={{ display: 'flex', flexDirection: 'Column', marginTop: '1rem' }}>
                <p>First seen in:</p>
                <p style={{ color: 'gray', fontSize: 'smaller' }}>{character.location.name}</p>
                <p>Last known location:</p>
                <p style={{ color: 'gray', fontSize: 'smaller' }}>{character.origin.name}</p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal
        title="Character Description"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={550}
      >
        <Row style={{ placeContent: 'space-around' }}>
          <Image
            style={{ marginBottom: '2.5rem' }}
            width={200}
            src={modalData.image} />
          <div>
            <Row>
              <div>
                <p style={{ fontWeight: 'bold' }}>Name:</p>
                <p style={{ fontWeight: 'bold' }}>Status:</p>
                <p style={{ fontWeight: 'bold' }}>Species:</p>
                <p style={{ fontWeight: 'bold' }}>Gender:</p>
              </div>
              <div style={{ marginLeft: '2rem' }}>
                <p>{modalData.name}</p>
                <p>{modalData.status}</p>
                <p>{modalData.species}</p>
                <p>{modalData.gender}</p>
              </div>
            </Row>
            <p style={{ fontWeight: 'bold' }}>Origin:</p>
            <p style={{ fontSize: 'smaller' }}>{origin.name}</p>
            <p style={{ fontWeight: 'bold' }}>Last Know Location:</p>
            <p style={{ fontSize: 'smaller' }}>{location.name}</p>
          </div>
        </Row>
        <Divider orientation="left">Episodes</Divider>
        <List
          size="small"
          bordered
          dataSource={episodes}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </Modal>
      {loading && page > 1 && <p>loading</p>}
    </div>
  )
}
