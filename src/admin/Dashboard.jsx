import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import '../styles/dashboard.css'
import useGetData from '../custom-hooks/useGetData'

const Dashboard = () => {
  const { data: productsData } = useGetData('products')
  const { data: usersData } = useGetData('users')
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col className="lg-3">
              <div className="revenue__box">
                <h5>Total Sales</h5>
                <span>$7890</span>
              </div>
            </Col>
            <Col className="lg-3">
              <div className="orders__box">
                <h5>Order</h5>
                <span>789</span>
              </div>
            </Col>
            <Col className="lg-3">
              <div className="products__box">
                <h5>Total Products</h5>
                <span>{productsData.length}</span>
              </div>
            </Col>
            <Col className="lg-3">
              <div className="users__box">
                <h5>Total Users</h5>
                <span>{usersData.length}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Dashboard