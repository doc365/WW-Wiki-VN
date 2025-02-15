// ImageIcon
import Yangyang from '../../assets/Character/CharactersIcon/1.png'
import Chixia from '../../assets/Character/CharactersIcon/2.png'
import Baizhi from '../../assets/Character/CharactersIcon/3.png'
import Sanhua from '../../assets/Character/CharactersIcon/4.png'
import Aalto from '../../assets/Character/CharactersIcon/5.png'
import Encore from '../../assets/Character/CharactersIcon/6.png'
import Jiaxin from '../../assets/Character/CharactersIcon/7.png'
import Jiyan from '../../assets/Character/CharactersIcon/8.png'
import Mortefi from '../../assets/Character/CharactersIcon/9.png'
import Yuanwu from '../../assets/Character/CharactersIcon/10.png'
import Verina from '../../assets/Character/CharactersIcon/11.png'
import Taoqi from '../../assets/Character/CharactersIcon/12.png'
import Lingyang from '../../assets/Character/CharactersIcon/13.png'
import Calcharo from '../../assets/Character/CharactersIcon/14.png'
import Danjin from '../../assets/Character/CharactersIcon/15.png'
import Yinlin from '../../assets/Character/CharactersIcon/16.png'
import Jinhsi from '../../assets/Character/CharactersIcon/17.png'
import Changli from '../../assets/Character/CharactersIcon/18.png'
import Youhu from '../../assets/Character/CharactersIcon/19.png'
import Lumi from '../../assets/Character/CharactersIcon/20.png'
import Zhezhi from '../../assets/Character/CharactersIcon/21.png'
import XY from '../../assets/Character/CharactersIcon/22.png'
import SK from '../../assets/Character/CharactersIcon/23.png'
import Camellya from '../../assets/Character/CharactersIcon/24.png'
import Carlotta from '../../assets/Character/CharactersIcon/25.png'
import Roccia from '../../assets/Character/CharactersIcon/26.png'
import Phoebe from '../../assets/Character/CharactersIcon/27.png'
import Brant from '../../assets/Character/CharactersIcon/28.png'
// portraits
import PhoebePt from '../../assets/Character/CharacterPortrait/PhoebePt.png'
import BaizhiPt from '../../assets/Character/CharacterPortrait/BaizhiPt.png'
import CamellyaPt from '../../assets/Character/CharacterPortrait/CamellyaPt.png'
import CarlottaPt from '../../assets/Character/CharacterPortrait/CarlottaPt.png'
import ChixiaPt from '../../assets/Character/CharacterPortrait/ChixiaPt.png'
import YangyangPt from '../../assets/Character/CharacterPortrait/YangyangPt.png'
import SanhuaPt from '../../assets/Character/CharacterPortrait/SanhuaPt.png'
import AaltoPt from '../../assets/Character/CharacterPortrait/AaltoPt.png'
import EncorePt from '../../assets/Character/CharacterPortrait/EncorePt.png'
import JiaxinPt from '../../assets/Character/CharacterPortrait/JiaxinPt.png'
import JiyanPt from '../../assets/Character/CharacterPortrait/JiyanPt.png'
import MortefiPt from '../../assets/Character/CharacterPortrait/MortefiPt.png'
import YuanwuPt from '../../assets/Character/CharacterPortrait/YuanwuPt.png'
import VerinaPt from '../../assets/Character/CharacterPortrait/VerinaPt.png'
import TaoqiPt from '../../assets/Character/CharacterPortrait/TaoqiPt.png'
import LingyangPt from '../../assets/Character/CharacterPortrait/LingyangPt.png'
import CalcharoPt from '../../assets/Character/CharacterPortrait/CalcharoPt.png'
import DanjinPt from '../../assets/Character/CharacterPortrait/DanjinPt.png'
import YinlinPt from '../../assets/Character/CharacterPortrait/YinlinPt.png'
import JinhsiPt from '../../assets/Character/CharacterPortrait/JinhsiPt.png'
import ChangliPt from '../../assets/Character/CharacterPortrait/ChangliPt.png'
import YouhuPt from '../../assets/Character/CharacterPortrait/YouhuPt.png'
import LumiPt from '../../assets/Character/CharacterPortrait/LumiPt.png'
import ZhezhiPt from '../../assets/Character/CharacterPortrait/ZhezhiPt.png'
import XYPt from '../../assets/Character/CharacterPortrait/XYPt.png'
import SKPt from '../../assets/Character/CharacterPortrait/SKPt.png'
import RocciaPt from '../../assets/Character/CharacterPortrait/RocciaPt.png'
import BrantPt from '../../assets/Character/CharacterPortrait/BrantPt.png'

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
