import "./main.css";

export const metadata = {
  title: "Next CVA",
  description: "Next.js + CVA + Tailwind CSS + TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
