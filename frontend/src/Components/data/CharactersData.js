// ImageIcon imports
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

// Portrait imports
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

// Simplified data structure with just image mappings
const CharactersData = [
    { name: "Yangyang", image: Yangyang, portrait: YangyangPt },
    { name: "Chixia", image: Chixia, portrait: ChixiaPt },
    { name: "Baizhi", image: Baizhi, portrait: BaizhiPt },
    { name: "Sanhua", image: Sanhua, portrait: SanhuaPt },
    { name: "Aalto", image: Aalto, portrait: AaltoPt },
    { name: "Encore", image: Encore, portrait: EncorePt },
    { name: "Jiaxin", image: Jiaxin, portrait: JiaxinPt },
    { name: "Jiyan", image: Jiyan, portrait: JiyanPt },
    { name: "Mortefi", image: Mortefi, portrait: MortefiPt },
    { name: "Yuanwu", image: Yuanwu, portrait: YuanwuPt },
    { name: "Verina", image: Verina, portrait: VerinaPt },
    { name: "Taoqi", image: Taoqi, portrait: TaoqiPt },
    { name: "Lingyang", image: Lingyang, portrait: LingyangPt },
    { name: "Calcharo", image: Calcharo, portrait: CalcharoPt },
    { name: "Danjin", image: Danjin, portrait: DanjinPt },
    { name: "Yinlin", image: Yinlin, portrait: YinlinPt },
    { name: "Jinhsi", image: Jinhsi, portrait: JinhsiPt },
    { name: "Changli", image: Changli, portrait: ChangliPt },
    { name: "Youhu", image: Youhu, portrait: YouhuPt },
    { name: "Lumi", image: Lumi, portrait: LumiPt },
    { name: "Zhezhi", image: Zhezhi, portrait: ZhezhiPt },
    { name: "Xiangli Yao", image: XY, portrait: XYPt },
    { name: "Shorekeeper", image: SK, portrait: SKPt },
    { name: "Camellya", image: Camellya, portrait: CamellyaPt },
    { name: "Carlotta", image: Carlotta, portrait: CarlottaPt },
    { name: "Roccia", image: Roccia, portrait: RocciaPt },
    { name: "Phoebe", image: Phoebe, portrait: PhoebePt },
    { name: "Brant", image: Brant, portrait: BrantPt }
];

export default CharactersData;
