import './AboutUs.css'
import photoOfMe from './photo-of-me.jpg'
import { Link } from 'react-router-dom'

/**
 * A React component that represents the About Us page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */

const AboutUs = props => {
  return (
    <>
    <div className='content'>
      <div className='written'>
        <h1>About Us</h1>
        <p>My name is Jiayi Chen, but you can call me by my English name Joy. I'm a senior student majoring in data science and computer science. Let me share a bit about myself and my journey so far.</p>
        <h2>A Passion for Data</h2>
        <p>Ever since I was introduced to the world of data, I've been captivated by its power to unveil hidden insights and drive decision-making. My academic journey has revolved around harnessing the potential of data to solve complex problems. From statistical analysis to machine learning algorithms, I've delved into various aspects of data science to deepen my understanding and skills.</p>
        <h2>Bridging Technology and People</h2>
        <p>Computer Science, on the other hand, has given me the tools to bring my data-driven visions to life. I've honed my programming skills, developed software applications, and explored the realms of artificial intelligence. Through these experiences, I've come to appreciate the profound impact technology can have on our lives and society as a whole.</p>
        <h2>Join this Journey</h2>
        <p>I'm thrilled to be in this class that promises to expand my horizons even further. The prospect of diving deeper into the world of software development, understanding the intricacies of coding, and creating innovative software solutions has me brimming with excitement. I can't wait to learn more and apply what I learn to real-world projects.</p>
      </div>
        <div className='image'>
            <Link to="/" className="photoOfMe">
            <img src={photoOfMe} alt="Our fabulous logo" />
            </Link>
        </div>
      </div>
    </>
  )
}

// make this component available to be imported into any other file
export default AboutUs
