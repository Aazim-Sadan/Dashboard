import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { data } from "../sampleData/sampleData.js"


const Sidebar = () => {


  return (
    <div>
    <SidebarProvider>
      <AppSidebar {...data} />
    </SidebarProvider>
    </div>
  )
}

export default Sidebar