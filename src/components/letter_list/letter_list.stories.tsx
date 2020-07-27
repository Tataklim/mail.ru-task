import ReactHelper from "../../libs/reactHelper";
import '../../index.scss';

const reactHelper = new ReactHelper(true)

export default { title: 'LetterList' };

export const defaultLetter = () => reactHelper.renderLetters()
