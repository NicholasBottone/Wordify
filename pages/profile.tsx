import React from "react";
import {Button, Container, ProgressBar, Image} from "react-bootstrap";
import Link from "next/link"
import {FaExpand} from "react-icons/fa"

export default function Profile() {
return (
<div className="container">
  <div className="row"> 
    <div className="col-sm-6 text-center">
      <br/>
      <br/>
      <br/>
      <br/>
    <Image
        src="/pengu.jpeg"
        alt="Pengu uwu"
        width="200"
        height="200"
        roundedCircle
      />
      <br/>
      <br/>
      <h4>Pingu the Penguin</h4>
      <br/>
      <br/>
      <Link href="/profile" >
            <Button variant ="secondary" size="lg" className="">
              Real Word of the Day <FaExpand />
            </Button> 
          </Link>{' '}
    </div>
      <div className="col-sm-6">
        <Container className="mt-5">
          <Link href="/profile" >
            <Button variant ="secondary" size="sm" className="">
              Dashboard
            </Button> 
          </Link>{' '}
          <Link href="/statistics">
            <Button variant ="light" size="sm">
              Statistics
            </Button>
          </Link>
        </Container>
        <Container className="mt-5 d-grid gap-2">

        </Container>
    </div>
  </div>
</div>
  );
}
