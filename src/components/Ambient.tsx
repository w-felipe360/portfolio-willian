/* Camada de ambiente: brilhos vermelhos (CSS) + pétalas caindo.
   Valores fixos e determinísticos — nada de Math.random para o render ficar
   estável. Cada pétala anima só transform/opacity: nenhum filter, nenhum
   box-shadow, para o trabalho ficar na GPU e não gerar repaint por frame. */
const PETALS = [
  { x: "5%", size: 44, dur: 19, delay: 0, drift: "8vw", spin: "420deg" },
  { x: "16%", size: 24, dur: 26, delay: 3.5, drift: "-5vw", spin: "-320deg" },
  { x: "27%", size: 58, dur: 16, delay: 6, drift: "12vw", spin: "540deg" },
  { x: "38%", size: 30, dur: 29, delay: 1.2, drift: "-9vw", spin: "300deg" },
  { x: "49%", size: 38, dur: 21, delay: 8.5, drift: "6vw", spin: "-480deg" },
  { x: "60%", size: 52, dur: 18, delay: 11, drift: "-11vw", spin: "500deg" },
  { x: "71%", size: 26, dur: 27, delay: 2.4, drift: "7vw", spin: "-360deg" },
  { x: "82%", size: 62, dur: 15, delay: 9.6, drift: "10vw", spin: "-560deg" },
  { x: "93%", size: 40, dur: 23, delay: 5.4, drift: "-13vw", spin: "440deg" },
];

export function Ambient() {
  return (
    <div className="ambient" aria-hidden="true">
      {PETALS.map((petal) => (
        <span
          key={petal.x}
          className="petal"
          style={
            {
              "--x": petal.x,
              "--size": `${petal.size}px`,
              "--dur": `${petal.dur}s`,
              "--delay": `-${petal.delay}s`,
              "--drift": petal.drift,
              "--spin": petal.spin,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
