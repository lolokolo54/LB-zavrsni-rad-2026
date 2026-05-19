import BuildCard from "../components/BuildCard";
function Builds() {
  return (
    <div>
      <h1>Redstone Gradnje</h1>

      <BuildCard
        naslov="Automatska Farma Kokoši"
        opis="Puno automati sustav za brzo sakupljanje piletine i pera."
        god="godina kad je izumljena: 2013"
        komp="kompliciranost: jednostavna"
      />

      <BuildCard
        naslov="Pistonska Vrata"
        opis="Vrata napravljena pomoću pistona, bloka koji se pod redstone aktivacijom produži za cijeli blok."
        god="godina kad su izumljena: 2011"
        komp="kompliciranost: teška"
      />

      <BuildCard
        naslov="Sustav Skladištenja Itema"
        opis="Posebna mašina koja sortira itemove po njihovom tipu, boji ili koliko ih može stati u jedan 'stack'"
        god="godina kad je izumljen: 2013"
        komp="kompliciranost: srednja"
      />
    </div>
  );
}

export default Builds;