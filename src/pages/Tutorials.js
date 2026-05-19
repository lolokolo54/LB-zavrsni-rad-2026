import koka from "../slikice/gifovi/koka.gif"
import tri from "../slikice/gifovi/tri.gif"
import sorter from "../slikice/gifovi/sorter.gif"

function Tutorials() {
    return (
        <div className="tutorial">
            <div className="tut">
                <h1>Automatska Farma Kokoši</h1>
                <p>Redstone farma kokoši je automatska mašina koja uzgaja kokoši i<br/> 
                    skuplja njihovo meso i jaja bez puno ručnog rada. Radi tako da kokoši <br/> 
                    stoje u malom prostoru i stalno nose jaja. Dispenser pomoću redstone mehanizma <br/> 
                    izbacuje ta jaja, iz kojih se izlegu pilići. Kad pilići odrastu, sustav ih <br/> 
                    automatski “skuha” lavom ili vatrom, a hopper skuplja pečenu piletinu i perje u chest.</p>
                <p>materijali za mašinu:</p>
                <ul>
                    <li>Dispenser</li>
                    <li>Hopper</li>
                    <li>Chest</li>
                    <li>Comparator</li>
                    <li>Redstone</li>
                    <li>Lava</li>
                    <li>Nekoliko kokoši</li>
                    <li>Nekoliko blokova za gradnju</li>
                    </ul>   

                <img src={koka}/> 
            </div>
            <div className="tut">
                <h1>Pistonska Vrata</h1>
                <p>Minecraft piston vrata su redstone kontrapcija koja koristi sticky klipove za otvaranje i<br/>
                     zatvaranje prolaza u zidu. Kada se aktivira redstone signal (npr. poluga, tipka ili<br/>
                      skriveni senzor), klipovi povuku ili gurnu blokove i tako otvore vrata. Kad se signal<br/>
                       isključi, blokovi se vraćaju i zatvaraju vrata, pa izgledaju kao običan zid.</p>
                <p>materijali za vrata:</p>
                <ul>
                    <li>Piston</li>
                    <li>Ljepljivi pistoni</li>
                    <li>Redstone</li>
                    <li>Lever ili Gumb</li>
                    <li>Repeateri</li>
                    <li>Observeri</li>
                    <li>Blokovi za gradnju</li>
                    <li>Dispenser</li>
                    </ul>   

                <img src={tri}/> 
            </div>
            <div className="tut">
                <h1>Sustav Skladištenja Itema</h1>
                <p>Item sorter u Minecraftu je redstone sustav koji automatski razvrstava <br/>
                    predmete u odgovarajuće škrinje. Radi tako da hopperi prenose iteme <br/>
                    kroz sustav, a redstone mehanizam (obično comparator i repeaters) prepoznaje <br/>
                    točno određene iteme pomoću “filter” hoper konfiguracije. Svaki tip itema ima <br/>
                    svoj slot i kad prođe kroz sorter, završava u pripadajućoj škrinji. Koristi se <br/>
                    za organizaciju velikih farmi i skladišta bez ručnog sortiranja.</p>
                <p>materijali za Sustav:</p>
                <ul>
                    <li>Chestovi</li>
                    <li>Blokovi za gradnju</li>
                    <li>Hopperi</li>
                    <li>Redstone baklje</li>
                    <li>Repeateri</li>
                    <li>Comparatori</li>
                    <li>Redstone</li>
                    </ul>   

                <img src={sorter}/> 
            </div>
        </div>
    );
}

export default Tutorials;