import './App.css';
import profilePic from './Profile Picture.jpg'

function App() {
  return (
    <div className='body'>
      <div className='profile-container'>
        <img className='profile-picture' src={profilePic} alt="marcos's profile" />
        <div className='profile-div'>
          <div className='name'>Marcos Vrionides</div>
          <div className='occupation'>Software Developer</div>
        </div>
      </div>
      <div className='introduction-container'>
        <div className='emoji'>👋</div>
        <div className='intro'>
          <span className='highlight'>Hey,</span> I’m Marcos a  junior software developer with a passion for building innovative projects and an eagerness to learn and contribute my skills and knowledge to a dynamic team.
        </div>
      </div>
      <div className='projects-container'>
        <div className='projects-title'>
          Projects
        </div>
        <div className='projects-cards'>
          <div className='project'>
            <div className='project-title'>My Lists</div>
          </div>
          <div className='project'>
            <div className='project-title'>StudentsThoughts.com</div>
          </div>
          <div className='project'>
            <div className='project-title'>Connect</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
