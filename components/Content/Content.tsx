import Header from "@/components/Header";
import SidebarLeft from "@/components/SidebarLeft";
import Video from "@/components/Video";
import News from "@/components/News";
import TopSelection from "@/components/TopSelection";

export default function Content() {
  return (
    <div className="h-full flex flex-col">
      <Header />
      <div className="flex flex-grow">
        <SidebarLeft />
        <div className="flex flex-col h-full pb-8 pr-8">
          <div className="flex items-start">
            <Video />
            <div className="flex-grow" />
            <News />
          </div>
          <TopSelection />
        </div>
      </div>
    </div>
  );
}
