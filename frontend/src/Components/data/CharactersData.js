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
import PhoebePt from '../../assets/CharacterPortrait/PhoebePt.png'



const CharactersData = [
    { id: 1, name: "Yangyang", image: Yangyang, portrait: PhoebePt, attribute: "Aero", rarity: 4, weapon_type: "Sword" },
    { id: 2, name: "Chixia", image: Chixia, portrait: PhoebePt, attribute: "Fusion", rarity: 4, weapon_type: "Pistols" },
    { id: 3, name: "Baizhi", image: Baizhi, portrait: PhoebePt, attribute: "Glacio", rarity: 4, weapon_type: "Rectifier" },
    { id: 4, name: "Sanhua", image: Sanhua, portrait: PhoebePt, attribute: "Glacio", rarity: 4, weapon_type: "Sword" },
    { id: 5, name: "Aalto", image: Aalto, portrait: PhoebePt, attribute: "Aero", rarity: 4, weapon_type: "Pistols" },
    { id: 6, name: "Encore", image: Encore, portrait: PhoebePt, attribute: "Fusion", rarity: 5, weapon_type: "Rectifier" },
    { id: 7, name: "Jiaxin", image: Jiaxin, portrait: PhoebePt, attribute: "Aero", rarity: 5, weapon_type: "Gauntlet" },
    { id: 8, name: "Jiyan", image: Jiyan, portrait: PhoebePt, attribute: "Aero", rarity: 5, weapon_type: "Broadblade" },
    { id: 9, name: "Mortefi", image: Mortefi, portrait: PhoebePt, attribute: "Fusion", rarity: 4, weapon_type: "Pistols" },
    { id: 10, name: "Yuanwu", image: Yuanwu, portrait: PhoebePt, attribute: "Electro", rarity: 4, weapon_type: "Gauntlet" },
    { id: 11, name: "Verina", image: Verina, portrait: PhoebePt, attribute: "Spectro", rarity: 5, weapon_type: "Rectifier" },
    { id: 12, name: "Taoqi", image: Taoqi, portrait: PhoebePt, attribute: "Havoc", rarity: 4, weapon_type: "Broadblade" },
    { id: 13, name: "Lingyang", image: Lingyang, portrait: PhoebePt, attribute: "Glacio", rarity: 5, weapon_type: "Gauntlet" },
    { id: 14, name: "Calcharo", image: Calcharo, portrait: PhoebePt, attribute: "Electro", rarity: 5, weapon_type: "Broadblade" },
    { id: 15, name: "Danjin", image: Danjin, portrait: PhoebePt, attribute: "Havoc", rarity: 4, weapon_type: "Sword" },
    { id: 16, name: "Yinlin", image: Yinlin, portrait: PhoebePt, attribute: "Electro", rarity: 5, weapon_type: "Rectifier" },
    { id: 17, name: "Jinhsi", image: Jinhsi, portrait: PhoebePt, attribute: "Spectro", rarity: 5, weapon_type: "Broadblade" },
    { id: 18, name: "Changli", image: Changli, portrait: PhoebePt, attribute: "Fusion", rarity: 5, weapon_type: "Sword" },
    { id: 19, name: "Youhu", image: Youhu, portrait: PhoebePt, attribute: "Glacio", rarity: 4, weapon_type: "Gauntlet" },
    { id: 20, name: "Lumi", image: Lumi, portrait: PhoebePt, attribute: "Electro", rarity: 4, weapon_type: "Broadblade" },
    { id: 21, name: "Zhezhi", image: Zhezhi, portrait: PhoebePt, attribute: "Glacio", rarity: 5, weapon_type: "Rectifier" },
    { id: 22, name: "Xiangli Yao", image: XY, portrait: PhoebePt, attribute: "Electro", rarity: 5, weapon_type: "Gauntlet" },
    { id: 23, name: "Shorekeeper", image: SK, portrait: PhoebePt, attribute: "Spectro", rarity: 5, weapon_type: "Rectifier" },
    { id: 24, name: "Camellya", image: Camellya, portrait: PhoebePt, attribute: "Havoc", rarity: 5, weapon_type: "Sword" },
    { id: 25, name: "Carlotta", image: Carlotta, portrait: PhoebePt, attribute: "Glacio", rarity: 5, weapon_type: "Pistols" },
    { id: 26, name: "Roccia", image: Roccia, portrait: PhoebePt, attribute: "Havoc", rarity: 5, weapon_type: "Gauntlet" },
    { id: 27, name: "Phoebe", image: Phoebe, portrait: PhoebePt, attribute: "Spectro", rarity: 5, weapon_type: "Rectifier}" },
    { id: 28, name: "Brant", image: Brant, portrait: PhoebePt, attribute: "Fusion", rarity: 5, weapon_type: "Sword" },
];

export default CharactersData;
