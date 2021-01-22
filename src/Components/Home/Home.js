import logo1 from '../logo1.svg';
import plus from '../Images/plus.svg';
import google from '../Images/google.svg';
import p from '../Images/p.svg';
import apple from '../Images/apple.svg';
import netflix from '../Images/netflix.svg';
import adobe from '../Images/adobe.svg';
import './Home.css';
import Card from '../Card';
import generate from '../Images/generate.svg';
import design from '../Images/design.svg';
import feedback from '../Images/feedback.svg';
import repeat from '../Images/repeat.svg';
import arrow from '../Images/arrow.svg';
import right from '../Images/right.svg';
import left from '../Images/left.svg';
import idea from '../Images/idea.svg';
import pallete from '../Images/pallete.svg';
import font from '../Images/font.svg';
import library from '../Images/library.svg';
// import ReactPlayer from 'react-player';
import Button from '../Button';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
            <img src={logo1} className="App-logo" alt="logo" />
        </div>
        <div className='first-section'>
          <h1 id='sec1-title'>Become A Better <span className='text-shadow'>UI Designer</span></h1>
          <div className='flex-vertical'>
              <h3 className='c-align'>UI Design Challenge Generator</h3>
              <img className='plus' alt='symdol' src={plus} width='40' height='40' />
              <h3 className='c-align'> Design Feedback Platform</h3>
          </div> 
        <div className='inline-flex'>
           <a href='/Generate'><Button btnname={'Generate Challenge'} Cname={'generate-btn btn'} /></a>
            <Button btnname={'Get Feedbacks(Comming soon)'} Cname={'feedback-btn btn'} />
        </div>
        </div>
      </header>
      <div className='second-section'>
        <h1 id='sec2-title1'>Used by 300,000+ designers</h1>
        <div>
          <img className='img-full' alt='images' src={p} />
          <img className='img-full' alt='images' src={google} />
          <img className='img-full' alt='images' src={apple} />
          <img className='img-full' alt='images' src={netflix} />
          <img className='img-full' alt='images' src={adobe} />
        </div>
        <h1 className='sec2-title2'>How it works</h1>
        <div class='inline-flex'>
          <Card svgs={generate} Ititle={'Generate a challenge'} w={'94'} h={'94'}/>
          <img className='arrow' alt='images' src={arrow} ></img>
          <Card svgs={design} Ititle={'Design the challenge'} w={'94'} h={'94'}/>
          <img className='arrow' alt='images' src={arrow} ></img>
          <Card svgs={feedback} Ititle={'Get feedback & Improve'} w={'94'} h={'94'}/>
          <img className='arrow' alt='images' src={arrow} ></img>
          <Card svgs={repeat} Ititle={'Repeat'} w={'94'} h={'94'}/>
        </div>
      </div>
      <div className='youtube-section'>
        <h1 className='sec2-title2 sec3-title'>Our challenges include</h1>
        <div classname='divider'>
          <img className='float-right' alt='images' src={right}></img>
        </div>
        <div className='inline-flex include'>
        <Card svgs={idea} Ititle={'550 Projects'} cname={'icons'} w={'64'} h={'64'} />
        <Card svgs={pallete} Ititle={'2400 color palettes'} cname={'icons'} w={'64'} h={'64'}/>
        <Card svgs={font} Ititle={'460 Font pairings'} cname={'icons'} w={'64'} h={'64'} />
        <Card svgs={library} Ititle={'Illustrations libraries'} cname={'icons'} w={'64'} h={'64'} />
        </div>
        <div className='divider'>
          <img className='float-left' alt='images' src={left}></img>
        </div>
        <div className='yt'>
          <a href='/Generate'><Button btnname={'Generate Challenge'} Cname={'generate-btn btn'} /></a>
          <center><iframe width="50%" height="320" title='ytvideo' src="https://www.youtube.com/embed/HVPfOq5X02g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
        </div>
      </div>
    </div>
  );
}

export default Home;
