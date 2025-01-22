import Header from './components/Header'
import Skills from './components/Skills'
import DemoReels from './components/DemoReels'
import Blog from './components/Blog'
import Contact from './components/Contact'
import WorkHistory from './components/WorkHistory'

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50 bg-[url('/cat-paw-pattern.png')] bg-repeat">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-amber-800">Purr-fect Game Programmer Portfolio</h1>
        <Skills />
        <DemoReels />
        <Blog />
        <Contact />
        <WorkHistory />
      </main>
    </div>
  )
}

