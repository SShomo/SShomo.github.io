import { Cpu, Gamepad, Palette, Network, Brain, Fish } from 'lucide-react'

export default function Skills() {
  const skills = [
    { name: "C++ (Cat++)", icon: <Cpu className="w-6 h-6 mr-2" /> },
    { name: "Unreal Engine (Unreowl Engine)", icon: <Gamepad className="w-6 h-6 mr-2" /> },
    { name: "Unity (Meownity)", icon: <Gamepad className="w-6 h-6 mr-2" /> },
    { name: "DirectX (DirectWhiskers)", icon: <Palette className="w-6 h-6 mr-2" /> },
    { name: "OpenGL (OpenPurr)", icon: <Palette className="w-6 h-6 mr-2" /> },
    { name: "Game AI (Feline Intelligence)", icon: <Brain className="w-6 h-6 mr-2" /> },
    { name: "Physics Simulation (Cat Physics)", icon: <Cpu className="w-6 h-6 mr-2" /> },
    { name: "Networking (Catwork Protocol)", icon: <Network className="w-6 h-6 mr-2" /> },
    { name: "Shader Programming (Fur Shaders)", icon: <Palette className="w-6 h-6 mr-2" /> }
  ]

  return (
    <section id="skills" className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-amber-800 flex items-center">
        <Fish className="w-6 h-6 mr-2" /> Catastic Skills
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <li key={index} className="bg-amber-100 p-3 rounded shadow text-amber-800 flex items-center">
            {skill.icon}
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  )
}

