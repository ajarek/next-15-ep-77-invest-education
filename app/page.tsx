import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="w-full min-h-[calc(100vh-32px)] flex flex-col items-center justify-start gap-4 p-4">
      <h1 className="text-4xl font-bold ">Inwestuj w swoją edukację</h1>
      <p className='text-lg text-center'>Chcesz zostać programistą przyszłości? Szukasz nowych możliwości rozwoju?<br/> Nasze kursy programowania i sztucznej inteligencji to inwestycja w Twoją karierę.<br/> Dołącz do naszej społeczności i zacznij tworzyć przyszłość już dziś!</p>
      <Button className="hover:bg-red-100 transition-colors duration-300">Zamów kurs</Button> 
    </div>
  );
}
