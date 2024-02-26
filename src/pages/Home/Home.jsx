import { ScrollRestoration } from "react-router-dom"
import { Choose, Features, Hero, Subcribe, Testimonial } from "../../components"


const Home = () => {
  return (
    <div>
       <ScrollRestoration />
        <Hero />
        <Features />
        <Choose />
        <Testimonial />
        <Subcribe />
        
    </div>
  )
}

export default Home