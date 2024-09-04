'use client';

import cookies from '../cookies.json';
import { useLanguageStore } from '../stores/languageStore';
import Link from 'next/link';
import './cookies.css';
import { useEffect } from 'react';
import { useNotFoundStore } from '../stores/notFoundStore';

export default function Cookies() {
  const language = useLanguageStore((state) => state.language);
  const setNotFound = useNotFoundStore((state) => state.setNotFound);
  
  useEffect(() => {
    setNotFound(false);
  });

  return(
    <main className='cookies-main'>
      <div className='cookies-header'>
        <h1>{cookies[language].title}</h1>
        <h2>{cookies[language].subtitle}</h2>
      </div>
      <section className='cookies-section'>
        <h2>{cookies[language].title}</h2>
        <p>{cookies[language].firstParagraph}</p>
        <p>{cookies[language].secondParagraph}</p>
        <p>{cookies[language].thirdParagraph}</p>
        <p>{cookies[language].fourthParagraph}</p>
        <p>{cookies[language].typesSection}</p>
        <ul>
          <li>
            <span>{cookies[language].analytics.title}</span>
            <p>{cookies[language].analytics.desc}</p>
          </li>
          <li>
            <span>{cookies[language].technical.title}</span>
            <p>{cookies[language].technical.desc.firstPart}<Link href={cookies[language].technical.recaptcha} target='_blank'>{cookies[language].linkTitle}</Link>. {cookies[language].technical.desc.secondPart}<Link href={cookies[language].technical.youtubeMaps} target='_blank'>{cookies[language].linkTitle}</Link>.</p>
          </li>
          <li>
            <span>{cookies[language].marketing.title}</span>
            <p>{cookies[language].marketing.desc}<Link href={cookies[language].marketing.link} target="_blank">{cookies[language].linkTitle}</Link>.</p>
          </li>
          <li>
            <span>{cookies[language].socials.title}</span>
            <p>{cookies[language].socials.desc}<Link href={cookies[language].socials.linkedin} target="_blank">Linkedin</Link>.</p>
          </li>
        </ul>
        <p>{cookies[language].fifthParagraph}</p>
        <ul>
          <li>
            <span>{cookies[language].own.title}</span>
            <p>{cookies[language].own.desc}</p>
          </li>
        </ul>
        <div className='cookies-table1'>
          <table>
            <thead>
              <tr>
                <th>{cookies[language].own.table.purpose}</th>
                <th>{cookies[language].own.table.name}</th>
                <th>{cookies[language].own.table.description}</th>
                <th>{cookies[language].own.table.duration}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={2}>{cookies[language].own.table.purposeDesc}</td>
                <td>AEC</td>
                <td>{cookies[language].own.table.aecDesc}</td>
                <td>{cookies[language].own.table.months}</td>
              </tr>
              <tr>
                <td>CONSENT y SOCS</td>
                <td>{cookies[language].own.table.socsDesc}</td>
                <td>{cookies[language].own.table.months}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul>
          <li>
            <span>{cookies[language].thirdParties.title}</span>
            <p>{cookies[language].thirdParties.desc}</p>
          </li>
        </ul>
        <div className='cookies-table2'>
          <table>
            <thead>
              <tr>
                <th>{cookies[language].thirdParties.table.thirdParty}</th>
                <th>{cookies[language].thirdParties.table.purpose.title}</th>
                <th>{cookies[language].thirdParties.table.name}</th>
                <th>{cookies[language].thirdParties.table.description}</th>
                <th>{cookies[language].thirdParties.table.duration}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={11}>{cookies[language].thirdParties.table.descThirdParty}</td>
                <td rowSpan={4}>{cookies[language].thirdParties.table.purpose.technical.title}</td>
                <td>SID Y HSID</td>
                <td>{cookies[language].thirdParties.table.purpose.technical.sidDesc}</td>
                <td>{cookies[language].thirdParties.table.purpose.technical.sidDuration}</td>
              </tr>
              <tr>
                <td>SSID, APISID y SAPISID</td>
                <td>{cookies[language].thirdParties.table.purpose.technical.ssidDesc}</td>
                <td>{cookies[language].thirdParties.table.purpose.technical.ssidDuration}</td>
              </tr>
              <tr>
                <td>OGPC</td>
                <td>{cookies[language].thirdParties.table.purpose.technical.ogpcDesc}</td>
                <td></td>
              </tr>
              <tr>
                <td>RC::C</td>
                <td>{cookies[language].thirdParties.table.purpose.technical.rcDesc}</td>
                <td>{cookies[language].thirdParties.table.purpose.technical.rcDuration}</td>
              </tr>
              <tr>
                <td rowSpan={3}>{cookies[language].thirdParties.table.purpose.analytics.title}</td>
                <td>_ga y _ga_XXXXXXXXXX</td>
                <td rowSpan={3}>{cookies[language].thirdParties.table.purpose.analytics.gDesc}</td>
                <td>{cookies[language].thirdParties.table.purpose.analytics.gaDuration}</td>
              </tr>
              <tr>
                <td>_gid</td>
                <td>{cookies[language].thirdParties.table.purpose.analytics.gidDuration}</td>
              </tr>
              <tr>
                <td>_gat_UA-XXXXXXXXX_X</td>
                <td>{cookies[language].thirdParties.table.purpose.analytics.gatDuration}</td>
              </tr>
              <tr>
                <td rowSpan={4}>{cookies[language].thirdParties.table.purpose.marketing.title}</td>
                <td>1P_JAR</td>
                <td>{cookies[language].thirdParties.table.purpose.marketing.jarDesc}</td>
                <td>{cookies[language].thirdParties.table.purpose.marketing.jarDuration}</td>
              </tr>
              <tr>
                <td>NID</td>
                <td>{cookies[language].thirdParties.table.purpose.marketing.nidDesc}</td>
                <td>{cookies[language].thirdParties.table.purpose.marketing.nidDuration}</td>
              </tr>
              <tr>
                <td>__Secure-ENID</td>
                <td>{cookies[language].thirdParties.table.purpose.marketing.enidDesc}</td>
                <td>{cookies[language].thirdParties.table.purpose.marketing.enidDuration}</td>
              </tr>
              <tr>
                <td>__Secure-1PSID y __Secure-1PAPISID, __Secure-3PSID y __Secure-3PAPISID</td>
                <td>{cookies[language].thirdParties.table.purpose.marketing.psidDesc}</td>
                <td>{cookies[language].thirdParties.table.purpose.marketing.psidDuration}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>{cookies[language].sixthParagraph} <Link href={' https://optout.aboutads.info/'} target="_blank">{cookies[language].linkTitle}</Link>.</p>
        <h3>{cookies[language].cookies.title}</h3>
        <p>{cookies[language].cookies.firstParagraph}</p>
        <p>{cookies[language].cookies.secondParagraph}</p>
        <p>{cookies[language].cookies.thirdParagraph}</p>
        <p>{cookies[language].cookies.fourthParagraph}</p>
        <ul>
          <li>
            <p>Internet Explorer: <Link href={cookies[language].cookies.browser.linkExplorer} target="_blank">{cookies[language].cookies.browser.explorer}</Link></p>
          </li>
          <li>
            <p>Mozilla Firefox: <Link href={cookies[language].cookies.browser.mozilla.linkClear} target="_blank">{cookies[language].cookies.browser.mozilla.clear}</Link> <Link href={cookies[language].cookies.browser.mozilla.linkBlock} target="_blank">{cookies[language].cookies.browser.mozilla.block}</Link></p>
          </li>
          <li>
            <p>Google Chrome: <Link href={cookies[language].cookies.browser.linkChrome} target="_blank">{cookies[language].cookies.browser.chrome}</Link></p>
          </li>
          <li>
            <p>Opera: <Link href={cookies[language].cookies.browser.linkOpera} target="_blank">{cookies[language].cookies.browser.opera}</Link></p>
          </li>
          <li>
            <p>Safari: <Link href={cookies[language].cookies.browser.linkSafari} target="_blank">{cookies[language].cookies.browser.safari}</Link></p>
          </li>
        </ul>
        <p>{cookies[language].cookies.fifthParagraph}</p>
        <p>{cookies[language].cookies.sixthParagraph} <Link href={cookies[language].cookies.linkAddon} target="_blank">{cookies[language].cookies.addon}</Link> {cookies[language].cookies.seventhParagraph} <Link href={cookies[language].cookies.linkPrivacy} target="_blank">{cookies[language].cookies.privacy}</Link> {cookies[language].cookies.and} <Link href={cookies[language].cookies.linkPartners} target="_blank">{cookies[language].cookies.partners}</Link>.</p>
        <p>{cookies[language].cookies.eightParagraph}</p>
      </section>
    </main>
  );
}