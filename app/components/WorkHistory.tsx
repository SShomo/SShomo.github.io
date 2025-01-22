import { Briefcase, Cat } from 'lucide-react'

export default function WorkHistory() {
  const workHistory = [
    {
      company: "Pawsome Games Studio",
      position: "Senior Feline Game Programmer",
      period: "2020 - Present",
      description: "Lead programmer for the cat physics engine team, optimizing performance and implementing new features for realistic cat movement and behavior."
    },
    {
      company: "Whisker Interactive",
      position: "Founder & Lead Paw-grammer",
      period: "2018 - 2020",
      description: "Developed and released two successful indie games featuring cats, focusing on innovative gameplay mechanics inspired by feline behavior."
    },
    {
      company: "Purr-fect Mobile Games",
      position: "Junior Cat Game Developer",
      period: "2016 - 2018",
      description: "Worked on various mobile game projects, implementing cat-themed game logic and UI systems for engaging feline-centric experiences."
    }
  ]

  return (
    <section id="work-history" className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-amber-800 flex items-center">
        <Briefcase className="w-6 h-6 mr-2" /> Whisker Work History
      </h2>
      <div className="space-y-6">
        {workHistory.map((job, index) => (
          <div key={index} className="bg-amber-100 p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-amber-800 flex items-center">
              <Cat className="w-5 h-5 mr-2" /> {job.position}
            </h3>
            <p className="text-amber-600">{job.company} | {job.period}</p>
            <p className="mt-2 text-amber-900">{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

