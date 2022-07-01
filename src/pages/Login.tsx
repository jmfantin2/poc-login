import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubscribe(event: FormEvent) {
    navigate("/dash");
  }

  return (
    <div className="min-h-screen bg-blur opacity-90 bg-cover bg-no-repeat flex flex-col items-center">
      {/* call to action and sub box */}
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        {/*call to action*/}
        <div className="max-w-[640px]">
          <h1 className="ml-3 mt-8 text-[2.5rem] leading-tight">
            <strong className="text-orange-300">against</strong> the grain and{" "}
            <br />
            <strong className="text-red-400">deeper</strong> than spacetime
          </h1>
          <p className="ml-3 mt-4 text-gray-200 leading-relaxed">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </p>
        </div>
        {/*sub box*/}
        <div className="rounded p-8 bg-gray-600 border border-gray-500">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="mt-4 bg-orange-600 uppercase py-4 rounded font-bold text-sm hover:bg-green-500 transition-colors disabled:bg-green-500"
              type="submit"
            >
              "Garantir minha vaga"
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
