import Card from 'react-bootstrap/Card';


function AboutOneself() {
  return (
    <div style={{ display:"flex" , alignItems:"center" , marginTop:"4%" , flexWrap:"wrap" }}>
      <Card border="primary" style={{ width: '18rem', marginLeft: '3%' }}>
     
        <Card.Body>
          <Card.Title>CAREER OBJECTIVE</Card.Title>
          <Card.Text>
          Web-developer
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card border="secondary" style={{ width: '18rem',  marginLeft: '3%' }}>
       
        <Card.Body>
          <Card.Title>CONTACTS</Card.Title>
          <Card.Text>
          +996 706041505
alievamedina@amile.com
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card border="success" style={{ width: '18rem',  marginLeft: '3%' }}>
     
        <Card.Body>
          <Card.Title>EDUCATION</Card.Title>
          <Card.Text>
          Issyk-Kul State University
named after Kasym Tynystanov
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card border="danger" style={{ width: '18rem',  marginLeft: '3%' }}>
        
        <Card.Body>
          <Card.Title>ABOUT ME</Card.Title>
          <Card.Text>
          age 18
year of birth - 15.05.04
Karakol city
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card border="warning" style={{ width: '18rem', marginTop:"8%", marginLeft: '27%' }}>
       
        <Card.Body>
          <Card.Title>LANGUAGES</Card.Title>
          <Card.Text>
          English language
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card border="info" style={{ width: '18rem', marginTop:"8%", marginLeft: '3%' }}>
       
        <Card.Body>
          <Card.Title> <img src="https://icons8.ru/icon/44806/цель" alt="" /> COURSES</Card.Title>
          <Card.Text>
          Maker's
courses
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

       
   
      </div>
    
  );
}

export default AboutOneself;