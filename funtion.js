import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      alert("Login sukses!");
    } else {
      setError("Username atau password salah");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="flex w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Side */}
        <div className="w-1/2 bg-gray-900 text-white flex flex-col items-center justify-center p-6">
          <h2 className="text-2xl font-bold text-center">"Jika Uang Tidak Bisa Membuatmu Bahagia..."</h2>
          <p className="mt-2">Maka uangmu kurang! 💰</p>
        </div>
        {/* Right Side */}
        <Card className="w-1/2 p-6">
          <CardContent>
            <h2 className="text-xl font-bold text-center">Hallo Manusia - Manusia Berdosa</h2>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <div className="mt-4">
              <label className="block">Username</label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full mt-1"
              />
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1"
              />
            </div>
            <Button onClick={handleLogin} className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
              Sign In
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
