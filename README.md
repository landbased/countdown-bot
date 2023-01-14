# countdown-bot

a (bad) script to solve the countdown letters and numbers games

letters finds every match... at least the ones in words.txt  
numbers finds only one solution

## usage

`node letters.mjs [LETTERS]`

`node numbers.mjs [TARGET] [NUM1] [NUM2] ...`

## examples

```
$ node letters.mjs SAGNETISD
SAGNETISD
n = 9
searching 370105 words...
[
  'STEADINGS', 'EASTINGS', 'SEATINGS', 'GIANTESS', 'ASSIGNED',
  'ASSIDENT',  'SANDIEST', 'DESTAINS', 'SEDATING', 'TEASING',
  'INGESTA',   'GENISTA',  'SIGNATE',  'GAINSET',  'INGATES',
  'EATINGS',   'SIGNETS',  'INGESTS',  'TANSIES',  'TISANES',
  'ENTASIS',   'SESTIAN',  'SESTINA',  'AGEISTS',  'SAGIEST',
  'GISANTS',   'DESIGNS',  'SANDIES',  'AGISTED',  'DIGESTS',
  'DISSEAT',   'SESTIAD',  'DETAINS',  'SAINTED',  'STAINED',
  'SATINED',   'INSTEAD',  'DASSENT',  'DISNEST',  'SNIDEST',
  'DISSENT',   'NIDGETS',  'STANGED',  'DESTAIN',  'SEATING',
  'EASTING',   'STAGNE',   'ESTANG',   'AGENTS',   'AGEIST',
  'TENIAS',    'TINEAS',   'TISANE',   'SATINE',   'SAINTE',
  'STENIA',    'TINGES',   'SIGNET',   'STINGE',   'SATING',
  'GIANTS',    'GISANT',   'GAINST',   'EASING',   'SANGEI',
  'TINAGE',    'TANGIE',   'TEAING',   'STAGES',   'SAGEST',
  'STANES',    'TENSAS',   'SANEST',   'ASSENT',   'SNASTE',
  'STANGS',    'ANGSTS',   'ESSANG',   'INSETS',   'STEINS',
  'SISTEN',    'STINGS',   'SINGES',   'GNEISS',   'TASSIE',
  'SIESTA',    'SATINS',   'STAINS',   'SAINTS',   'SANSEI',
  'ANISES',    'SANIES',   'ANSEIS',   'ANESIS',   'SASINE',
  'SESTIA',    'STAIGS',   'AGISTS',   'GASSIT',   'ASSIGN',
  ... 459 more items
]
took 811.0022999979556ms
```

```
$ node numbers.mjs 821 25 100 75 50 6 4
821
[ 25, 100, 75, 50, 6, 4 ]
n = 6
SOLUTION: 25+100=125,75-4=71,6*125=750,71+750=821
took 19.124600000679493ms
```

