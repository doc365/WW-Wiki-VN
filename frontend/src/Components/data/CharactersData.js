// ImageIcon imports
import Baizhi from '../../assets/Character/CharactersIcon/Baizhi.png'
import Sanhua from '../../assets/Character/CharactersIcon/Sanhua.png'
import Aalto from '../../assets/Character/CharactersIcon/Aalto.png'
import Encore from '../../assets/Character/CharactersIcon/Encore.png'
import Jiaxin from '../../assets/Character/CharactersIcon/Jiaxin.png'
import Jiyan from '../../assets/Character/CharactersIcon/Jiyan.png'
import Mortefi from '../../assets/Character/CharactersIcon/Mortefi.png'
import Yuanwu from '../../assets/Character/CharactersIcon/Yuanwu.png'
import Verina from '../../assets/Character/CharactersIcon/Verina.png'
import Taoqi from '../../assets/Character/CharactersIcon/Taoqi.png'
import Lingyang from '../../assets/Character/CharactersIcon/Lingyang.png'
import Calcharo from '../../assets/Character/CharactersIcon/Calcharo.png'
import Danjin from '../../assets/Character/CharactersIcon/Danjin.png'
import Yinlin from '../../assets/Character/CharactersIcon/Yinlin.png'
import Jinhsi from '../../assets/Character/CharactersIcon/Jinhsi.png'
import Changli from '../../assets/Character/CharactersIcon/Changli.png'
import Youhu from '../../assets/Character/CharactersIcon/Youhu.png'
import Lumi from '../../assets/Character/CharactersIcon/Lumi.png'
import Zhezhi from '../../assets/Character/CharactersIcon/Zhezhi.png'
import XiangliYao from '../../assets/Character/CharactersIcon/Xiangli_Yao.png'
import Shorekeeper from '../../assets/Character/CharactersIcon/Shorekeeper.png'
import Camellya from '../../assets/Character/CharactersIcon/Camellya.png'
import Carlotta from '../../assets/Character/CharactersIcon/Carlotta.png'
import Roccia from '../../assets/Character/CharactersIcon/Roccia.png'
import Phoebe from '../../assets/Character/CharactersIcon/Phoebe.png'
import Brant from '../../assets/Character/CharactersIcon/Brant.png'
import Chixia from '../../assets/Character/CharactersIcon/Chixia.png'
import Yangyang from '../../assets/Character/CharactersIcon/Yangyang.png'

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
    { id: 1, name: "Yangyang", image: Yangyang, portrait: YangyangPt },
    { id: 2, name: "Chixia", image: Chixia, portrait: ChixiaPt },
    { id: 3, name: "Baizhi", image: Baizhi, portrait: BaizhiPt },
    { id: 4, name: "Sanhua", image: Sanhua, portrait: SanhuaPt },
    { id: 5, name: "Aalto", image: Aalto, portrait: AaltoPt },
    { id: 6, name: "Encore", image: Encore, portrait: EncorePt },
    { id: 7, name: "Jiaxin", image: Jiaxin, portrait: JiaxinPt },
    { id: 8, name: "Jiyan", image: Jiyan, portrait: JiyanPt },
    { id: 9, name: "Mortefi", image: Mortefi, portrait: MortefiPt },
    { id: 10, name: "Yuanwu", image: Yuanwu, portrait: YuanwuPt },
    { id: 11, name: "Verina", image: Verina, portrait: VerinaPt },
    { id: 12, name: "Taoqi", image: Taoqi, portrait: TaoqiPt },
    { id: 13, name: "Lingyang", image: Lingyang, portrait: LingyangPt },
    { id: 14, name: "Calcharo", image: Calcharo, portrait: CalcharoPt },
    { id: 15, name: "Danjin", image: Danjin, portrait: DanjinPt },
    { id: 16, name: "Yinlin", image: Yinlin, portrait: YinlinPt },
    { id: 17, name: "Jinhsi", image: Jinhsi, portrait: JinhsiPt },
    { id: 18, name: "Changli", image: Changli, portrait: ChangliPt },
    { id: 19, name: "Youhu", image: Youhu, portrait: YouhuPt },
    { id: 20, name: "Lumi", image: Lumi, portrait: LumiPt },
    { id: 21, name: "Zhezhi", image: Zhezhi, portrait: ZhezhiPt },
    { id: 22, name: "Xiangli Yao", image: XiangliYao, portrait: XYPt },
    { id: 23, name: "Shorekeeper", image: Shorekeeper, portrait: SKPt },
    { id: 24, name: "Camellya", image: Camellya, portrait: CamellyaPt },
    { id: 25, name: "Carlotta", image: Carlotta, portrait: CarlottaPt },
    { id: 26, name: "Roccia", image: Roccia, portrait: RocciaPt },
    { id: 27, name: "Phoebe", image: Phoebe, portrait: PhoebePt },
    { id: 28, name: "Brant", image: Brant, portrait: BrantPt }
];

export default CharactersData;
