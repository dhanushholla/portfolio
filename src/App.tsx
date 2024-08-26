
import './App.css'
import { CareerLine } from './components/ui/CareerLine'
import ProfileHead from './components/ui/ProfileHead'
import ProjectGrid from './components/ui/ProjectGrid'
import NavBar from './components/ui/NavBar'
import Carousel from './components/ui/Carousel'
import { image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21,image22,image23,image24,image25,image26,image27,image28,image29 } from './assets/images'

function App() {
  const imageList = [
    { src: image9,  },
    { src: image8,  },
    { src: image10,  },
    { src: image13,  },
    { src: image14,  },
    { src: image16,  },
    { src: image18,  },
    { src: image19,  },
    { src: image25,  },
    { src: image20,  },
    { src: image21,  },
    { src: image6,  },
    { src: image7,  },
    { src: image12,  },
    { src: image15,  },
    { src: image11,  },
    { src: image17,  },
    { src: image22,  },
    { src: image1, },
    { src: image2, },
    { src: image3, },
    { src: image4, },
    { src: image5, },
    { src: image23, },
    { src: image24, },
    { src: image26, },
    { src: image27, },
    { src: image28, },
    { src: image29, },
  ];

  return (

    <div>
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
    </div>

  )
}

export default App
