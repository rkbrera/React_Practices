import Card from "./components/Card";
import VitePage from "./components/VitePage";

export default function App() {
  return (
    <>
      <h1>Vite</h1>
      <h2>Herramienta frontend de próxima generación</h2>
      <h3>
        Prepárate para un entorno de desarrollo que finalmente está hecho para
        ti
      </h3>
      <main className="container__vite">
        <VitePage />
        <Card
          emoji="💡"
          title="Inicio de Servidor al Instante"
          subtitle="Servidor de archivo bajo demanda sobre ESM nativo, no requiere
            empaquetado!"
        />

        <Card
          emoji="⚡"
          title="HMR ultra rápido"
          subtitle="Hot Module Replacement (HMR) que se mantiene rápido sin importar el tamaño de la aplicación."
        />

        <Card
          emoji="🛠️"
          title="Funcionalidades enriquecidas"
          subtitle="Soporte para TypeScript, JSX, CSS y más, listos para usar."
        />

        <Card
          emoji="📦"
          title="Compilación optimizada"
          subtitle="Compilado de Rollup preconfigurado con soporte de multi-página y modo librería."
        />

        <Card
          emoji="🔩"
          title="Complementos universales"
          subtitle="Interfaz de complementos basados en Rollup compartidos entre desarrollo y compilación."
        />

        <Card
          emoji="🔑"
          title="APIs completamente tipadas"
          subtitle="APIs programáticamente flexibles con tipado completo en TypeScript."
        />
      </main>
    </>
  );
}
