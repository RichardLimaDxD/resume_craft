import { ReactNode } from "react";
import {
  Dialog as DialogRoot,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./primitive";

type BaseDialogProps = {
  setOpen?: (open: boolean) => void;
  children?: ReactNode;
  open?: boolean;
};

type DialogProps = BaseDialogProps & {
  title: string;
  content: ReactNode;
  description?: string;
};

const Dialog = ({
  children,
  title,
  description,
  content,
  open,
  setOpen,
}: DialogProps) => {
  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {content}
      </DialogContent>
    </DialogRoot>
  );
};

export { Dialog };
export type { BaseDialogProps };
