import profImage from '../../assets/headshot.jpeg';
import Image from 'react-bootstrap/Image';
import { Container, Jumbotron } from 'react-bootstrap';
function About() {
  return (
    <div>
      {/* <Jumbotron fluid className="bg m-0 d-none d-lg-block">
        <Container className="text-center"></Container>
      </Jumbotron> */}

      <section className='bg-light variant-light p-5'>
        <Container className='text-center'>
          <Image
            src={profImage}
            fluid
            roundedCircle
            className='box-shadow'
            width='50%'
            height='50%'
            alt='cover'
          />
          <h1 className='pt-3'>About Me</h1>
          <div className='my-2 p-0'>
            <p>
              I am driven by a passion for problem solving. Whatever the
              project, the framework, or the goal, it is undoubtedly the
              challenge that drives me. Some people call it an obsession,
              they’re probably right. I understand the importance of the balance
              between form and function, and I know a good team can
              exponentially increase everyone’s potential. As a MERN stack web
              developer I look forward to the many challenges to come and the
              creative process of figuring out how to solve each one.
            </p>
            <span>
              <h2>Tool Kit</h2>
              <p>
                HTML5, CSS, JavaScript-ES6, MVC, OOP ▪ Express, Node, React,
                React-Router, Handlebars ▪ SQLite, MySQL, GraphQL, Sequelize,
                MongoDB, Mongoose, PWAs ▪ Bootstrap, Bulma, Tailwind CSS, JQuery
              </p>
            </span>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default About;
