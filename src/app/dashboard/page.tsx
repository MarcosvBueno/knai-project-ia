'use client';

import { useState } from 'react';
import { AppSidebar } from './_components/app-sidebar';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { ChatBot } from './_components/chatbot';
import DBConfigForm from './_components/db-config-form';

const contentMap = {
  'KNAI Analyst': {
    content: <ChatBot />,
  },
  history: {
    content: <div>Conteúdo do History</div>,
  },
  'Connected Bases': {
    content: <DBConfigForm />,
  },
  Dashboards: {
    content: <div>Conteúdo do Dashboards</div>,
  },
};

type ContentKey = keyof typeof contentMap;

export default function Page() {
  const [activeItem, setActiveItem] = useState<{ title: string; url: string }>({
    title: 'KNAI Analyst',
    url: '#',
  });

  const handleItemClick = (item: { title: string; url: string }) => {
    setActiveItem(item);
  };

  const renderContent = () => {
    const key = activeItem.title as ContentKey;
    const config = contentMap[key];
    return config ? config.content : <div>Selecione um item</div>;
  };

  return (
    <SidebarProvider>
      <AppSidebar onItemClick={handleItemClick} />{' '}
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-cyan-500 px-4 fixed z-10 bg-white w-full">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <h1 className="text-xl font-bold">{activeItem.title}</h1>{' '}
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">{renderContent()}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
