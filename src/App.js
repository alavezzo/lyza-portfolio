import './App.css';
import React, {useState} from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';


function App() {
  
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected ] = useState(true);

  const [categories] = useState([
      {
          name: "commercial",
          description: 
              "Photos of grocery stores, food trucks, and other commercial projects",
      },
      { name: "portraits", description: "Potraits of people in my life" },
      { name: "food", description: "Delicious delicacies" },
      { name: "landscape", description: "Fields, farmhouses, waterfalls,and the beauty of nature", },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  
  console.log(aboutSelected);
  return (
    <div>
      <Nav categories = {categories} setCurrentCategory = {setCurrentCategory} currentCategory = {currentCategory} contactSelected={contactSelected} setContactSelected={setContactSelected} aboutSelected={aboutSelected} setAboutSelected={setAboutSelected}></Nav>
      <main>
        { aboutSelected ? (
          <About></About>
        ) : !contactSelected && !aboutSelected ? (
        <>
            <Gallery currentCategory={currentCategory}></Gallery>
        </>
        ): (
           <ContactForm></ContactForm>
        )
      }
      </main>
    </div>
  );
}

export default App;
