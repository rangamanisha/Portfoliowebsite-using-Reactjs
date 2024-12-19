import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import Experience from './components/Experience';

function App() {
  return (
    <div className="app">
    <Header />
    <Section id="about" title="About">
                <p>I am Manisha Ranga, an experienced IT Project Manager, Educator, and Developer passionate about innovation and leadership. With expertise in Agile methodologies, CRM applications, and scalable business solutions, I aim to create impactful projects that drive success.</p>
            </Section>
            <Section id="skills" title="Skills">
                <ul>
                    <li>React JS & JavaScript</li>
                    <li>Microsoft Power Platform</li>
                    <li>CRM Applications</li>
                    <li>Agile Methodologies</li>
                    <li>IT Infrastructure & Enterprise Applications</li>
                </ul>
            </Section>
            <Section id="experience" title={"Experience"}>
            <Experience/>
            </Section>
            <Section id="projects" title="Projects">
                <ul>
                    <li><strong>RBC Real Estate Project:</strong> JIRA-based user story development and market research.</li>
                    <li><strong>CRM Solution:</strong> Dynamics 365 implementation with Power Automate workflows.</li>
                </ul>
            </Section>
            {/* <Section id="blog" title="Blog">
                <p>Coming soon: My thoughts and updates on technology and leadership.</p>
            </Section> */}
            <Section id="resume" title="Resume">
                <p>View my resume <a href="https://docs.google.com/document/d/1MMXKTOIJh6stHEScb223xxTsdYnkSVqU/edit" target="_blank" rel="noopener noreferrer">here</a>.</p>
            </Section>
            
    <Footer/>
   
</div>
  );
}

export default App;
