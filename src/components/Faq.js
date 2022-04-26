import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  Row,
  Col
} from "reactstrap";

export default class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: 1,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(val) {
    this.setState({ open: val });
  }
  

  componentDidMount(){
    console.log(this.props);
  }

  render() {
    return (
      <>
        <Accordion open={this.state.open.toString()} toggle={this.toggle}>
          <AccordionItem>
            <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
            <AccordionBody accordionId="1">
              <strong>This is the first item's accordion body.</strong>
              You can modify any of this with custom CSS or overriding our
              default variables. It's also worth noting that just about any HTML
              can go within the <code>.accordion-body</code>, though the
              transition does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
            <AccordionBody accordionId="2">
              <strong>This is the second item's accordion body.</strong>
              You can modify any of this with custom CSS or overriding our
              default variables. It's also worth noting that just about any HTML
              can go within the <code>.accordion-body</code>, though the
              transition does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
            <AccordionBody accordionId="3">
              <strong>This is the third item's accordion body.</strong>
              You can modify any of this with custom CSS or overriding our
              default variables. It's also worth noting that just about any HTML
              can go within the <code>.accordion-body</code>, though the
              transition does limit overflow.
            </AccordionBody>
          </AccordionItem>
        </Accordion>

         <Row>

          <Col md="4">
            Abhi
          </Col>

          <Col md="4">
            Pandey
          </Col>

          <Col md="4">
            Pandey
          </Col>
          
          <Col md="4">
            Pandey
          </Col>
          
          <Col md="4">
            Pandey
          </Col>
         </Row>


      </>
    );
  }
}
