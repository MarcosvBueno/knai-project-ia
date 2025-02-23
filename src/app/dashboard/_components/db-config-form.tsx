'use client';

import type React from 'react';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function DBConfigForm() {
  const [dbType, setDbType] = useState('postgresql');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className=" w-full h-full flex justify-center items-center">
      <Card className="w-2/4 ">
        <CardHeader className="flex justify-center items-center">
          <CardTitle className="text-2xl">Connected Bases Form</CardTitle>
          <CardDescription>
            Integrate with any data source of your own choice.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 w-full max-w-md mx-auto"
          >
            <div className="space-y-2">
              <Label htmlFor="db-type">Database Type</Label>
              <Select value={dbType} onValueChange={setDbType} disabled>
                <SelectTrigger id="db-type">
                  <SelectValue placeholder="Select database type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="postgresql">PostgreSQL</SelectItem>
                  <SelectItem value="mysql">MySQL</SelectItem>
                  <SelectItem value="mongodb">MongoDB</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="db-user">DB_USER</Label>
              <Input id="db-user" placeholder="Enter database user" disabled />
            </div>

            <div className="space-y-2">
              <Label htmlFor="db-password">DB_PASSWORD</Label>
              <Input
                id="db-password"
                type="password"
                placeholder="Enter database password"
                disabled
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="db-host">DB_HOST</Label>
              <Input id="db-host" placeholder="Enter database host" disabled />
            </div>

            <div className="space-y-2">
              <Label htmlFor="db-port">DB_PORT</Label>
              <Input id="db-port" placeholder="Enter database port" disabled />
            </div>

            <div className="space-y-2">
              <Label htmlFor="db-name">DB_NAME</Label>
              <Input id="db-name" placeholder="Enter database name" disabled />
            </div>

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center items-center">
          <p>
            Feature disabled because we have a default datasource configured
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
