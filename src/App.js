import pic from './pic.jpg';
import htmlpic from './htmlic.png';
import csspic from './cssic.png';
import nodejspic from './nodejsic.png';
import reactpic from './reactic.png';
import pythonpic from './pythonic.png';
import jspic from './jsic.png';
import './App.css';

function App() {
  return (
    <div>
      <div id="home" className="home">
        <header id="main-header">
          <div className="header__layout ">
            <div className="menu-main">
              <ul id="menu-main-menu" className="menu-main__list">
                <li className="menu-item"><a href="./index.html#home">home</a></li>
                <li className="menu-item"><a href="./index.html#aboutme">about me</a></li>
                <li className="menu-item"><a href="./index.html#education">education</a></li>
                <li className="menu-item"><a href="./index.html#project">project</a></li>
                <li className="menu-item"><a href="./index.html#contact">contact</a></li>
              </ul>
            </div>
          </div>
        </header>

        <div className="banner">
          <div className="banner-text">
            <h1 className="font">Patiphat Aiamsaartsri Profile</h1>
          </div>
          <div className="banner-image">
            <img src={pic} alt="" />
          </div>
        </div>

        <div id="aboutme" className="about-me" data-bg-text="text">
          <br></br>
          <hr className='new4'></hr>
          <br></br>
          <h2 id='test'>About Me</h2>
          <p>Hi, My name is Patiphat Aiamsaartsri. Student at Thammasat University.<br></br> I'm a third-year computer science student with a fundamental programming knowledge that I can use to advance in the future.</p>
          <div className="box-container">
            <div className="box">
              <div className="box-content black-box">
                <h3>Personal Data</h3>
              </div>
              <div className="txtbox">
                <p>Name: Patiphat Aiamsaartsri<br></br>Age: 21 yr.<br></br>Height: 175 cm<br></br>Weight: 52 kg<br></br>status : studying</p>
              </div>
            </div>
            <div className="box">
              <div className="box-content black-box">
                <h3>My Interests</h3>
              </div>
              <div className="txtbox">
                <p>Frontend<br></br>Backend (Next.js)<br></br>CyberSecurity<br></br>Rest Api<br></br>TypeScript</p>
              </div>
            </div>

            {/* <div className="box">
              <h3>My Skills</h3><br></br>
              <p>HTML/CSS</p>
              <p>JavaScript</p>
              <p>NodeJs</p>
              <p>React</p>
              <p>Python</p>
              <p>Bash</p>
            </div> */}

          </div>
          <div class="my-skills">
            <h2 class="section-title">My Skills</h2>
            <div class="skill-images">
              <img src={htmlpic} alt="Skill 1" />
              <img src={csspic} alt="Skill 2" />
              <img src={jspic} alt="Skill 3" />
              <img src={nodejspic} alt="Skill 4" />
              <img src={reactpic} alt="Skill 5" />
              <img src={pythonpic} alt="Skill 6" />
            </div>
          </div>
        </div>

        <div id="education" className="education">
          <br></br>
          <hr className='new4'></hr>
          <br></br>
          <h2>Education</h2>
          <div className="info">
            <div>
              <h3>Bachelor Degree</h3>
              <li>Computer Science, Thammasat University (Rangsit Campus) 2020 - present <br></br>(GPA 2.94)</li>
            </div>
            <div>
              <h3>High School</h3>
              <li>English-Mathematics Program, Kannasootsuksalai School 2017 - 2019</li>
            </div>
          </div>
        </div>

        <div id="project" className="project">
          <br></br>
          <hr className='new4'></hr>
          <br></br>

          <h2>Project</h2>
          <div className="info">
            <div>
              <h3>Web Development</h3>
              <li>Web Register of Thammasat University (Backend Developer) <br></br>(JavaScript and Node.JS)</li>
              <li>Horpark(Dormitory Management) (Backend Developer) (php and MySQL)</li>
              <li>TU News(Information website for Thammasat University) (Fullstack Developer) (HTML/CSS Node.js JavaScript JSON Docker CI/CD Shellscript)</li>
            </div>
            <div>
              <h3>Software Testing</h3>
              <li>End-to-End testing (Puppeteer on Node.js)</li>
              <li>Backend testing (Supertest on Node.js)</li>
            </div>
            <div>
              <h3>Security Development</h3>
              <li>Cryptography RSA, Signature (Shell script, C)</li>
              <li>Socket programming (Python)</li>
            </div>
          </div>
        </div>

        <div id="contact" className="contact">
          <br></br>
          <hr className='new4'></hr>
          <br></br>
          <h2>Contact</h2>
          <div className="info">
            <div>
              <h3>Phone</h3>
              <li>(+66) 80 048 8107</li>
            </div>
            <div>
              <h3>Email</h3>
              <li>Immanewbies@gmail.com</li>
            </div>
            <div>
              <h3>Github</h3>
              <li>https://github.com/Immanewbies</li>
            </div>
          </div>
        </div>
        <footer id="main-footer">
          <div className="footer__layout">
            <div>
              <p>© 2023 patiphat aiamsaartsri</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
