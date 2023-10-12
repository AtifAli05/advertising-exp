import SplashLogo from './Splash-Logo.svg';
import Profile from './Profile.svg';
import EmailIcon from './Email-Icon.svg';
import PasswordLock from './Password-Lock.svg';
import PasswordSecure from './Password-Secure.svg';
import HomeBottom from './Home-Bottom.svg';
import HomeBottomActive from './Home-Bottom-Active.svg';
import DocumentBottom from './Document-Bottom.svg';
import DocumentBottomActive from './Document-Bottom-Active.svg';
import PerformanceBottom from './Performance-Bottom.svg';
import PerformanceBottomActive from './Performance-Bottom-Active.svg';
import SettingBottom from './Setting-Bottom.svg';
import SettingBottomActive from './Setting-Bottom-Active.svg';
import FacebookLogo from './Facebook-Logo.svg';
import AdsenseLogo from './Adsense-Logo.svg';
import TwitterLogo from './Twitter-Logo.svg';
import InstaLogo from './Insta-Logo.svg';
import TikTok from './TikTok-Logo.svg';
import AdsLogo from './Ads-Logo.svg';
import UpDown from './up-down.svg';
import DropDown from './DropDown.svg';
import BackBottomSheet from './Back-BottomSheet.svg';
import SplashImg from './SplashImg.svg';
import ImgBack from './Img-Forgot-Back.svg';
import AddIcon from './Add-Icon.svg';
import ExpenseGo from './Expense-Go.svg';
import IncomeGo from './Income-Go.svg';
import GraphFb from './Graph-Fb.svg';
import GraphTiktok from './Graph-TikTok.svg';
import CurrencyLogo from './Currency-Logo.svg';
import RateLogo from './Rate-Logo.svg';
import ShareLogo from './Share-Logo.svg';
import CurrencyGo from './Currency-Go.svg';
import SignOutIcon from './SignOut-Icon.svg';
import GraphAds from './Graph-Ads.svg';
import HistoryLogo from './History-Logo.svg';
import DateLogo from './Date-Logo.svg';
import SearchLogo from './Search-Logo.svg';
import SelectLanguage from './Select-Language.svg';
export {
  SplashLogo,
  Profile,
  EmailIcon,
  PasswordLock,
  PasswordSecure,
  HomeBottom,
  HomeBottomActive,
  DocumentBottom,
  DocumentBottomActive,
  PerformanceBottom,
  PerformanceBottomActive,
  SettingBottom,
  SettingBottomActive,
  FacebookLogo,
  AdsenseLogo,
  TwitterLogo,
  InstaLogo,
  TikTok,
  AdsLogo,
  UpDown,
  DropDown,
  BackBottomSheet,
  SplashImg,
  ImgBack,
  AddIcon,
  ExpenseGo,
  IncomeGo,
  GraphFb,
  GraphTiktok,
  CurrencyLogo,
  RateLogo,
  ShareLogo,
  CurrencyGo,
  SignOutIcon,
  GraphAds,
  HistoryLogo,
  DateLogo,
  SearchLogo,
  SelectLanguage,
};

import React from 'react';
import {TouchableOpacity} from 'react-native';
import {WP} from '../../../Utils';
const AnySvg = ({name, width, style, height, onPress}) => {
  const Tag = name;
  return (
    <>
      {name && (
        <TouchableOpacity
          activeOpacity={0.9}
          style={{justifyContent: 'center', alignItems: 'center'}}
          onPress={onPress}>
          <Tag width={WP(width)} height={WP(height)} style={style} />
        </TouchableOpacity>
      )}
    </>
  );
};
export default AnySvg;
