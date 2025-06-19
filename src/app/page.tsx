"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, MessageCircle } from "lucide-react";
import ProjectsCard, { Project } from "../components/ui/ProjectsCard";

export default function Component() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex flex-col items-center py-8 px-4 bg-gradient-to-b from-gray-200 via-gray-100 to-white">
        <div className="mb-6">
          <Image
            src="/images/SHIRZO_logo.png"
            alt="SHIRAZO Architecture House"
            width={220}
            height={130}
            className="object-contain drop-shadow-lg"
          />
        </div>

        {/* Navigation Tabs */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full max-w-4xl"
        >
          <TabsList className="grid w-fit md:w-full grid-cols-4 bg-gray-300 rounded-lg  shadow-md border border-gray-400">
            <TabsTrigger
              value="Home"
              className="h-10 data-[state=active]:bg-[rgba(178,176,150,0.9)] data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:font-semibold text-gray-700 hover:bg-gray-200 transition-all duration-200 rounded-md px-4 py-2 text-center m-1"
            >
              Home
            </TabsTrigger>
            <TabsTrigger
              value="Projects"
              className="h-10 data-[state=active]:bg-[rgba(178,176,150,0.9)] data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:font-semibold text-gray-700 hover:bg-gray-200 transition-all duration-200 rounded-md px-4 py-2 text-center m-1"
            >
              Projects
            </TabsTrigger>
            <TabsTrigger
              value="about"
              className="h-10 data-[state=active]:bg-[rgba(178,176,150,0.9)] data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:font-semibold text-gray-700 hover:bg-gray-200 transition-all duration-200 rounded-md px-4 py-2 text-center m-1"
            >
              About Us
            </TabsTrigger>
            <TabsTrigger
              value="students"
              className="h-10 w-full data-[state=active]:bg-[rgba(178,176,150,0.9)] data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:font-semibold text-gray-700 hover:bg-gray-200 transition-all duration-200 rounded-md px-4 py-2 text-center m-1"
            >
              Students
            </TabsTrigger>
          </TabsList>

          <TabsContent value="Home" className="space-y-6">
            <div className="mt-8">
              <div className="bg-sage-100 rounded-lg p-8 mb-8">
                <div className="relative flex justify-center">
                  <div className="relative z-10 aspect-[9/16] bg-white rounded-lg shadow-sm overflow-hidden max-w-sm md:max-w-md lg:max-w-lg">
                    <video
                      className="w-full object-cover"
                      style={{
                        height: "120%",
                        marginTop: "-10%",
                        objectPosition: "center 20%",
                      }}
                      src="/video/BALI.mp4"
                      autoPlay
                      loop
                      muted
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="Projects" className="space-y-6">
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(() => {
                const projects: Project[] = [
                  {
                    id: 1,
                    title: "TLV Music Studies Center",
                    shortDescription:
                      "Contemporary design with clean lines and natural materials",
                    fullDescription:
                      "An advanced music learning center in Tel Aviv that combines contemporary design with natural materials. The project includes recording studios, classrooms, and public spaces open to the community.",
                    location: "Tel Aviv, Israel",
                    year: "2024",
                    client: "Tel Aviv Municipality",
                    area: "2,500 sqm",
                    images: [
                      "/images/TLV Music studies center/2.jpg",
                      "/images/TLV Music studies center/3.jpg",
                      "/images/TLV Music studies center/7.jpg",
                      "/images/TLV Music studies center/פנים 1.jpg",
                    ],
                  },
                  {
                    id: 2,
                    title: "synagouge  Racevet street Jerusalem",
                    shortDescription:
                      "Functional and elegant kitchen design with premium finishes",
                    fullDescription:
                      "A state-of-the-art kitchen design that combines luxury with functionality.",
                    location: "Jerusalem, Israel",
                    year: "2023",
                    client: "Private Residence",
                    area: "45 sqm",
                    images: [
                      "/images/synagouge  Racevet street Jerusalem/חוץ 3.jpg",
                      "/images/synagouge  Racevet street Jerusalem/חוץ 4.jpg",
                      "/images/synagouge  Racevet street Jerusalem/פנים 2.jpg",
                    ],
                  },
                  {
                    id: 3,
                    title: "Sygnature rest ramat gan",
                    shortDescription:
                      "Peaceful retreat with thoughtful lighting and textures",
                    fullDescription:
                      "A bedroom design focused on creating a peaceful sanctuary.",
                    location: "ramat gan, Israel",
                    year: "2023",
                    client: "Private Residence",
                    area: "25 sqm",
                    images: [
                      "/images/Sygnature rest ramat gan/1.jpg",
                      "/images/Sygnature rest ramat gan/2.jpg",
                      "/images/Sygnature rest ramat gan/3.jpg",
                      "/images/Sygnature rest ramat gan/4.jpg",
                    ],
                  },
                  {
                    id: 4,
                    title: "Broshim dorms",
                    shortDescription:
                      "Peaceful retreat with thoughtful lighting and textures",
                    fullDescription:
                      "A bedroom design focused on creating a peaceful sanctuary.",
                    location: "ramat gan, Israel",
                    year: "2023",
                    client: "Private Residence",
                    area: "25 sqm",
                    images: [
                      "/images/Broshim dorms/1.jpg",
                      "/images/Broshim dorms/p1.jpg",
                      "/images/Broshim dorms/p3.jpg",
                    ],
                  },
                  {
                    id: 5,
                    title: "Beit -el winery",
                    shortDescription:
                      "Peaceful retreat with thoughtful lighting and textures",
                    fullDescription:
                      "A bedroom design focused on creating a peaceful sanctuary.",
                    location: "ramat gan, Israel",
                    year: "2023",
                    client: "Private Residence",
                    area: "25 sqm",
                    images: [
                      "/images/Beit -el winery/1.jpg",
                      "/images/Beit -el winery/עיצוב פנים 3.jpg",
                    ],
                  },
                  {
                    id: 6,
                    title: "academic center- Hemdat - ODEM BIULDING",
                    shortDescription:
                      "Peaceful retreat with thoughtful lighting and textures",
                    fullDescription:
                      "A bedroom design focused on creating a peaceful sanctuary.",
                    location: "ramat gan, Israel",
                    year: "2023",
                    client: "Private Residence",
                    area: "25 sqm",
                    images: [
                      "/images/academic center- Hemdat - ODEM BIULDING/WhatsApp Image 2024-11-15 at 10.02.22.jpeg",
                      "/images/academic center- Hemdat - ODEM BIULDING/WhatsApp Image 2024-11-15 at 10.02.23 (1).jpeg",
                      "/images/academic center- Hemdat - ODEM BIULDING/WhatsApp Image 2024-11-15 at 10.02.23 (2).jpeg",
                      "/images/academic center- Hemdat - ODEM BIULDING/WhatsApp Image 2024-11-15 at 10.02.23.jpeg",
                    ],
                  },
                ];

                return projects.map((project) => (
                  <ProjectsCard
                    key={project.id}
                    project={project}
                    onClick={(project) =>
                      console.log("Project clicked:", project.title)
                    }
                  />
                ));
              })()}
            </div>
          </TabsContent>

          <TabsContent value="about" className="space-y-6">
            {/* Video Section */}
            <div className="bg-sage-100 rounded-lg p-8 mb-8">
              <div className="aspect-video bg-white rounded-lg flex items-center justify-center shadow-sm">
                <video
                  className="w-full h-full object-cover"
                  src="/video/BALI.mp4"
                  autoPlay
                  loop
                  muted
                />
              </div>
            </div>

            {/* About Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">About Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  Shirazo is an architecture and interior design studio
                  specializing in architectural planning and advanced
                  visualization services for developers, planners, and
                  contractors.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  At the heart of our work lies a deep understanding of project
                  needs and user experience, with a strong focus on precision,
                  thoughtful design, and attention to the small details that
                  turn functional planning into meaningful, inspiring spaces.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We support projects from concept to execution, delivering
                  clear, cohesive architectural plans alongside high-quality 3D
                  visualizations that effectively communicate ideas to partners,
                  investors, and authorities.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  By combining broad design thinking, technical expertise, and
                  advanced visual tools – we turn ideas into accurate, tangible
                  realities.
                </p>
              </div>
              <div className="space-y-4">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Shirazo Studio"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="text-sm text-gray-600">
                  <p>
                    <strong>Services:</strong> Architectural Planning, Interior
                    Design, 3D Visualization
                  </p>
                  <p>
                    <strong>Clients:</strong> Developers, Planners, Contractors
                  </p>
                  <p>
                    <strong>Specialties:</strong> Precision Design, Advanced
                    Visualization, Project Development
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            {/* Video Section */}
            <div className="bg-sage-100 rounded-lg p-8 mb-8">
              <div className="aspect-video bg-white rounded-lg flex items-center justify-center shadow-sm">
                <video
                  className="w-full h-full object-cover"
                  src="/video/landscape.mp4"
                  autoPlay
                  loop
                  muted
                />
              </div>
            </div>

            {/* Students Content */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">
                  REVIT Courses & Student Work
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Empowering the next generation of architects and designers
                  through comprehensive REVIT training and mentorship programs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">
                      mentoring architecture final projects
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Master the basics of REVIT with hands-on projects and
                      real-world applications.
                    </p>
                    <Image
                      src="/placeholder.svg?height=150&width=250"
                      alt="REVIT Course"
                      width={250}
                      height={150}
                      className="w-full h-32 object-cover rounded"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">Autocad curses</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Take your REVIT skills to the next level with complex
                      modeling techniques.
                    </p>
                    <Image
                      src="/placeholder.svg?height=150&width=250"
                      alt="Advanced REVIT"
                      width={250}
                      height={150}
                      className="w-full h-32 object-cover rounded"
                    />
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3"> ⁠lumion curses</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Take your REVIT skills to the next level with complex
                      modeling techniques.
                    </p>
                    <Image
                      src="/placeholder.svg?height=150&width=250"
                      alt="Advanced REVIT"
                      width={250}
                      height={150}
                      className="w-full h-32 object-cover rounded"
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Student Testimonials */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Student Success</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded">
                    <p className="text-sm text-gray-600 italic mb-2">
                      &ldquo;The REVIT course transformed my architectural
                      workflow. The hands-on approach made complex concepts easy
                      to understand.&rdquo;
                    </p>
                    <p className="text-sm font-medium">
                      - Sarah M., Architecture Student
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="text-sm text-gray-600 italic mb-2">
                      &ldquo;Excellent instruction and practical projects. I now
                      feel confident using REVIT in my professional work.&rdquo;
                    </p>
                    <p className="text-sm font-medium">
                      - David L., Interior Designer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </header>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-semibold mb-4">Get In Touch</h3>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>Email Me</span>
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-green-50 hover:bg-green-100"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </Button>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Ready to transform your space? Let&apos;s discuss your project.
          </p>
        </div>
      </footer>
    </div>
  );
}
