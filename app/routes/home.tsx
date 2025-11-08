import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pasteleria Mil Sabores" },
    { name: "description", content: "Pasteleria Mil Sabores" },
  ];
}

export default function Home() {
    return (
      <body>
            <h1>Hola mundo</h1>
      </body>
    );
}
