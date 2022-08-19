import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import pic1 from "./assets/svg/bir.svg";
import pic2 from "./assets/svg/iki.svg";
import pic3 from "./assets/svg/uc.svg";
import pic4 from "./assets/svg/dort.svg";
import blog from "./assets/svg/projectpic/blog.png";
import movieapp from "./assets/svg/projectpic/movieapp.png";
import contactapp from "./assets/svg/projectpic/contact.png";
import weather from "./assets/svg/projectpic/weather.png";
import tour from "./assets/svg/projectpic/tour.png";
import check from "./assets/svg/projectpic/checkout.png";
import router from "./assets/svg/projectpic/router.png";
import parallax from "./assets/svg/projectpic/parallax.png";
import member from "./assets/svg/projectpic/member.png";
import linked from "./assets/svg/footerpic/linked.svg";
import githb from "./assets/svg/footerpic/githb.svg";
import mail from "./assets/svg/footerpic/mail.svg";
import call from "./assets/svg/footerpic/call.png";


function App() {
  return (
    <div className="portfol">
      <nav className="navbar navbar-expand-lg bg-light shadow m-0" >
        <div className="container-fluid">
          <a
            className="navbar-brand text-shadow border-bottom border-warning"
            href=""
          >
            Emin DELİGÖZ
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">              
              
            </ul>
            <li className=" nav-item d-flex" role="search">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/emin-deligöz"
                target="_blank"
              >
                <img
                  src="https://www.svgrepo.com/show/368796/linkedin.svg"
                  alt="lknd"
                  className=" nav-link w-100 m-2 pe-3 "
                />
              </a>
              <a
                className="nav-link"
                href="https://github.com/emindlg"
                target="_blank"
              >
                <img
                  src="https://www.svgrepo.com/show/387672/github.svg"
                  alt="lknd"
                  className=" nav-link w-50 m-2"
                />
              </a>
              
            </li>
          </div>
        </div>
      </nav>
      <section className="sec1 ">
        <div className="page1text ms-0 pt-5 border-start border-dark border-2 p-2">
          <h2 style={{ color: "black" }}>
            Hi! I' m{" "}
            <span className="fw-bold fst-italic" style={{ color: "#E4700E" }}>
              Emin DELİGÖZ.
            </span>
          </h2>
          <h5 className="w-100" style={{ color: "white", fontSize: "23px" }}>
            Frontend Developer in web designing and development.
          </h5>
          <h4>Istanbul/TURKEY</h4>
        </div>
        <div className="page1pic">
          <img className="pic1" src={pic1} alt="bir" />
          <img className="pic2" src={pic2} alt="" />
          <img className="pic3" src={pic3} alt="" />
          <img className="pic4" src={pic4} alt="" />
        </div>
      </section>
      <section className="sec2">
        <div className="header1">
          <h2>
            ___<span className="skills1">SkillS</span>___
          </h2>
        </div>
        <div className="header2">
          <a href="https://reactjs.org/" target="_blank">
            <img
              className="reactpic"
              src="http://codemen.com/wp-content/uploads/2016/09/ReactJS.png"
              alt=""
            />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            <img
              className="jspic"
              src="https://cdn.dixie7.com/Content/Upload/blog-ft/20200121094801035_63d19b2f-7a4c-4c89-af7f-91e743aa1d15.png"
              alt=""
            />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
          >
            <img
              className="htmlpic"
              src="https://www.freeiconspng.com/thumbs/html5-icon/html5-icon-5.png"
              alt=""
            />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
          >
            <img
              className="csspic"
              src="https://cdn.pixabay.com/photo/2016/11/19/23/00/css3-1841590_1280.png"
              alt=""
            />
          </a>
          <a
            href="https://getbootstrap.com/docs/5.2/getting-started/introduction/"
            target="_blank"
          >
            <img
              className="bspic"
              src="https://avatars.githubusercontent.com/u/2918581?s=280&v=4"
              alt=""
            />
          </a>
        </div>
      </section>
      <section className="sec3">
          <h2>
            ___<span className="skills1"> PROJECTS </span>___
          </h2>
        <div className="container d-relative">
          
          <div className="row">
            
            <div className="col">
            <div>
              <h5>React Blog App</h5>
            </div>
              <a href="https://emindlg.github.io/react-blogpage/" target="_blank">
                <img id="blog" src={blog} alt="" />
              </a>
            </div>
            <div className="col">
            <div>
              <h5>React Movie App</h5>
            </div>
              <a href="https://emindlg.github.io/firebase-movie-app/" target="_blank">
                <img id="movieapp" src={movieapp} alt="" />
              </a>
            </div>
            <div className="col">
            <div>
              <h5>React Contact App</h5>
            </div>
              <a href="https://emindlg.github.io/react-contactapp/" target="_blank">
                <img id="contactapp" src={contactapp} alt=""  />
              </a>
            </div>
          </div>
          <div class="row">
            <div className="col">
            <div>
              <h5>JS Weather App</h5>
            </div>
              <a href="https://emindlg.github.io/Wheather-App/" target="_blank">
                <img id="weather" src={weather} alt="" />
              </a>
            </div>
            <div className="col">
            <div>
              <h5>React Tour Place Page</h5>
            </div>
              <a href="https://emindlg.github.io/webpage_tourplace/" target="_blank">
                <img id="tour" src={tour} alt="" />
              </a>
            </div>
            <div className="col">
            <div>
              <h5>JS Checkout App</h5>
            </div>
              <a href="https://emindlg.github.io/JavaScript_Project/JavaScript_CheckOut_List_DOM%20with%20Cap/" target="_blank">
                <img id="check" src={check} alt="" />
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col">
            <div>
              <h5>React Router Product App</h5>
            </div>
              <a href="https://emindlg.github.io/router-product/" target="_blank">
                <img id="router" src={router} alt="" />
              </a>
            </div>
            <div className="col">
            <div>
              <h5>HTML-CSS Parallax Webpage</h5>
            </div>
              <a href="https://emindlg.github.io/HTML_CSS-Projects-Assignments/Parallax-Website-Project-Clarusway/" target="_blank">
                <img id="parallax" src={parallax} alt="" />
              </a>
            </div>
            <div className="col">
            <div>
              <h5>HTML/CSS - Grid/Cards</h5>
            </div>
              <a href="https://emindlg.github.io/HTML_CSS-Projects-Assignments/Team%20Member/" target="_blank">
                
                <img id="member" src={member} alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="sec4">
        <footer className="footer d-flex">
          <div className="foot1 p-5">
            <h3>Contact me</h3>            
            <img src={linked} alt="" style={{width: "40px", display: "inline-block", margin: "10px"}}/>
            <a 
            href="https://linkedin.com/in/emin-deligöz" 
            target="_blank"
            style={{textDecoration: "none", color: "white"}}>
              www.linkedin.com/in/emin-deligöz
            </a>
            
            <div>
              <img clasName="githb" src={githb} alt="" style={{width: "37px", display: "inline-block", margin: "10px"}} />
                <a 
                href="https://github.com/emindlg?tab=repositories" 
                target="_blank"
                style={{textDecoration: "none", color: "white"}}>
                  github.com/emindlg?tab=repositories
                </a>
            </div>
            <div>
              <img src={mail} alt="" style={{width: "37px", display: "inline-block", margin: "10px"}} />
              <span>eminddeligoz@gmail.com</span>
            </div> 

              <img src={call} alt="" style={{width: "37px", display: "inline-block", margin: "10px"}}/>
              <span>+905334300767</span> 
          </div>
          <div className="foot2"></div>
        </footer>
      </section>
      <section className="sec5">
        <div className="bottom">
          
        </div>
      </section>

    </div>
  );
}

export default App;
