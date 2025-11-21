import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/logo.png";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <Card className="w-full max-w-md p-8 space-y-6 shadow-elevated">
        <div className="text-center space-y-2">
          <img src={logo} alt="X-Affiliator" className="h-10 w-auto mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Reset Password</h1>
          <p className="text-muted-foreground">
            Enter your email and we'll send you instructions to reset your password
          </p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>

          <Button type="submit" className="w-full gradient-brand shadow-brand">
            Send Reset Link
          </Button>
        </form>

        <div className="text-center">
          <Link 
            to="/auth/login" 
            className="inline-flex items-center text-sm text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to sign in
          </Link>
        </div>
      </Card>
    </div>
  );
}
