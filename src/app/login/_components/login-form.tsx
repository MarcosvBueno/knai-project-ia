'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { AuthForm } from './auth-form';
import { cn } from '@/lib/utils';
import { redirect } from 'next/navigation';

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (data: {
    email: string;
    password: string;
    name?: string;
    confirmPassword?: string;
  }) => {
    setLoading(true);
    setError(null);

    setTimeout(() => {
      if (isLogin) {
        if (data.email === 'teste@gmail.com' && data.password === '123456') {
          console.log('Login successful');
          redirect('/dashboard');
        } else {
          setError('Invalid email or password');
        }
      } else {
        console.log('Signup data:', data);
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card className="overflow-hidden h-200">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form
            onSubmit={e => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const data = {
                email: formData.get('email') as string,
                password: formData.get('password') as string,
                name: formData.get('name') as string | undefined,
                confirmPassword: formData.get('confirmPassword') as
                  | string
                  | undefined,
              };
              handleSubmit(data);
            }}
            className="p-6 md:p-8"
          >
            <AuthForm
              isLogin={isLogin}
              onSubmit={handleSubmit}
              loading={loading}
              error={error}
            />
            <div className="text-center text-sm mt-4">
              {isLogin
                ? "Don't have an account? "
                : 'Already have an account? '}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="underline underline-offset-4 hover:text-primary"
              >
                {isLogin ? 'Sign up' : 'Log in'}
              </button>
            </div>
          </form>
          <div className="relative hidden bg-muted md:block">
            <Image
              src={'/logo-black.png'}
              alt="Image"
              width={100}
              height={100}
              className="absolute inset-0 h-full w-full object-none dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{' '}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
