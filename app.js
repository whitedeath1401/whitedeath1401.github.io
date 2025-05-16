// FORM HTB
const inputHari = document.querySelector('#inputHari');
const inputTanggal = document.querySelector('#inputTanggal');
const inputBulan = document.querySelector('#inputBulan');
const tombolHTB = document.querySelector('#tombolHTB');

let outputHari;
let outputTanggal;
let outputBulan;
const htb = [];
let htbJadwalOperasi;

const hariFix = {
  1: 'Senin',
  2: 'Selasa',
  3: 'Rabu',
  4: 'Kamis',
  5: 'Jumat',
  6: 'Sabtu',
  7: 'Minggu'
}

const bulanFix = {
  1: 'Januari',
  2: 'Februari',
  3: 'Maret',
  4: 'April',
  5: 'Mei',
  6: 'Juni',
  7: 'Juli',
  8: 'Agustus',
  9: 'September',
  10: 'Oktober',
  11: 'November',
  12: 'Desember'
}

// FORM OK
const inputNamaOK = document.querySelector('#inputNamaOK');
const inputKelaminOK = document.querySelector('#inputKelaminOK');
const inputUmurOK = document.querySelector('#inputUmurOK');
const inputRmOK = document.querySelector('#inputRmOK');
const inputBangsalOK = document.querySelector('#inputBangsalOK');
const inputDiagnosisOK = document.querySelector('#inputDiagnosisOK');
const toggleDiagnosisOKKapital = document.querySelector('#toggleDiagnosisOKKapital');
const inputPlanOK = document.querySelector('#inputPlanOK');
const togglePlanOKKapital = document.querySelector('#togglePlanOKKapital');
const toggleAnestesiOK = document.querySelector('#toggleAnestesiOK');
const inputOkOK = document.querySelector('#inputOkOK');
const inputJamOK = document.querySelector('#inputJamOK');
const inputDokterOK = document.querySelector('#inputDokterOK');
const tombolOK = document.querySelector('#tombolOK');

let outputNamaOK;
let outputKelaminOK;
let outputUmurOK;
let outputRmOK;
let outputBangsalOK;
let outputDiagnosisOK;
let outputPlanOK;
let outputAnestesiOK;
let outputOkOK;
let outputJamOK;
let outputDokterOK;
let outputDokterLengkapOK;

const dataPasienOK = [];
let urutanPasienOK = 1;
let urutanPasienOhMinSatu = 0;

// OTHER
const izinOperasi = document.querySelector('#izinOperasi');
const jadwalOK = document.querySelector('#jadwalOK');
let brBantuan = document.createElement('br');
// let variabelBantuan = 0;
let namaLengkapKapital = (namaLengkap) => {
  let namaPerKata = namaLengkap.split(" ");

  return namaPerKata.map((nama) => {
    return nama[0].toUpperCase() + nama.substring(1);
  }).join(" ");
}

let bangsalKapital = (bangsal) => {
  if (bangsal === "w" || bangsal === "W") {
    return "Wisnumurti"
  } else if (bangsal === "k" || bangsal === "K") {
    return "Kesawamurti"
  }
  return bangsal.toUpperCase();
}

