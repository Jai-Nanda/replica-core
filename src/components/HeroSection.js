import logo from './corelogo.png';
import './HeroSection.css';

const HeroSection = () => {
    return (
      <div className='home'>
      <div className='content'>
          <h1>COЯE<span className='number'>14</span></h1>
            <h3>Training Camp Live!</h3>
            <h5>No more wait for <b>Obsession∞.</b></h5>
            <p className="paras">Delhi Public School, Dwarka's tech society, Computer Obsessed Radical Enthusiasts is actively recruiting!.</p>
            <p className="paras">From gaming to design, hacking to music production - say hello to one of the most anticipated school events of the year.
            </p>
          <h6>Register for the training camp now!</h6>
          <div className="buttons">
        <button className="btn-register-hero">Register</button>
        <button className="btn-discord">Join on Discord</button>
      </div>
        </div>
        <img src={logo} alt="Core Logo" />
      </div>

    )
}

export default HeroSection
