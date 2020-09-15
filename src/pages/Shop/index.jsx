import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ShopItemCard from '../../components/ShopItemCard'
import { HashLink as Link } from 'react-router-hash-link';
import "./style.scss"

export default function Shop() {

  const shopItemData = [
    {
      name: "The Five Elements",
      price: 10.99,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      image: "../../img/5elements.jpg",
      score: 4,
      tags: ["feng shui", "book"] 
    },
    {
      name: "The Good Vibes Starter Kit",
      price: 29.99,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      image: "../../img/starter.jpg",
      score: 4.5,
      tags: ["feng shui", "spirituality"] 
    },
    {
      name: "Rosewood Face Cream",
      price: 14.99,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      image: "../../img/rosewood.jpg",
      score: 4,
      tags: ["beauty", "skincare"] 
    },
    {
      name: "Metal Bowl Set",
      price: 29.99,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      image: "../../img/metal.jpg",
      score: 3.5,
      tags: ["feng shui"] 
    },
    {
      name: "Rejuvenative Body Lotion",
      price: 21.99,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      image: "../../img/body.jpg",
      score: 4,
      tags: ["beauty", "skincare"] 
    },
    {
      name: "Lavender Essential Oil",
      price: 7.99,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      image: "../../img/oil.jpg",
      score: 5,
      tags: ["beauty", "skincare"] 
    },
  ];

  console.log(shopItemData)
    return (
    <Container>
      <Row>
        <Col lg={3} className="my-4">
          <div class="list-group">
            <Link to="#">All</Link>
            <Link to="#">Feng Shui</Link>
            <Link to="#">Beauty</Link>
            <Link to="#">Spirituality</Link>
            <Link to="#">Books</Link>
          </div>

          {/* <!-- Search form --> */}
        <div class="md-form my-4">
          <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
        </div>
        </Col>
        {/* <!-- /.col-lg-3 --> */}

        <Col lg={9} className="my-4">
          <Row>
            
            <ShopItemCard />
            <ShopItemCard />
            <ShopItemCard />
            
          </Row>
          {/* <!-- /.row --> */}
        </Col>
        {/* <!-- /.col-lg-9 --> */}
      </Row>
      {/* <!-- /.row --> */}
    </Container>
    /* <!-- /.container --> */
   
    )
}