let diagnosisPlanKapital = (diagnosisPlan) => {
  let diagnosisPlanHurufKecil = diagnosisPlan.toLowerCase();
  let diagnosisPlanPerKata = diagnosisPlanHurufKecil.split(" ");

  return diagnosisPlanPerKata.map((dp) => {
    if (
      dp === "of"||
      dp === "the" ||
      dp === "dan"||
      dp === "dengan"||
      dp === "serta"||
      dp === "atau"||
      dp === "dari"||
      dp === "on"||
      dp === "pre"||
      dp === "post"||
      dp === "ai"||
      dp === "ec"||
      dp === "s/d"||
      dp === "and"||
      dp === "ke"||
      dp === "dd"||
      dp === "due"||
      dp === "to"||
      dp === "dalam" ||
      dp === "by" ||
      dp === "et" ||
      dp === "di" ||
      dp === "pada" ||
      dp === "ke" ||
      dp === "a" ||
      dp === "via" ||
      dp === "at"
    ) {
      return dp;
    } else if (
      dp === "asd" || dp === "asd," ||
      dp === "vsd" || dp === "vsd," ||
      dp === "dcsa" || dp === "dcsa," ||
      dp === "afrvr" || dp === "afrvr," ||
      dp === "ipc" || dp === "ipc," ||
      dp === "ali" || dp === "ali," ||
      dp === "te" || dp === "te," ||
      dp === "tt" || dp === "tt," ||
      dp === "la" || dp === "la," ||
      dp === "ga" || dp === "ga," ||
      dp === "umn" || dp === "umn," ||
      dp === "lmn" || dp === "lmn," ||
      dp === "sdh" || dp === "sdh," ||
      dp === "aml" || dp === "aml," ||
      dp === "wsd" || dp === "wsd," ||
      dp === "vap" || dp === "vap," ||
      dp === "clti" || dp === "clti," ||
      dp === "dm" || dp === "dm," ||
      dp === "pmo" || dp === "pmo," ||
      dp === "msa" || dp === "msa," ||
      dp === "ii" || dp === "ii," ||
      dp === "iii" || dp === "iii," ||
      dp === "iv" || dp === "iv," ||
      dp === "vi" || dp === "vi," ||
      dp === "vii" || dp === "vii," ||
      dp === "viii" || dp === "viii," ||
      dp === "ix" || dp === "ix," ||
      dp === "rosc" || dp === "rosc," ||
      dp === "ckd" || dp === "ckd," ||
      dp === "hd" || dp === "hd," ||
      dp === "as" || dp === "as," ||
      dp === "ar" || dp === "ar," ||
      dp === "ms" || dp === "ms," ||
      dp === "mr" || dp === "mr," ||
      dp === "ps" || dp === "ps," ||
      dp === "pr" || dp === "pr," ||
      dp === "ts" || dp === "ts," ||
      dp === "tr" || dp === "tr," ||
      dp === "lcc" || dp === "lcc," ||
      dp === "ncc" || dp === "ncc," ||
      dp === "rcc" || dp === "rcc," ||
      dp === "pda" || dp === "pda," ||
      dp === "dcsa" || dp === "dcsa," ||
      dp === "pmo" || dp === "pmo," ||
      dp === "pfo" || dp === "pfo," ||
      dp === "ph" || dp === "ph," ||
      dp === "tb" || dp === "tb," ||
      dp === "rhd" || dp === "rhd," ||
      dp === "da" || dp === "da," ||
      dp === "de" || dp === "de," ||
      dp === "dvt" || dp === "dvt," ||
      dp === "cvi" || dp === "cvi," ||
      dp === "hflr" || dp === "hflr," ||
      dp === "pa" || dp === "pa," ||
      dp === "bt" || dp === "bt," ||
      dp === "l-bt" || dp === "l-bt," ||
      dp === "avsd" || dp === "avsd," ||
      dp === "plsvc" || dp === "plsvc," ||
      dp === "av"
    ) {
      return dp.toUpperCase();
    }
    return dp[0].toUpperCase() + dp.substring(1);
  }).join(" ");
}

let timDokterOK = (dokterOK) => {
  if (dokterOK === "TEG") {
    return 'TA'
  } else if (dokterOK === "KUN") {
    return 'KS'
  } else if (dokterOK === "HER") {
    return 'HJ'
  } else if (dokterOK === "SUW") {
    return 'WJ'
  } else if (dokterOK === "ART") {
    return 'TW'
  } else if (dokterOK === "SUM") {
    return 'SLA'
  } else if (dokterOK === "HIM") {
    return 'DIT'
  } else if (dokterOK === "DYA") {
    return 'DWI'
  } else if (dokterOK === "ADR") {
    return 'DRI'
  }
  return ''
}

