'use client';
import { Bot, Check, X } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Image from 'next/image';

interface ComparisonItem {
  analysis: string;
  example: string;
  KNAI: boolean;
  sqlWrappers: boolean;
}

const comparisonData: ComparisonItem[] = [
  {
    analysis: 'Descriptive',
    example: 'Business Intelligence Insights ',
    KNAI: true,
    sqlWrappers: true,
  },
  {
    analysis: 'Key Driver',
    example: 'Real-Time Query Processing',
    KNAI: true,
    sqlWrappers: false,
  },
  {
    analysis: 'Anomaly',
    example: 'Persistent Conversation History',
    KNAI: true,
    sqlWrappers: false,
  },
  {
    analysis: 'Trend',
    example: 'Multi-Purpose Response System',
    KNAI: true,
    sqlWrappers: false,
  },
  {
    analysis: 'Correlations',
    example: 'Natural Language Query',
    KNAI: true,
    sqlWrappers: false,
  },
  {
    analysis: 'SQL Query Automation',
    example: 'Is this conversion rate normal for this time of year?',
    KNAI: true,
    sqlWrappers: false,
  },
];

export default function ComparisonTable() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 -z-10">
      <div className="flex justify-center items-center py-10 ">
        <h1 className="font-mono text-4xl font-bold">Our difference</h1>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-xl ">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-6">KNAI vs Everyone Else</h2>

          <div className="flex justify-end gap-6 mb-6">
            <div className="flex items-center gap-2">
              <Image
                src={'/logo-black.png'}
                alt="KNAI Logo"
                className="w-6 h-6"
                width={20}
                height={20}
              />
              <span className="font-medium">KNAI</span>
            </div>
            <div className="flex items-center gap-2">
              <Bot className="w-6 h-6">📊</Bot>
              <span className="font-medium">{"Ai's"}</span>
            </div>
          </div>

          <Table className="font-sans ">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Analysis</TableHead>
                <TableHead className="w-[400px]">Example</TableHead>
                <TableHead className="w-[90px] text-center">KNAI</TableHead>
                <TableHead className="w-[90px] text-center">{"AI's"}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="-z-30">
              {comparisonData.map(item => (
                <TableRow key={item.analysis} className="h-20 ">
                  <TableCell className="font-medium">{item.analysis}</TableCell>
                  <TableCell>{item.example}</TableCell>
                  <TableCell className="text-center">
                    {item.KNAI ? (
                      <Check className="w-5 h-5 text-teal-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {item.sqlWrappers ? (
                      <Check className="w-5 h-5 text-teal-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
