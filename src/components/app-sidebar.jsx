import * as React from "react"
import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { SidebarSeparator, SidebarTrigger } from "./ui/sidebar"


export function AppSidebar({...data}) {
  
  return (
    <Sidebar>
      <SidebarHeader className="relative">
      <h1 className="font-extrabold text-4xl m-4">abun</h1>
        <TeamSwitcher teams={data.teams} />
        <div className="absolute top-12 left-66 sm:top-12 sm:left-58">
          <SidebarTrigger/>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      
      <SidebarFooter>
      <SidebarSeparator/>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
