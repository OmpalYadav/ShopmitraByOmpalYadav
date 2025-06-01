import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";

interface SidebarLogoProps {}

const SidebarLogo: React.FC<SidebarLogoProps> = () => {
  const { sidebarActive, toggleSidebar } = useStore().commonStore;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      loading="lazy"
      src="/icons/logo.png"
      alt="icon"
      onClick={toggleSidebar}
      className={`w-48 h-40 sm:w-48 sm:h-20 z-22 transition-all duration-200
      transform translate-x-20 sm:translate-x-0 p-2 sm:p-0
      rounded-full bg-white shadow-md sm:shadow-none ${
        sidebarActive && "!translate-x-0 !shadow-none"
      }`}
    />
  );
};

export default observer(SidebarLogo);
