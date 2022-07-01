export function GButton() {
  return (
    <a
      href=""
      className={
        "group bg-white hover:bg-slate-100 transition-colors text-sm py-2 px-1 flex flex-row items-center rounded-full max-h-12 font-bold uppercase"
      }
    >
      <img className="max-h-10 max-w-10" src="/src/assets/google.png" alt="" />
      <p className="mx-2 text-blue-600 group-hover:text-green-500 transition-colors">
        Entre com Google
      </p>
      {/*consume token for logout*/}
    </a>
  );
}