let timDokterLengkapOK = (dokterOK) => {
  if (dokterOK === "TEG") {
    return 'Prof. Dr. dr. Teguh Aryandono, Sp.B, Subsp.Onk(K)'
  } else if (dokterOK === "KUN") {
    return 'dr. Kunta Setiaji, Sp.B, Subsp.Onk(K)'
  } else if (dokterOK === "HER") {
    return 'dr. Herjuna Hardiyanto, Sp.B, Subsp.Onk(K)'
  } else if (dokterOK === "SUW") {
    return 'dr. Suwardjo, Sp.B, Subsp.Onk(K)'
  } else if (dokterOK === "ART") {
    return 'Dr. dr. R. Artanto Wahyono, Sp.B, Subsp.Onk(K)'
  } else if (dokterOK === "SUM") {
    return 'dr. Sumadi Lukman Anwar, M.Sc, Ph.D, Sp.B, Subsp.Onk(K)'
  } else if (dokterOK === "HIM") {
    return 'dr. Himawan Adhitama, Sp.B, Subsp.Onk(K)'
  } else if (dokterOK === "DYA") {
    return 'Dr. rer. nat. dr. R.A. Dyah Laksmi Dewi, Sp.B'
  } else if (dokterOK === "ADR") {
    return 'dr. Adrian Dewata Wardhana, Sp.B, Subsp.Onk (K)'
  }
  return ''
}

const formatOkOK = (okOK) => {
  const map = {
    "11": "GBST 1.01",
    "12": "GBST 1.02",
    "13": "GBST 1.03",
    "40": "GBST 4.00",
    "41": "GBST 4.01",
    "42": "GBST 4.02",
    "43": "GBST 4.03",
    "44": "GBST 4.04",
    "45": "GBST 4.05",
    "46": "GBST 4.06",
    "51": "GBST 5.01",
    "52": "GBST 5.02",
    "53": "GBST 5.03",
    "54": "GBST 5.04",
    "55": "GBST 5.05",
    "56": "GBST 5.06",
    "57": "GBST 5.07",
    "11.": "PJT 1.1.",
    "12.": "PJT 1.2.",
    "21.": "PJT 2.1.",
    "22.": "PJT 2.2.",
    "31.": "PJT 3.1.",
    "32.": "PJT 3.2.",
    "41.": "PJT 4.1.",
    "42.": "PJT 4.2."
  };
  return map[okOK] || '';
};

let jamFix = (jam) => {
  if (jam.endsWith('.')) {
    // Jika ada titik di akhir, ubah ke format HH.30
    jam = jam.slice(0, -1); // Hapus titik
    return (jam.length === 1 ? '0' + jam : jam) + '.30';
  } else {
    // Format standar HH.00
    return (jam.length === 1 ? '0' + jam : jam) + '.00';
  }
};

// TOMBOL HTB
tombolHTB.addEventListener('click', () => {

    outputHari = hariFix[inputHari.value];
    outputTanggal = inputTanggal.value;
    outputBulanAngka = inputBulan.value;
    outputBulan = bulanFix[inputBulan.value];

    htb.push({
      hari: outputHari,
      tanggal: outputTanggal,
      bulan: outputBulan,
      bulanAngka: outputBulanAngka,
    })

    htbJadwalOperasi = document.createElement('p');
    htbJadwalOperasi.innerHTML += `*${htb[0]['hari']}, ${htb[0]['tanggal']} ${htb[0]['bulan']} 2025*`
    izinOperasi.after(htbJadwalOperasi);

    document.querySelector('#containerHTB').classList.add('none');
    document.querySelector('#containerJadwalOperasi').classList.remove('none');
})


