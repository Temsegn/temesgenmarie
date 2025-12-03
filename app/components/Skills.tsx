"use client"

import { Canvas } from "@react-three/fiber"
import { Icosahedron, Float, MeshDistortMaterial } from "@react-three/drei"
import { Card, CardContent } from "@/components/ui/card"

function AnimatedIcosahedron() {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Icosahedron args={[1.5, 1]} scale={1.5}>
        <MeshDistortMaterial
          color="#10b981"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.1}
          metalness={0.8}
        />
      </Icosahedron>
    </Float>
  )
}

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 95, color: "from-green-400 to-green-600" },
        { name: "Python", level: 90, color: "from-blue-400 to-blue-600" },
        { name: "PHP", level: 85, color: "from-orange-400 to-orange-600" },
        { name: "Firebase", level: 80, color: "from-cyan-400 to-cyan-600" },
      ],
    },
    {
      title: "Mobile Development",
      skills: [
        { name: "React Native", level: 92, color: "from-blue-400 to-blue-600" },
        { name: "Flutter", level: 88, color: "from-blue-400 to-cyan-600" },
       
      ],
    },
    {
      title: "Databases & Cloud",
      skills: [
        { name: "PostgreSQL", level: 93, color: "from-blue-400 to-blue-600" },
        { name: "MongoDB", level: 90, color: "from-green-400 to-green-600" },
        { name: "Firestore", level: 87, color: "from-orange-400 to-orange-600" },
        { name: "Hive and Share Preferences", level: 85, color: "from-blue-400 to-cyan-600" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "GraphQL", level: 88, color: "from-pink-400 to-pink-600" },
        { name: "Redis", level: 85, color: "from-red-400 to-red-600" },
        { name: "Kubernetes", level: 80, color: "from-blue-400 to-blue-600" },
        { name: "Microservices", level: 90, color: "from-purple-400 to-purple-600" },
      ],
    },
  ]

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional",
    "MongoDB Certified Developer",
    "Docker Certified Associate",
    "Kubernetes Administrator",
    "Scrum Master Certified",
  ]

  return (
    <section id="skills" className="py-32 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.1),transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Skills &</span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-8 rounded-full" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technical skills across modern development stack and emerging technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 border-gray-700/50 hover:border-green-500/50 transition-all duration-500 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <h3 className="text-white font-bold text-xl mb-6">{category.title}</h3>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-3">
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                          <span className="text-green-400 font-bold">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 3D Element */}
          <div className="h-[600px] relative">
            <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
              <ambientLight intensity={0.4} />
              <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
              <pointLight position={[-10, -10, -5]} intensity={0.5} color="#10b981" />
              <AnimatedIcosahedron />
            </Canvas>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Certifications & Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-700/50 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="text-gray-300 font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
