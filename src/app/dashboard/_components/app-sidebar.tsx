'use client';
import * as React from 'react';
import { useState } from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { History, Database, LayoutDashboard, Bot } from 'lucide-react';
import Link from 'next/link';

type NavItem = {
  title: string;
  url: string;
  icon: React.ReactNode;
};

const data = {
  navMain: [
    {
      title: 'features',
      url: '#',
      items: [
        {
          title: 'KNAI Analyst',
          url: '#KNAI',
          icon: <Bot className="w-4 h-4" />,
        },
        {
          title: 'History',
          url: '#history',
          icon: <History className="w-4 h-4" />,
        },
        {
          title: 'Connected Bases',
          url: '#Connected Bases',
          icon: <Database className="w-4 h-4" />,
        },
        {
          title: 'Dashboards',
          url: '#Dashboards',
          icon: <LayoutDashboard className="w-4 h-4" />,
        },
      ],
    },
  ],
};

type AppSidebarProps = {
  onItemClick: (item: NavItem) => void;
} & React.ComponentProps<typeof Sidebar>;

export function AppSidebar({ onItemClick, ...props }: AppSidebarProps) {
  const [activeItem, setActiveItem] = useState<string | null>('KNAI Analyst');

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="flex justify-center">
          <Image
            src={'/logo-cyan.png'}
            alt="horizontal logo black"
            width={50}
            height={50}
          />
        </div>
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map(group => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map(item => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={item.title === activeItem}
                      onClick={() => {
                        setActiveItem(item.title);
                        onItemClick(item);
                      }}
                      style={{
                        backgroundColor:
                          item.title === activeItem ? '#06b6d4' : '',
                      }}
                    >
                      <a href={item.url} className="flex items-center gap-2">
                        {item.icon}
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
        <SidebarFooter className="mt-auto">
          <div className="flex justify-evenly items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h1 className="font-bold">Teste User</h1>
              <p className="text-gray-500 text-sm">teste@gmail.com</p>
            </div>
          </div>
          <div className="w-full">
            <Button className="w-full bg-cyan-700">
              <Link href={'/'}>Logout</Link>
            </Button>
          </div>
        </SidebarFooter>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
