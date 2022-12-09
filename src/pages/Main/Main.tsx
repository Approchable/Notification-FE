import React from 'react'
import NotificationForm from '../../components/form/NotificationForm'
import NavBar from '../../components/Nav/Nav'
import { Container } from 'react-bootstrap';
import {Helmet} from "react-helmet";

export default function Main() {
  return (
    <div>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Approachable Notification</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
      <NavBar/>
      <Container className="p-3">
        <NotificationForm/>
      </Container>
    </div>
  )
}
