import { Plus } from "lucide-react";
import { ResumeCardButton } from "./resume-card";

const AddResumeButton = () => {
  return (
    <ResumeCardButton
      title="Criar novo currículo"
      description="Começe do zero"
      icon={<Plus size={50} />}
    />
  );
};

export { AddResumeButton };
