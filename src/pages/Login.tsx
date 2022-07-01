import { GButton } from "../components/gears/GButton";

export function Login() {
  return (
    <div className="min-h-screen bg-blur opacity-90 bg-cover bg-no-repeat flex flex-col items-center ">
      {/* call to action and sub box */}
      <div className="w-full flex items-center justify-center mt-20">
        {/*call to action*/}
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-center">
            <h1 className="mt-8 text-[2.5rem]">
              <strong className="text-white">super calculadora</strong>
            </h1>
          </div>
          <p className="text-lg text-white leading-relaxed">
            Precificação não precisa ser um estresse.
          </p>

          <div className="flex-1 flex justify-center mt-8">
            <GButton />
          </div>
        </div>
      </div>
    </div>
  );
}
