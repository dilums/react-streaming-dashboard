import SEO from "components/common/SEO";
import Content from "@/components/Content";
import SidebarRight from "@/components/SidebarRight";

export default function Index() {
  return (
    <>
      <SEO title="Streaming Dashboard" slug="" />
      <div className="dashboard rounded-3xl shadow-xl flex color-base flex-shrink-0">
        <Content />
        <div className="flex-grow" />
        <SidebarRight />
      </div>
    </>
  );
}
