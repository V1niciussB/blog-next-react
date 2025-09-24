import clsx from "clsx";
import { Button } from "../Button";

type DialogProps = {
  isVisible: boolean;
  title: string;
  content: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
  disabled: boolean;
};

export function Dialog({
  isVisible,
  title,
  content,
  onCancel,
  onConfirm,
  disabled,
}: DialogProps) {
  if (!isVisible) return null;

  function handleCancel() {
    if (disabled) return;

    onCancel();
  }

  return (
    <div
      className={clsx(
        "fixed z-50 inset-0 top-0 bottom-0 left-0 right-0 bg-black/40 backdrop-blur-xs",
        "flex items-center justify-center"
      )}
      onClick={handleCancel}
    >
      <div
        className={clsx(
          "bg-slate-100 p-6 rounded-lg max-w-2xl mx-6",
          "flex flex-col gap-4",
          "shadow-lg shadow-black/30 text-center"
        )}
        role="dialog"
        aria-modal={true}
        aria-labelledby="dialog-tittle"
        aria-describedby="dialog-description"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 id="dialog-title" className="text-xl font-extrabold">
          {title}
        </h3>
        <div id="dialog-description">{content}</div>
        <div className="flex items-center justify-around">
          <Button
            variant="ghost"
            autoFocus
            onClick={handleCancel}
            disabled={disabled}
          >
            Cancelar
          </Button>
          <Button
            variant="default"
            autoFocus
            onClick={onConfirm}
            disabled={disabled}
          >
            OK
          </Button>
        </div>
      </div>
    </div>
  );
}
