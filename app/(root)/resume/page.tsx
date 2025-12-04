import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/common/icons";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.resume.metadata.title,
  description: pagesConfig.resume.metadata.description,
};

export default function ResumePage() {
  return (
    <div className="container py-10 space-y-8">
      <div className="flex flex-col items-center text-center space-y-4">
        <h1 className="text-4xl font-bold">{pagesConfig.resume.title}</h1>
        <p className="text-muted-foreground max-w-2xl">
          {pagesConfig.resume.description}
        </p>
        <Button asChild>
          <a href="/indra kumar.pdf" download="Dasapathi_Indra_Kumar_Resume.pdf">
            <Icons.download className="mr-2 h-4 w-4" />
            Download Resume
          </a>
        </Button>
      </div>

      <div className="w-full h-[800px] border rounded-lg overflow-hidden bg-muted/50 flex items-center justify-center">
        <object
          data="/indra kumar.pdf"
          type="application/pdf"
          className="w-full h-full"
        >
          <div className="text-center p-4">
            <p className="mb-4">Unable to display PDF file.</p>
            <Button asChild variant="outline">
              <a href="/indra kumar.pdf" download="Dasapathi_Indra_Kumar_Resume.pdf">
                Download instead
              </a>
            </Button>
          </div>
        </object>
      </div>
    </div>
  );
}
