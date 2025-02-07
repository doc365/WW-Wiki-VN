// ImageIcon
import Yangyang from '../../assets/CharactersIcon/1.png'
import Chixia from '../../assets/CharactersIcon/2.png'
import Baizhi from '../../assets/CharactersIcon/3.png'
import Sanhua from '../../assets/CharactersIcon/4.png'
import Aalto from '../../assets/CharactersIcon/5.png'
import Encore from '../../assets/CharactersIcon/6.png'
import Jiaxin from '../../assets/CharactersIcon/7.png'
import Jiyan from '../../assets/CharactersIcon/8.png'
import Mortefi from '../../assets/CharactersIcon/9.png'
import Yuanwu from '../../assets/CharactersIcon/10.png'
import Verina from '../../assets/CharactersIcon/11.png'
import Taoqi from '../../assets/CharactersIcon/12.png'
import Lingyang from '../../assets/CharactersIcon/13.png'
import Calcharo from '../../assets/CharactersIcon/14.png'
import Danjin from '../../assets/CharactersIcon/15.png'
import Yinlin from '../../assets/CharactersIcon/16.png'
import Jinhsi from '../../assets/CharactersIcon/17.png'
import Changli from '../../assets/CharactersIcon/18.png'
import Youhu from '../../assets/CharactersIcon/19.png'
import Lumi from '../../assets/CharactersIcon/20.png'
import Zhezhi from '../../assets/CharactersIcon/21.png'
import XY from '../../assets/CharactersIcon/22.png'
import SK from '../../assets/CharactersIcon/23.png'
import Camellya from '../../assets/CharactersIcon/24.png'
import Carlotta from '../../assets/CharactersIcon/25.png'
import Roccia from '../../assets/CharactersIcon/26.png'
import Phoebe from '../../assets/CharactersIcon/27.png'
import Brant from '../../assets/CharactersIcon/28.png'
// portraits
import PhoebePt from '../../assets/CharacterPortrait/PhoebePt.png'
import BaizhiPt from '../../assets/CharacterPortrait/BaizhiPt.png'
import CamellyaPt from '../../assets/CharacterPortrait/CamellyaPt.png'
import CarlottaPt from '../../assets/CharacterPortrait/CarlottaPt.png'
import ChixiaPt from '../../assets/CharacterPortrait/ChixiaPt.png'
import YangyangPt from '../../assets/CharacterPortrait/YangyangPt.png'
import SanhuaPt from '../../assets/CharacterPortrait/SanhuaPt.png'
import AaltoPt from '../../assets/CharacterPortrait/AaltoPt.png'
import EncorePt from '../../assets/CharacterPortrait/EncorePt.png'
import JiaxinPt from '../../assets/CharacterPortrait/JiaxinPt.png'
import JiyanPt from '../../assets/CharacterPortrait/JiyanPt.png'
import MortefiPt from '../../assets/CharacterPortrait/MortefiPt.png'
import YuanwuPt from '../../assets/CharacterPortrait/YuanwuPt.png'
import VerinaPt from '../../assets/CharacterPortrait/VerinaPt.png'
import TaoqiPt from '../../assets/CharacterPortrait/TaoqiPt.png'
import LingyangPt from '../../assets/CharacterPortrait/LingyangPt.png'
import CalcharoPt from '../../assets/CharacterPortrait/CalcharoPt.png'
import DanjinPt from '../../assets/CharacterPortrait/DanjinPt.png'
import YinlinPt from '../../assets/CharacterPortrait/YinlinPt.png'
import JinhsiPt from '../../assets/CharacterPortrait/JinhsiPt.png'
import ChangliPt from '../../assets/CharacterPortrait/ChangliPt.png'
import YouhuPt from '../../assets/CharacterPortrait/YouhuPt.png'
import LumiPt from '../../assets/CharacterPortrait/LumiPt.png'
import ZhezhiPt from '../../assets/CharacterPortrait/ZhezhiPt.png'
import XYPt from '../../assets/CharacterPortrait/XYPt.png'
import SKPt from '../../assets/CharacterPortrait/SKPt.png'
import RocciaPt from '../../assets/CharacterPortrait/RocciaPt.png'
import BrantPt from '../../assets/CharacterPortrait/BrantPt.png'




