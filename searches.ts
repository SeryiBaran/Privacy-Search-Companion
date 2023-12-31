export interface FromSearch {
  domainName: string
  domainEndVariations: string[]
  params: string
  selector: string
}

export interface ToSearch {
  id: string
  host: string
  shortName: string
  longName: string
  searchUrl: string
  selector: string
}

export const searchesFrom: FromSearch[] = [
  {
    domainName: 'yandex',
    domainEndVariations: ['ru'],
    params: 'search/?*text=',
    selector: '.input__box input',
  },
  {
    domainName: 'google',
    domainEndVariations: [
      'com',
      'ad',
      'ae',
      'com.af',
      'com.ag',
      'com.ai',
      'am',
      'co.ao',
      'com.ar',
      'as',
      'at',
      'com.au',
      'az',
      'ba',
      'com.bd',
      'be',
      'bf',
      'bg',
      'com.bh',
      'bi',
      'bj',
      'com.bn',
      'com.bo',
      'com.br',
      'bs',
      'co.bw',
      'by',
      'com.bz',
      'ca',
      'cd',
      'cf',
      'cg',
      'ch',
      'ci',
      'co.ck',
      'cl',
      'cm',
      'cn',
      'com.co',
      'co.cr',
      'com.cu',
      'cv',
      'com.cy',
      'cz',
      'de',
      'dj',
      'dk',
      'dm',
      'com.do',
      'dz',
      'com.ec',
      'ee',
      'com.eg',
      'es',
      'com.et',
      'fi',
      'com.fj',
      'fm',
      'fr',
      'ga',
      'ge',
      'gg',
      'com.gh',
      'com.gi',
      'gl',
      'gm',
      'gp',
      'gr',
      'com.gt',
      'gy',
      'com.hk',
      'hn',
      'hr',
      'ht',
      'hu',
      'co.id',
      'ie',
      'co.il',
      'im',
      'co.in',
      'iq',
      'is',
      'it',
      'je',
      'com.jm',
      'jo',
      'co.jp',
      'co.ke',
      'com.kh',
      'ki',
      'kg',
      'co.kr',
      'com.kw',
      'kz',
      'la',
      'com.lb',
      'li',
      'lk',
      'co.ls',
      'lt',
      'lu',
      'lv',
      'com.ly',
      'co.ma',
      'md',
      'me',
      'mg',
      'mk',
      'ml',
      'mn',
      'ms',
      'com.mt',
      'mu',
      'mv',
      'mw',
      'com.mx',
      'com.my',
      'co.mz',
      'com.na',
      'com.nf',
      'com.ng',
      'com.ni',
      'ne',
      'nl',
      'no',
      'com.np',
      'nr',
      'nu',
      'co.nz',
      'com.om',
      'com.pa',
      'com.pe',
      'com.ph',
      'com.pk',
      'pl',
      'pn',
      'com.pr',
      'ps',
      'pt',
      'com.py',
      'com.qa',
      'ro',
      'ru',
      'rw',
      'com.sa',
      'com.sb',
      'sc',
      'se',
      'com.sg',
      'sh',
      'si',
      'sk',
      'com.sl',
      'sn',
      'so',
      'sm',
      'st',
      'com.sv',
      'td',
      'tg',
      'co.th',
      'com.tj',
      'tk',
      'tl',
      'tm',
      'tn',
      'to',
      'com.tr',
      'tt',
      'com.tw',
      'co.tz',
      'com.ua',
      'co.ug',
      'co.uk',
      'com.uy',
      'co.uz',
      'com.vc',
      'co.ve',
      'vg',
      'co.vi',
      'com.vn',
      'vu',
      'ws',
      'rs',
      'co.za',
      'co.zm',
      'co.zw',
      'cat',
      'xxx',
    ],
    params: 'search?*q=',
    selector: 'input.gLFyf',
  },

  {
    selector: '#searchbox',
    domainName: 'search.brave',
    domainEndVariations: ['com'],
    params: 'search?*q=',
  },
  {
    selector: '#q',
    domainName: 'lukol',
    domainEndVariations: ['com'],
    params: 's.php?*q=',
  },
  {
    selector: '#search_form_input',
    domainName: 'duckduckgo',
    domainEndVariations: ['com'],
    params: '?*q=',
  },
  // тут теперь post запрос
  // {
  //   selector: '#q',
  //   domainName: 'searx',
  //   domainEndVariations: ['be'],
  //   params: 'search',
  // },
  {
    domainName: 'swisscows',
    domainEndVariations: ['com'],
    params: 'web?*query=',
    selector: '.input-search',
  },
  {
    domainName: 'metager',
    domainEndVariations: ['org'],
    params: 'meta/meta.ger3?*eingabe=',
    selector: '.form-control',
  },
]

export const searchesTo: ToSearch[] = [
  {
    id: 'brave',
    host: 'search.brave.com',
    shortName: 'Brave',
    longName: 'Brave Search',
    searchUrl: 'https://search.brave.com/search?q=',
    selector: '#searchbox',
  },
  {
    id: 'lukol',
    host: 'www.lukol.com',
    shortName: 'Lukol',
    longName: 'Lukol',
    searchUrl: 'https://www.lukol.com/s.php?q=',
    selector: '#q',
  },
  {
    id: 'ddg',
    host: 'duckduckgo.com',
    shortName: 'DDG',
    longName: 'DuckDuckGo',
    searchUrl: 'https://duckduckgo.com/?q=',
    selector: '#search_form_input',
  },
  //   тут теперь post запрос
  //   {
  //     id: 'SearXNG',
  //     host: 'searx.be',
  //     shortName: 'SearXNG',
  //     longName: 'SearXNG',
  //     searchUrl: 'https://searx.be/search',
  //     selector: '#q',
  //   },
  {
    id: 'swisscows',
    host: 'swisscows.com',
    shortName: 'Swiss',
    longName: 'Swisscows',
    searchUrl: 'https://swisscows.com/web?query=',
    selector: '.input-search',
  },
  {
    id: 'metager',
    host: 'metager.org',
    shortName: 'MetaGer',
    longName: 'MetaGer',
    searchUrl: 'https://metager.org/meta/meta.ger3?eingabe=',
    selector: '.form-control',
  },
]

export const protocols = ['*']

export const urls: string[] = []

Object.values(searchesFrom).forEach((search) => {
  protocols.forEach((protocol) => {
    search.domainEndVariations.forEach((domainEndVariation) => {
      urls.push(
        `${protocol}://www.${search.domainName}.${domainEndVariation}/${search.params}*`,
      )
      urls.push(
        `${protocol}://${search.domainName}.${domainEndVariation}/${search.params}*`,
      )
    })
  })
})

export const searchesFromByHosts: {
  [key: string]: FromSearch
} = {}

Object.values(searchesFrom).forEach((search) => {
  search.domainEndVariations.forEach((domainEndVariation) => {
    searchesFromByHosts[`www.${search.domainName}.${domainEndVariation}`]
      = search
    searchesFromByHosts[`${search.domainName}.${domainEndVariation}`] = search
  })
})