// TOMBOL OK
tombolOK.addEventListener('click', () => {

  outputNamaOK = namaLengkapKapital(inputNamaOK.value);
  outputKelaminOK = inputKelaminOK.value.toUpperCase();
  outputUmurOK = inputUmurOK.value;
  outputRmOK  = inputRmOK.value;
  outputBangsalOK = bangsalKapital(inputBangsalOK.value);

  if (toggleDiagnosisOKKapital.checked === false) {
    outputDiagnosisOK = diagnosisPlanKapital(inputDiagnosisOK.value);
  } else if (toggleDiagnosisOKKapital.checked === true) {
    outputDiagnosisOK = inputDiagnosisOK.value;
  }

  if (togglePlanOKKapital.checked === false) {
    outputPlanOK = diagnosisPlanKapital(inputPlanOK.value);
  } else if (togglePlanOKKapital.checked === true) {
    outputPlanOK = inputPlanOK.value;
  }

  outputAnestesiOK = inputAnestesiOK.value.toUpperCase()
  outputOkOK = formatOkOK(inputOkOK.value);
  outputJamOK = jamFix(inputJamOK.value);
  outputDokterOK = timDokterOK(inputDokterOK.value.toUpperCase());
  outputDokterLengkapOK = timDokterLengkapOK(inputDokterOK.value.toUpperCase());

  dataPasienOK.push({
    nama: outputNamaOK,
    kelamin: outputKelaminOK,
    umur: outputUmurOK,
    rm: outputRmOK,
    bangsal: outputBangsalOK,
    diagnosis: outputDiagnosisOK,
    plan: outputPlanOK,
    anestesi: outputAnestesiOK,
    ok: outputOkOK,
    jam: outputJamOK,
    dokter: outputDokterOK,
    dokterLengkap: outputDokterLengkapOK
  })

  let listPasienOK = document.createElement('div');
  listPasienOK.innerHTML += `
  * ${urutanPasienOK}. ${dataPasienOK[urutanPasienOhMinSatu]['nama']}, ${dataPasienOK[urutanPasienOhMinSatu]['kelamin']}, ${dataPasienOK[urutanPasienOhMinSatu]['umur']} th, ${dataPasienOK[urutanPasienOhMinSatu]['rm']}, ${dataPasienOK[urutanPasienOhMinSatu]['bangsal']}, dr. ${dataPasienOK[urutanPasienOhMinSatu]['dokter']}*
  <br>Dx : ${dataPasienOK[urutanPasienOhMinSatu]['diagnosis']}
  <br>Tx : ${dataPasienOK[urutanPasienOhMinSatu]['plan']}
  <br>DPJP : ${dataPasienOK[urutanPasienOhMinSatu]['dokterLengkap']}
  <br>OK : ${dataPasienOK[urutanPasienOhMinSatu]['ok']} Jam ${dataPasienOK[urutanPasienOhMinSatu]['jam']}
  <br>Anestesi : ${dataPasienOK[urutanPasienOhMinSatu]['anestesi']}
  <br>
  <br>
  `

  jadwalOK.append(listPasienOK);
  jadwalOK.classList.remove('none');

  urutanPasienOK++;
  urutanPasienOhMinSatu++;

  inputNamaOK.value = '';
  inputKelaminOK.value = '';
  inputUmurOK.value = '';
  inputRmOK.value = '';
  inputBangsalOK.value = '';
  inputDiagnosisOK.value = '';
  inputPlanOK.value = '';
  inputAnestesiOK.value = '';
  inputOkOK.value = '';
  inputJamOK.value = '';
  inputDokterOK.value = '';
})

// TOGGLE
document.querySelector('#toggleFormOK').addEventListener('click', () => {
  document.querySelector('#containerFormOK').classList.toggle('none');
})

document.querySelector('#toggleJadwalOperasi').addEventListener('click', () => {
  document.querySelector('#containerJadwalOperasi').classList.toggle('paddingContainerJadwalOperasi');
  document.querySelector('#jadwalOperasi').classList.toggle('none');
})

document.querySelector('#toggleSelesai').addEventListener('click', () => {
  document.querySelector('#selesai').classList.toggle('none');

})
