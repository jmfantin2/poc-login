export function Login() {
  return (
    <div className="min-h-screen bg-blur opacity-90 bg-cover bg-no-repeat flex flex-col items-center">
      {/* call to action and sub box */}
      <div className="w-full max-w-[1100px] flex items-center justify-center mt-20 mx-auto">
        {/*call to action*/}
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <h1 className="ml-3 mt-8 text-[2.5rem] leading-tight">
              <strong className="text-white">
                super
                <br />
                calculadora
              </strong>
            </h1>
            <div className="flex-1 flex justify-center mt-8">
              <strong className="text-white text-2xl">login</strong>
            </div>
          </div>
          <p className="ml-3 mt-4 min-w-[500px] text-lg text-white leading-relaxed">
            Precificação não precisa ser um estresse.
          </p>
        </div>
      </div>
    </div>
  );
}
