import cubic from "../slikice/gifovi/cubic.png"
import seth from "../slikice/gifovi/seth.png"
import mumbo from "../slikice/gifovi/mumbo.png"
import rays from "../slikice/gifovi/rays.jpg"
import ilmango from "../slikice/gifovi/ilmango.jpg"

function BuildStone() {
  return (
    <div>
      <a href="https://www.youtube.com/@ThatMumboJumbo" className="yt">
      <div className="tuta">
     <h1>Mumbo Jumbo</h1>
     <img src={mumbo}/>
     <p>Mumbo Jumbo je britanski YouTuber poznat po Minecraft sadržaju, posebno po vrlo naprednim redstone konstrukcijama i “technical Minecraft” projektima.</p></div></a>
      <a href="https://www.youtube.com/@ilmango" className="yt">
      <div className="tuta">
     <h1>ILmango</h1>
     <img src={ilmango}/>
     <p>ilmango je poznati Minecraft “technical” YouTuber i jedan od najutjecajnijih kreatora u području automatizacije i farmi u igri.</p>
      </div>
      </a>
      <a href="https://www.youtube.com/@RaysWorks" className="yt">
      <div className="tuta">
     <h1>Rays Works</h1>
     <img src={rays}/>
     <p>Rays Works je Minecraft YouTuber poznat po “technical Minecraft” sadržaju, posebno po dizajniranju i optimizaciji automatskih farmi i mehanika u igri.</p>
      </div>
      </a>
      <a href="https://www.youtube.com/@SethBling" className="yt">
      <div className="tuta">
     <h1>Seth Bling</h1>
     <img src={seth}/>
     <p>SethBling je jedan od najpoznatijih Minecraft kreatora i pionira redstone i command block mehanika.</p>
      </div>
      </a>
      <a href="https://www.youtube.com/@cubicmetre" className="yt">
      <div className="tuta">
     <h1>Cubic Metre</h1>
     <img src={cubic}/>
     <p>Cubicmetre je Minecraft YouTuber poznat po technical sadržaju, posebno po dizajnu i analizi automatskih farmi i mehanika u igri.</p>
      </div>
      </a>
    </div>
  );
}

export default BuildStone;