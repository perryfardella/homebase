import React from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  icon: string;
  mrr: number;
  status: string;
};

export const ProjectCard = ({
  title,
  description,
  link,
  icon,
  mrr,
  status,
}: ProjectCardProps) => {
  const openLink = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onClick={openLink}
      className="card bg-slate-200 shadow-lg cursor-pointer transition-all duration-200 hover:scale-105 max-w-5xl ml-8 mr-8"
    >
      <div className="card-body p-4">
        <div className="flex items-center">
          <span className="material-icons mr-4">{icon}</span>
          <h2 className="card-title text-2xl">{title}</h2>
        </div>
        <p className="text-gray-500">{description}</p>
        <div className="divider m-0" />
        <div className="flex justify-between items-center">
          <span>
            MRR: <strong>${mrr}</strong>
          </span>
          <span
            className={`badge ${
              status === "active"
                ? "badge badge-success"
                : "badge badge-warning"
            }`}
          >
            {/* TODO: Add an icon here, ie. a hammer for projects being worked on */}
            {status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
