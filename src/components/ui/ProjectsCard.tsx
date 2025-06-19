import React, { useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react";

export interface Project {
  id: number;
  title: string;
  fullDescription: string;
  location: string;
  area: string;
  images: string[];
  additionalContent?: React.ReactNode;
}

interface ProjectsCardProps {
  project: Project;
  cardClassName?: string;
  onClick?: (project: Project) => void;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({
  project,
  cardClassName = "",
  onClick,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const openProject = (): void => {
    setIsExpanded(true);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
    if (onClick) onClick(project);
  };

  const closeProject = (): void => {
    setIsExpanded(false);
    setCurrentImageIndex(0);
    document.body.style.overflow = "auto";
  };

  const nextImage = (): void => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (): void => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* Project Card */}
      <div
        className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${cardClassName}`}
        onClick={openProject}
      >
        <div className="p-0">
          <div className="relative group">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                <div className="text-lg font-medium">View Project</div>
                <div className="text-sm">{project.images.length} Images</div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-semibold mb-2 text-lg">{project.title}</h3>
            <div className="flex items-center text-xs text-gray-500 gap-4">
              <div className="flex items-center gap-1">
                <MapPin size={12} />
                {project.location.split(",")[0]}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded View */}
      {isExpanded && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 overflow-y-auto">
          <div className="min-h-screen flex flex-col">
            <button
              onClick={closeProject}
              className="fixed top-4 right-4 z-10 bg-white bg-opacity-20 text-black rounded-full p-3 hover:bg-opacity-30 transition-all"
            >
              <X size={24} />
            </button>

            <div className="relative h-96 md:h-[500px]">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />

              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-70 transition-all"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-70 transition-all"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-white"
                        : "bg-white bg-opacity-50 hover:bg-opacity-70"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="bg-white flex-1">
              <div className="max-w-4xl mx-auto p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {project.fullDescription}
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg h-fit">
                    <h3 className="font-bold text-lg mb-4">Project Details</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3"></div>
                      <div className="flex items-start gap-3">
                        <MapPin className="text-gray-500 mt-1" size={16} />
                        <div>
                          <div className="font-medium">Location</div>
                          <div className="text-gray-600">
                            {project.location}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-4 h-4 bg-gray-500 rounded mt-1"></div>
                        <div>
                          <div className="font-medium">Area</div>
                          <div className="text-gray-600">{project.area}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {project.additionalContent && (
                  <div className="mt-8">
                    <h3 className="font-bold text-lg mb-4">
                      About the Project
                    </h3>
                    <div className="prose max-w-none text-gray-700">
                      {project.additionalContent}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsCard;
