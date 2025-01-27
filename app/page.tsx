import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="w-full min-h-[calc(100vh-32px)] flex flex-col items-center justify-center gap-4">
      <h1>Inwestuj w edukację</h1>
      <Button className="hover:bg-[#f4bbaa] transition-colors duration-300">Zamów kurs</Button> 
    </div>
  );
}
