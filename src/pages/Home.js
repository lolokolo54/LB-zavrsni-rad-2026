import mcdoor from "../slikice/gifovi/mcdoor.gif"
function Home() {
  return (
    <div>
      <h1>Dobrodošli u redstone, glavni izvor energije u Minecraft-u</h1>
      <p className="paragraf">Redstone je posebni materijal u Minecraftu koji služi za izradu električnih sklopova, 
        <br/>automatizacije i različitih mehanizama. Pomoću redstonea igrači mogu napraviti 
        <br/>automatska vrata, farme, zamke, liftove i složene strojeve koristeći signale i logičke<br/> sustave.</p>
        
        <p className="paragraf">Integracija redstonea u Minecraft svijet znači korištenje redstone mehanika za <br/>
          povezivanje i automatizaciju različitih sustava u igri, kao što su vrata, farme, <br/>
          trapovi i transport itema. Redstone omogućuje prijenos “signala” između blokova i <br/>
          tako pretvara statične građevine u interaktivne i automatske uređaje. Time se svijet <br/>
          igre pretvara u funkcionalan sustav gdje igrači mogu graditi kompleksne strojeve i <br/>
          automatizirati gotovo sve procese.</p>
        <img src={mcdoor} className="gifina"/>
    </div>
  )
}

export default Home;