const CharactersData = [
    { id: 1, name: "Yangyang", image: Yangyang, portrait: YangyangPt, attribute: "Aero", rarity: 4, weapon_type: "Sword" },
    { id: 2, name: "Chixia", image: Chixia, portrait: ChixiaPt, attribute: "Fusion", rarity: 4, weapon_type: "Pistols" },
    { id: 3, name: "Baizhi", image: Baizhi, portrait: BaizhiPt, attribute: "Glacio", rarity: 4, weapon_type: "Rectifier" },
    { id: 4, name: "Sanhua", image: Sanhua, portrait: SanhuaPt, attribute: "Glacio", rarity: 4, weapon_type: "Sword" },
    { id: 5, name: "Aalto", image: Aalto, portrait: AaltoPt, attribute: "Aero", rarity: 4, weapon_type: "Pistols" },
    { id: 6, name: "Encore", image: Encore, portrait: EncorePt, attribute: "Fusion", rarity: 5, weapon_type: "Rectifier" },
    { id: 7, name: "Jiaxin", image: Jiaxin, portrait: JiaxinPt, attribute: "Aero", rarity: 5, weapon_type: "Gauntlet" },
    { id: 8, name: "Jiyan", image: Jiyan, portrait: JiyanPt, attribute: "Aero", rarity: 5, weapon_type: "Broadblade" },
    { id: 9, name: "Mortefi", image: Mortefi, portrait: MortefiPt, attribute: "Fusion", rarity: 4, weapon_type: "Pistols" },
    { id: 10, name: "Yuanwu", image: Yuanwu, portrait: YuanwuPt, attribute: "Electro", rarity: 4, weapon_type: "Gauntlet" },
    { id: 11, name: "Verina", image: Verina, portrait: VerinaPt, attribute: "Spectro", rarity: 5, weapon_type: "Rectifier" },
    { id: 12, name: "Taoqi", image: Taoqi, portrait: TaoqiPt, attribute: "Havoc", rarity: 4, weapon_type: "Broadblade" },
    { id: 13, name: "Lingyang", image: Lingyang, portrait: LingyangPt, attribute: "Glacio", rarity: 5, weapon_type: "Gauntlet" },
    { id: 14, name: "Calcharo", image: Calcharo, portrait: CalcharoPt, attribute: "Electro", rarity: 5, weapon_type: "Broadblade" },
    { id: 15, name: "Danjin", image: Danjin, portrait: DanjinPt, attribute: "Havoc", rarity: 4, weapon_type: "Sword" },
    { id: 16, name: "Yinlin", image: Yinlin, portrait: YinlinPt, attribute: "Electro", rarity: 5, weapon_type: "Rectifier" },
    { id: 17, name: "Jinhsi", image: Jinhsi, portrait: JinhsiPt, attribute: "Spectro", rarity: 5, weapon_type: "Broadblade" },
    { id: 18, name: "Changli", image: Changli, portrait: ChangliPt, attribute: "Fusion", rarity: 5, weapon_type: "Sword" },
    { id: 19, name: "Youhu", image: Youhu, portrait: YouhuPt, attribute: "Glacio", rarity: 4, weapon_type: "Gauntlet" },
    { id: 20, name: "Lumi", image: Lumi, portrait: LumiPt, attribute: "Electro", rarity: 4, weapon_type: "Broadblade" },
    { id: 21, name: "Zhezhi", image: Zhezhi, portrait: ZhezhiPt, attribute: "Glacio", rarity: 5, weapon_type: "Rectifier" },
    { id: 22, name: "Xiangli Yao", image: XY, portrait: XYPt, attribute: "Electro", rarity: 5, weapon_type: "Gauntlet" },
    { id: 23, name: "Shorekeeper", image: SK, portrait: SKPt, attribute: "Spectro", rarity: 5, weapon_type: "Rectifier" },
    { id: 24, name: "Camellya", image: Camellya, portrait: CamellyaPt, attribute: "Havoc", rarity: 5, weapon_type: "Sword" },
    { id: 25, name: "Carlotta", image: Carlotta, portrait: CarlottaPt, attribute: "Glacio", rarity: 5, weapon_type: "Pistols" },
    { id: 26, name: "Roccia", image: Roccia, portrait: RocciaPt, attribute: "Havoc", rarity: 5, weapon_type: "Gauntlet" },
    { id: 27, name: "Phoebe", image: Phoebe, portrait: PhoebePt, attribute: "Spectro", rarity: 5, weapon_type: "Rectifier" },
    { id: 28, name: "Brant", image: Brant, portrait: BrantPt, attribute: "Fusion", rarity: 5, weapon_type: "Sword" },
];

export default CharactersData;
