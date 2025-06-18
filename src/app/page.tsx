"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, MessageCircle, Play } from "lucide-react";

export default function Component() {
  const [activeTab, setActiveTab] = useState("projects");

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
          <TabsList className="grid w-fit md:w-full grid-cols-3 bg-gray-300 rounded-lg  shadow-md border border-gray-400">
            <TabsTrigger
              value="projects"
              className="h-10 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:font-semibold text-gray-700 hover:bg-gray-200 transition-all duration-200 rounded-md px-4 py-2 text-center m-1"
            >
              Projects
            </TabsTrigger>
            <TabsTrigger
              value="about"
              className="h-10 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:font-semibold text-gray-700 hover:bg-gray-200 transition-all duration-200 rounded-md px-4 py-2 text-center m-1"
            >
              About Us
            </TabsTrigger>
            <TabsTrigger
              value="students"
              className="h-10 w-full data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:font-semibold text-gray-700 hover:bg-gray-200 transition-all duration-200 rounded-md px-4 py-2 text-center m-1"
            >
              Students
            </TabsTrigger>
          </TabsList>

          {/* Main Content Area */}
          <div className="mt-8">
            <TabsContent value="projects" className="space-y-6">
              {/* Video Section */}
              <div className="bg-sage-100 rounded-lg p-8 mb-8">
                <div className="aspect-video bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="flex items-center gap-2"
                  >
                    <Play className="w-8 h-8" />
                    <span className="text-lg">Watch Our Projects</span>
                  </Button>
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Modern Living Room"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">
                        Modern Living Space
                      </h3>
                      <p className="text-sm text-gray-600">
                        Contemporary design with clean lines and natural
                        materials
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Kitchen Design"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">Luxury Kitchen</h3>
                      <p className="text-sm text-gray-600">
                        Functional and elegant kitchen design with premium
                        finishes
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Bedroom Design"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">Serene Bedroom</h3>
                      <p className="text-sm text-gray-600">
                        Peaceful retreat with thoughtful lighting and textures
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="about" className="space-y-6">
              {/* Video Section */}
              <div className="bg-sage-100 rounded-lg p-8 mb-8">
                <div className="aspect-video bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="flex items-center gap-2"
                  >
                    <Play className="w-8 h-8" />
                    <span className="text-lg">Meet Our Studio</span>
                  </Button>
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
                    At the heart of our work lies a deep understanding of
                    project needs and user experience, with a strong focus on
                    precision, thoughtful design, and attention to the small
                    details that turn functional planning into meaningful,
                    inspiring spaces.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    We support projects from concept to execution, delivering
                    clear, cohesive architectural plans alongside high-quality
                    3D visualizations that effectively communicate ideas to
                    partners, investors, and authorities.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    By combining broad design thinking, technical expertise, and
                    advanced visual tools – we turn ideas into accurate,
                    tangible realities.
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
                      <strong>Services:</strong> Architectural Planning,
                      Interior Design, 3D Visualization
                    </p>
                    <p>
                      <strong>Clients:</strong> Developers, Planners,
                      Contractors
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
                  <Button
                    variant="ghost"
                    size="lg"
                    className="flex items-center gap-2"
                  >
                    <Play className="w-8 h-8" />
                    <span className="text-lg">Student Success Stories</span>
                  </Button>
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
                    through comprehensive REVIT training and mentorship
                    programs.
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
                        workflow. The hands-on approach made complex concepts
                        easy to understand.&rdquo;
                      </p>
                      <p className="text-sm font-medium">
                        - Sarah M., Architecture Student
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded">
                      <p className="text-sm text-gray-600 italic mb-2">
                        &ldquo;Excellent instruction and practical projects. I
                        now feel confident using REVIT in my professional
                        work.&rdquo;
                      </p>
                      <p className="text-sm font-medium">
                        - David L., Interior Designer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
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
