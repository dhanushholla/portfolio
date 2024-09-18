
import './App.css'
import { CareerLine } from './components/ui/CareerLine'
import ProfileHead from './components/ui/ProfileHead'
import ProjectGrid from './components/ui/ProjectGrid'
import NavBar from './components/ui/NavBar'
import Carousel from './components/ui/Carousel'
import { a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image23, image24, image25, image26, image27, image28, image29, a13, a14, a15, a16, a17, a18, a19, a20, a21 } from './assets/images'
import Myloader from './components/ui/Myloader'
import { useState,useEffect } from 'react'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const imageList = [
    {src: a14},
    {src: a19},
    {src: a16},
    { src: image8, },
    { src: image10, },
    { src: image13, },
    {src: a6},
    {src: a13},
    { src: image9, },
    { src: image14, },
    { src: image16, },
    {src: a1},
    {src: a2},
    { src: image18, },
    { src: image19, },
    { src: image25, },
    {src: a12},
    { src: image20, },
    { src: image21, },
    { src: image6, },
    { src: image7, },
    { src: image12, },
    { src: image15, },
    { src: image11, },
    {src: a15},
    {src: a3},
    {src: a4},
    {src: a17},
    {src: a9},
    { src: image17, },
    { src: image22, },
    { src: image1, },
    { src: image2, },
    { src: image3, },
    { src: image4, },
    { src: image5, },
    { src: image23, },
    { src: image24, },
    {src: a5},
    {src: a10},
    {src: a7},
    {src: a11},
    {src: a8},
    { src: image26, },
    { src: image27, },
    {src: a18},
    {src: a20},
    {src: a21},
    { src: image28, },
    { src: image29, },
  ];

  return (<>
  {
      loading ? <><Myloader/></>: (<div>
        <NavBar />
        <div id="about" ><ProfileHead /></div>
        <div id="experience"><CareerLine /></div>
        <div id="projects"><ProjectGrid /></div>
        <div id="passion">
          <div className=' container flex flex-wrap px-4 pt-2 mx-auto text-xl'>Hobbies:</div>
          <div className=' container flex flex-wrap px-4 pt-2 mx-auto'>I love to create and capture moments through AI ✨ and photography 📸. Check out some samples 👇🏻!</div>
          <div className="flex justify-center items-center h-screen">
            <Carousel images={imageList} />
          </div>
        </div>
        <div style={{ textAlign: "center" }}>Made with ❤️ by Dhanush Holla </div>
      </div>)
}
  </>  
  )
}

export default App
