import React from 'react'
import { Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';

const { Meta } = Card;
const obj = [
  {
    img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    name: 'Sam',
    email: 'somewhere@gmail.com'
  },
  {
    img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    name: 'Sam',
    email: 'somewhere@gmail.com'
  },
  {
    img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    name: 'Sam',
    email: 'somewhere@gmail.com'
  },
  {
    img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    name: 'Sam',
    email: 'somewhere@gmail.com'
  },
  {
    img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    name: 'Sam',
    email: 'somewhere@gmail.com'
  },
  {
    img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    name: 'Sam',
    email: 'somewhere@gmail.com'
  },
  {
    img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    name: 'Sam',
    email: 'somewhere@gmail.com'
  },
  {
    img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    name: 'Sam',
    email: 'somewhere@gmail.com'
  },
  {
    img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    name: 'Mike',
    email: 'anywhere@gmail.com'
  },
  {
    img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    name: 'kal',
    email: 'anywhere@gmail.com'
  },
  {
    img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    name: 'Ash',
    email: 'something@gmail.com'
  }
]

const CharacterList = obj.map((character, index) => {
  return (
    <Col span={6}>
      <Card
        hoverable
        style={{ width: 240, marginTop: '2.5rem' }}
        cover={<img alt="example" src={character.img} />}
      >
        <Meta title={character.name} description={character.email} />
        <div style={{ display: 'flex', flexDirection: 'Column', marginTop: '1rem' }}>
          <p>Last known location:</p>
          <p>First seen in:</p>
        </div>
      </Card>
    </Col>
  )
})



export default function CharacterListPage() {
  return (
    <Row>
          {CharacterList}
    </Row>
  )
}
