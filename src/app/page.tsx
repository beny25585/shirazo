"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, MessageCircle } from "lucide-react";
import ProjectsCard from "../components/ui/ProjectsCard";
import { projects } from "@/data/projects";

export default function Component() {
  useEffect(() => {
    projects.forEach((project) =>
      project.images.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
      })
    );
  }, []);

  useEffect(() => {
    const video = document.createElement("video");
    video.preload = "metadata";
    video.src = "/video/BALI.mp4";
  }, []);

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
          <TabsList className="grid w-full md:w-full grid-cols-4 bg-gray-300 rounded-lg  shadow-md border border-gray-400">
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
              {projects.map((project ,index) => (
                <ProjectsCard
                  key={project.id}
                  project={project}
                  index={index}
                  onClick={(project) =>
                    console.log("Project clicked:", project.title)
                  }
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="about" className="space-y-6">
            <div className="bg-sage-100 rounded-lg p-8 mb-8">
              <div className="relative flex justify-center">
                <div className="relative z-10 aspect-[9/16] bg-white rounded-lg shadow-sm overflow-hidden max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                  <video
                    className="w-full h-full"
                    style={{
                      objectFit: "cover",
                      height: "140%",
                      marginTop: "-30%",
                      objectPosition: "center center",
                    }}
                    src="/video/villa Karma.mp4"
                    autoPlay
                    loop
                    muted
                  />
                </div>
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
                  src="/images/About-Us.jpg"
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
                  Student Mentoring
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Helping Architecture Students Succeed From essential software
                  courses like AutoCAD and Lumion to one-on-one mentoring for
                  final projects – I’m here to support you every step of the
                  way. With over 70 student projects successfully guided, I
                  offer practical, creative, and focused help tailored to your
                  needs. Let’s make your project shine
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">
                      Final Project Mentoring
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      One-on-one guidance to help you refine your concept,
                      design smart, and present like a pro
                    </p>
                    <Image
                      src="/images/Final Project Mentoring.jpg"
                      alt="Final Project Mentoring"
                      width={250}
                      height={150}
                      className="w-full h-32 object-cover rounded"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">
                      AutoCAD Course for Students
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Get confident with 2D drafting, layers, and layouts –
                      everything you need to nail your studio projects
                    </p>
                    <Image
                      src="/images/AutoCad.jpg"
                      alt="AutoCAD Course for Students"
                      width={250}
                      height={150}
                      className="w-full h-32 object-cover rounded"
                    />
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3"> Lumion Course</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Learn to bring your designs to life with fast, fun, and
                      powerful 3D rendering – no experience needed
                    </p>
                    <Image
                      src="/images/lumion-course.jpg"
                      alt="Lumion Course"
                      width={250}
                      height={150}
                      className="w-full h-32 object-cover rounded"
                    />
                  </CardContent>
                </Card>
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
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() =>
                window.open("mailto:Shiira1998@gmail.com", "_blank")
              }
            >
              <Mail className="w-4 h-4" />
              <span>Email Me</span>
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-green-50 hover:bg-green-100"
              onClick={() => {
                const message =
                  "היי, ראיתי את השירותים לסטודנטים ורציתי לתאם שיעור";
                const whatsappUrl = `https://wa.me/972504403017?text=${encodeURIComponent(
                  message
                )}`;
                window.open(whatsappUrl, "_blank");
              }}
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
