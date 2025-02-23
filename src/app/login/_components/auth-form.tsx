'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type AuthFormProps = {
  isLogin: boolean;
  onSubmit: SubmitHandler<{
    email: string;
    password: string;
    name?: string;
    confirmPassword?: string;
  }>;
  loading: boolean;
  error: string | null;
  className?: string;
};

export function AuthForm({
  isLogin,
  onSubmit,
  loading,
  error,
  className,
}: AuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    email: string;
    password: string;
    name?: string;
    confirmPassword?: string;
  }>();

  return (
    <div className={cn('flex flex-col gap-6', className)}>
      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl font-bold">Welcome to KNAI</h1>
        <p className="text-balance text-muted-foreground">
          {isLogin ? 'Login to your KNAI account' : 'Create a new KNAI account'}
        </p>
      </div>
      {!isLogin && (
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Your name"
            {...register('name', { required: !isLogin && 'Name is required' })}
          />
          {errors.name && (
            <span className="text-sm text-red-500">{errors.name.message}</span>
          )}
        </div>
      )}
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="m@example.com"
          {...register('email', { required: 'Email is required' })}
        />
        {errors.email && (
          <span className="text-sm text-red-500">{errors.email.message}</span>
        )}
      </div>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="password">Password</Label>
          {isLogin && (
            <a
              href="#"
              className="ml-auto text-sm underline-offset-2 hover:underline"
            >
              Forgot your password?
            </a>
          )}
        </div>
        <Input
          id="password"
          type="password"
          {...register('password', { required: 'Password is required' })}
        />
        {errors.password && (
          <span className="text-sm text-red-500">
            {errors.password.message}
          </span>
        )}
      </div>
      {!isLogin && (
        <div className="grid gap-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            {...register('confirmPassword', {
              validate: value =>
                value ===
                  (document.getElementById('password') as HTMLInputElement)
                    ?.value || 'Passwords do not match',
            })}
          />
          {errors.confirmPassword && (
            <span className="text-sm text-red-500">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
      )}
      {error && (
        <span className="text-sm text-red-500 text-center">{error}</span>
      )}
      <Button
        type="submit"
        className="w-full"
        onClick={handleSubmit(onSubmit)}
        disabled={loading}
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            <span className="ml-2">Loading...</span>
          </div>
        ) : isLogin ? (
          'Login'
        ) : (
          'Sign Up'
        )}
      </Button>
    </div>
  );
}
