import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import RegisterForm from '@/app/ui/register-form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Metadata } from 'next';

export const metadata:Metadata = {
    title: 'Login',
}

export default function LoginPage() {
  return (
    <main className="flex items-center h-screen">
      <div className="mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>
        {/* <Tabs defaultValue='login'>
            <TabsList>
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
                <LoginForm />
            </TabsContent>
            <TabsContent value="register">
                <RegisterForm />
            </TabsContent>
        </Tabs> */}
        <LoginForm />
      </div>
    </main>
  );
}