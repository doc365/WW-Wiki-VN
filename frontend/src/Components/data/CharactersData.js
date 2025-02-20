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
import XiangliYao from '../../assets/Character/CharactersIcon/Xiangli.Yao.png'
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
    { name: "Xiangli Yao", image: XiangliYao, portrait: XYPt },
    { name: "Shorekeeper", image: Shorekeeper, portrait: SKPt },
    { name: "Camellya", image: Camellya, portrait: CamellyaPt },
    { name: "Carlotta", image: Carlotta, portrait: CarlottaPt },
    { name: "Roccia", image: Roccia, portrait: RocciaPt },
    { name: "Phoebe", image: Phoebe, portrait: PhoebePt },
    { name: "Brant", image: Brant, portrait: BrantPt }
];

export default CharactersData;
