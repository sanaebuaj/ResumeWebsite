import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <h1 className="header">Welcome to My Resume</h1>
      <img src="../me.jpg" alt="Profile Picture" className="profilePic" />
      <p className='Desc'>Description:</p>
      <p className="intro">
        Hi, I'm Sanae Buajlifa, a Software Development student at SAIT with a passion for developing innovative programs. 
        I am skilled in Node.js, React Native, and Next.js, with experience in web development, cloud deployment, and application security. 
        I am dedicated to continuous learning and making meaningful contributions to the tech community.
      </p>
      <div className="socialMedia">
        <p>You can visit my social media profiles to learn more about me:</p>
        <ul>
          <li><a href="https://www.linkedin.com/in/sanae-buajlifa-2a325b282/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/sanaebuaj" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </div>
      <div className="footer">
        <Link href="/resumePage" className="button">Resume</Link>
        <Link href="/contactPage" className="button">Contact</Link>
      </div>
    </div>
  );
}
