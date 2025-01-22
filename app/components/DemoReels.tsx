import { Gamepad2, Cat } from 'lucide-react'

export default function DemoReels() {
  const demoReels = [
    { title: "Feline Physics Engine Demo", url: "https://youtube.com/watch?v=demo1" },
    { title: "Cat AI Pathfinding Visualization", url: "https://youtube.com/watch?v=demo2" },
    { title: "Procedural Catnip Level Generation", url: "https://youtube.com/watch?v=demo3" },
  ]

  return (
    <section id="demo-reels" className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-amber-800 flex items-center">
        <Gamepad2 className="w-6 h-6 mr-2" /> Meow-velous Demo Reels
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoReels.map((demo, index) => (
          <div key={index} className="bg-amber-100 p-4 rounded shadow">
            <h3 className="font-semibold mb-2 text-amber-800 flex items-center">
              <Cat className="w-4 h-4 mr-2" /> {demo.title}
            </h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src={demo.url} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

