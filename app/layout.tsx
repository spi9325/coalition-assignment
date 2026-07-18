import { Suspense } from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#edf0f4] p- h-screen overflow-hidden ">
        <main className="relative mx-auto w-full max-w-screen-2xl h-full px-[18px]  flex flex-col">
          {/* Header — top pe fixed rahega apni jagah */}
          <div className="shrink-0">
            <Header />
          </div>

         
          <section className="flex-1 min-h-0 flex gap-4 mt-4  overflow-hidden ">
            <div className="shrink-0">
              <Sidebar />
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar">
              <Suspense fallback={<p>Loading...</p>}>
              {children}
              </Suspense>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}