import logo from './logo.svg';
import './App.css';
import {useTranslation} from "react-i18next";

function App() {

  const {t, i18n} = useTranslation(['translation', 'common'])

  console.log(t)

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button onClick={() => changeLanguage("en")}>EN</button>
          <button onClick={() => changeLanguage("ru")}>RU</button>
          <button onClick={() => changeLanguage("gr")}>GR</button>
        </div>
        <h1>{t('title')}</h1>
        <div>
          {t('description.part1')}
          {t('description.part2')}
        </div>
      </header>
    </div>
  );
}

export default App;
