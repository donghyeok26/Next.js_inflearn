import "./globals.css";
import Link from "next/link";
import style from "./layout.module.css";

async function Footer() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    { cache: "force-cache" }
  )
  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>
  }

  const book = await response.json();
  const allBooks = book.length;

  return (
    <footer>
      <p>제작 @winterlood</p>
      <p>총 {allBooks}권의 책이 있습니다.</p>
    </footer>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>📚 ONEBITE BOOKS</Link>
          </header>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
