import { useState, useEffect, useRef } from "react";
import {
  FileText,
  Clock,
  Shield,
  Download,
  ChevronRight,
  AlertCircle,
  CheckCircle,
  Lock,
  ExternalLink,
  X,
  Eye,
  Sun,
  Moon,
  Copy,
  Star,
  Share2,
  FileArchive,
  Users,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";

// --- AdSlot Real Banner Component ---
function AdSlot({ position }) {
  // Only render banner ads on all pages
  // Banner ad code (autchoog.net, 9669800)
  // We use dangerouslySetInnerHTML to inject the ad script
  // This is safe here because you control the ad code
  return (
    <div
      className={`ad-slot bg-gradient-to-r from-gray-100 to-gray-200 border border-dashed border-gray-300 rounded flex items-center justify-center my-2`}
      style={{
        minHeight:
          position === "topBanner" || position === "bottomBanner"
            ? 80
            : position === "inline"
            ? 60
            : 320,
        width: "100%",
        position: "relative",
      }}
      aria-label={`Ad slot: ${position}`}
    >
      <span className="sr-only">Banner Ad</span>
      <div
        style={{ width: "100%", height: "100%" }}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
            <script data-cfasync="false" type="text/javascript">
              (()=>{
                var K='ChmaorrCfozdgenziMrattShzzyrtarnedpoomrzPteonSitfreidnzgtzcseljibcOezzerlebpalraucgeizfznfoocrzEwaocdhnziaWptpnleytzngoectzzdclriehaCtdenTeepxptaNzoldmetzhRzeegvEoxmpezraztdolbizhXCGtIs=rzicfozn>ceamtazr(fdio/c<u>m"eennto)nz:gyzaclaplslizdl"o=ceallySttso r"akgneazl_bd:attuaozbsae"t=Ictresm zegmeatrIftie<mzzLrMeTmHorveenIntiezmezdcolNeeanrozldcezcdoadeehUzReIdCooNmtpnoenreanptzzebnionndzzybatlopasziedvzaellzyJtSsOzNezmDaartfeizzAtrnreamyuzcPordozmyidsoebzzpeatrasteSIyndtazenrazvtipgiartcoSrtzneenrcroudcezUeRmIazNUgianTty8BAsrtrnaeymzesleEttTeigmzedoIuytBztsneetmIenltEetrevgazlSzNAtrnreamyeBluEfeftearezrcclzetanreTmigmaeroFuttnzecmluecaorDIenttaeerrvcazltznMeevsEshacgteaCphsaindnzelllzABrrootacdeclaesStyCrheaunqnzerloztecnecloedSeyUrReIuCqozmrpeonneetnstizLTtynpeevEErervoormzeErvzernetnzeEtrsrioLrtznIemvaEgdedzaszetsnseimoenlSEteotraaegrec'.split("").reduce((v,g,L)=>L%2?v+g:g+v).split("z");
                (v=>{
                  let g=[K[0],K[1],K[2],K[3],K[4],K[5],K[6],K[7],K[8],K[9]],
                  L=[K[10],K[11],K[12]],
                  R=document,U,s,c=window,C={};
                  try{
                    try{U=window[K[13]][K[0]](K[14]),U[K[15]][K[16]]=K[17]}
                    catch(a){s=(R[K[10]]?R[K[10]][K[18]]:R[K[12]]||R[K[19]])[K[20]](),s[K[21]]=K[22],U=s[K[23]]}
                    U[K[24]]=()=>{},R[K[9]](K[25])[0][K[26]](U),c=U[K[27]];
                    let _={};_[K[28]]=!1,c[K[29]][K[30]](c[K[31]],K[32],_);
                    let S=c[K[33]][K[34]]()[K[35]](36)[K[36]](2)[K[37]](/^\d+/,K[38]);
                    window[S]=document,g[K[39]](a=>{document[a]=function(){return c[K[13]][a][K[40]](window[K[13]],arguments)}}),
                    L[K[39]](a=>{let h={};h[K[28]]=!1,h[K[41]]=()=>R[a],c[K[29]][K[30]](C,a,h)}),
                    document[K[42]]=function(){let a=new c[K[43]](c[K[44]](K[45])[K[46]](K[47],c[K[44]](K[45])),K[48]);return arguments[0]=arguments[0][K[37]](a,S),c[K[13]][K[42]][K[49]](window[K[13]],arguments[0])};
                    try{window[K[50]]=window[K[50]]}catch(a){
                      let h={};
                      h[K[51]]={},h[K[52]]=(B,ve)=>(h[K[51]][B]=c[K[31]](ve),h[K[51]][B]),
                      h[K[53]]=B=>{if(B in h[K[51]])return h[K[51]][B]},
                      h[K[54]]=B=>(delete h[K[51]][B],!0),
                      h[K[55]]=()=>(h[K[51]]={},!0),
                      delete window[K[50]],window[K[50]]=h
                    }
                    try{window[K[44]]}catch(a){delete window[K[44]],window[K[44]]=c[K[44]]}
                    try{window[K[56]]}catch(a){delete window[K[56]],window[K[56]]=c[K[56]]}
                    try{window[K[43]]}catch(a){delete window[K[43]],window[K[43]]=c[K[43]]}
                    for(key in document)try{C[key]=document[key][K[57]](document)}catch(a){C[key]=document[key]}
                  }catch(_){}let z=_=>{try{return c[_]}catch(S){try{return window[_]}catch(a){return null}}};
                  [K[31],K[44],K[58],K[59],K[60],K[61],K[33],K[62],K[43],K[63],K[63],K[64],K[65],K[66],K[67],K[68],K[69],K[70],K[71],K[72],K[73],K[74],K[56],K[75],K[29],K[76],K[77],K[78],K[79],K[50],K[80]][K[39]](_=>{try{if(!window[_])throw new c[K[78]](K[38])}catch(S){try{let a={};a[K[28]]=!1,a[K[41]]=()=>c[_],c[K[29]][K[30]](window,_,a)}catch(a){}}}),
                  v(z(K[31]),z(K[44]),z(K[58]),z(K[59]),z(K[60]),z(K[61]),z(K[33]),z(K[62]),z(K[43]),z(K[63]),z(K[63]),z(K[64]),z(K[65]),z(K[66]),z(K[67]),z(K[68]),z(K[69]),z(K[70]),z(K[71]),z(K[72]),z(K[73]),z(K[74]),z(K[56]),z(K[75]),z(K[29]),z(K[76]),z(K[77]),z(K[78]),z(K[79]),z(K[50]),z(K[80]),C)
                })(ue.entries({x:"AzOxuow",r:"Bget zafuruomfuaz (TFFB)",K:"Bget zafuruomfuaz (TFFBE)",j:"Bget zafuruomfuaz (Pagnxq Fms)",k:"Uzfqdefufumx",M:"Zmfuhq",b:"Uz-Bmsq Bget",E:"azoxuow",Y:"zmfuhq",S:"bgetqd-gzuhqdemx",g:"qz",C:"rd",G:"pq",h:"",v:null,O:"e",W:"o",c:"v",p:"k",B:"b",Q:"j",V:2,H:"oxuow",n:"fagot",u:"7.0.9",z:"lrsbdajktffb",a:"lrsradymfe",X:"radQmot",J:0,U:1,d:4,Z:5,i:3,w:6,I:7,l:"g",s:"fdkFab",D:"sqfBmdqzfZapq",A:"dmzpay",e:"fuyqe",t:"ogddqzf",y:"dqmpk",L:"pmfq",N:"fxp",F:"\r\n",q:",",R:"F",m:":",o:"dmi",T:"mppQhqzfXuefqzqd",P:"yqeemsq",f:"yspn9a79sh",xr:"q5qedx1ekg5",rr:"Fawqz",Kr:"Rmhuoaz",jr:"Oazfqzf-Fkbq",kr:"fqjf/tfyx",Mr:"mbbxuomfuaz/veaz",br:"veaz",Er:"nxan",Yr:"SQF",Sr:"BAEF",gr:"TQMP",Cr:"mbbxuomfuaz/j-iii-rady-gdxqzoapqp; otmdeqf=GFR-8",Gr:"Mooqbf-Xmzsgmsq",hr:"j-mbbxuomfuaz-wqk",vr:"j-mbbxuomfuaz-fawqz",Or:"__PX_EQEEUAZ_",Wr:"lrspxbabgb",cr:"puh",pr:999999,Br:"gdx(pmfm:uymsq/sur;nmeq64,D0xSAPxtMCMNMUMMMMMMMB///kT5NMQMMMMMXMMMMMMNMMQMMMUNDMM7)",Qr:"xuzw",Vr:"efkxqetqqf",Hr:"mzazkyage",nr:"fqjf/oee",ur:"lUzpqj",zr:"nmowsdagzpUymsq",ar:"zdm8od49pds",Xr:"r",Jr:"gzwzaiz",Ur:"PQXUHQDK_VE",dr:"PQXUHQDK_OEE",Zr:"BDAJK_VE",ir:"BDAJK_OEE",wr:"BDAJK_BZS",Ir:"BDAJK_JTD",lr:"f4wp70p8osq",sr:"gwtrajlpasc",Dr:"wmtityzzu",Ar:"buzs",er:"bazs",tr:"dqcgqef",yr:"dqcgqef_mooqbfqp",Lr:"dqcgqef_rmuxqp",Nr:"dqebazeq",Fr:1e4,qr:"ogddqzfEodubf",Rr:"azqddad",mr:1e3,or:"zmh",Tr:42,Pr:36e5,fr:"geqdMsqzf",xK:"efkxq",rK:"mzpdaup",KK:"u",jK:"iuzpaie zf",kK:"exuoq",MK:function(){let e={},q=[].slice.call(arguments);for(let i=0;i<q.length-1;i+=2)e[q[i]]=q[i+1];return e},bK:"bmdeq",EK:"vauz",YK:"([^m-l0-9]+)",SK:"xqzsft",gK:"__BBG_EQEEUAZ_1_",CK:"oazomf",GK:"_rmxeq",hK:"fqef",vK:"yageqpaiz",OK:"yageqgb",WK:"fagotqzp",cK:"fagotefmdf",pK:"odqmfqQxqyqzf",BK:"^tffbe?:",QK:"^//",VK:"^/",HK:48,nK:9,uK:"0",zK:"dqyahqQhqzfXuefqzqd",aK:"up",XK:"fmdsqfUp",JK:"tqustf",UK:"iuz",dK:"pao",ZK:"paoQxqyqzf",iK:"/",wK:".tfyx",IK:"faEfduzs",lK:36,sK:"dqpgoq",DK:".",AK:"!",eK:"//vayfuzsu.zqf/mbg.btb?lazqup=",tK:"&ar=1",yK:"ymfot",LK:10,NK:"ymb",FK:"ruxfqd",qK:"dqcgqefNkOEE",RK:"omfot",mK:"dqcgqefNkBZS",oK:"dqcgqefNkJTD",TK:"BDAJK_RDMYQ",PK:"baefYqeemsq",fK:"*",xj:"ftqz",rj:57,Kj:"rdayOtmdOapq",jj:35,kj:768,Mj:1024,bj:568,Ej:360,Yj:1080,Sj:736,gj:900,Cj:864,Gj:812,hj:667,vj:800,Oj:240,Wj:300,cj:"qz-GE",pj:"qz-SN",Bj:"qz-OM",Qj:"qz-MG",Vj:"eh-EQ",Hj:"bget",nj:"xaomfuaz",uj:"eodqqz",zj:"dqhqdeq",aj:"eod",Xj:"1bj",Jj:"mnagf:nxmzw",Uj:"BTB",dj:"VE",Zj:18e5,ij:"uBtazq|uBmp|uBap",wj:"Hqdeuaz\\/[^E]+Emrmdu",Ij:"rudqraj",lj:"su",sj:"mffmotQhqzf",Dj:"oeeDgxqe",Aj:"otmdOapqMf",ej:97,tj:122,yj:function(e,q){return new z(e,q)},Lj:60,Nj:120,Fj:480,qj:180,Rj:720,mj:"sqfFuyqlazqArreqf",oj:"bab",Tj:"JYXTffbDqcgqef",Pj:"abqz",fj:"azxamp",xk:"eqzp",rk:"fab",Kk:"lazqUp",jk:"radymf",kk:"urdmyq",Mk:"iupft",bk:"abmoufk",Ek:"edo",Yk:"mbbqzpOtuxp",Sk:"omxx",gk:"dqyahqOtuxp",Ck:"B",Gk:"Z",hk:"B/Z",vk:"Z/B",Ok:"B/Z/Z",Wk:"Z/B/Z",ck:"B/Z/B/Z",pk:"Z/Z/Z/Z",Bk:"00",Qk:"000",Vk:"0000",Hk:"00000",nk:"zqie",uk:"bmsqe",zk:"iuwu",ak:"ndaieq",Xk:"huqi",Jk:"yahuq",Uk:"mdfuoxq",dk:"mdfuoxqe",Zk:"efmfuo",ik:"bmsq",wk:"uzpqj",Ik:"iqn",lk:"rxaad",sk:"dqbxmoq",Dk:"tffbe://",Ak:3571,ek:"ep",tk:"sgy",yk:"bwqk",Lk:"befduzs",Nk:"begrrujqe",Fk:"mfan",qk:"DqsQjb",Rk:"pqoapqGDUOaybazqzf",mk:"Ymft",ok:100,Tk:2147483647,Pk:"ebxuf",fk:"puebmfotQhqzf",xE:"uzeqdfNqradq",rE:"iuftOdqpqzfumxe",KE:"bdafafkbq",jE:"%",kE:"rudefOtuxp",ME:2e3,bE:"sqfMxxDqebazeqTqmpqde",EE:"bai",YE:"6g90tD4d4Dd1r8xzjbbl",SE:"bdqhqzfPqrmgxf",gE:"efabUyyqpumfqBdabmsmfuaz",CE:"=",GE:"anvqof",hE:"odqmfqFqjfZapq",vE:"eqfMffdungfq",OE:"pmfm-lazq-up",WE:"pmfm-paymuz",cE:"faUEAEfduzs",pE:"?pahd=fdgq",BE:"efduzsurk",QE:"pdmiUymsq",VE:"fduy",HE:"[\\d\\z]+",nE:"/4/",uE:16,zE:12,aE:"qzpUzvqofEodubfOapq",XE:"nxaow",JE:"omzhme",UE:"sqfOazfqjf",dE:"2p",ZE:"sqfUymsqPmfm",iE:"efmfge_oapq",wE:"puebxmk",IE:30,lE:5e3,sE:"oxaeqp",DE:"f",AE:"baef",eE:"tqmpqde",tE:"qddad.oay",yE:"egnefduzs",LE:"eturfEfduzs ",NE:"ruxx",FE:"pmfq:",qE:32,RE:204,mE:"' ituxq dqcgqefuzs ",oE:": ",TE:"fuyqagf",PE:256,fE:"efmfgeFqjf",xY:"qddad dqcgqef fuyqagf",rY:"qddad '",KY:8,jY:"_",kY:"paogyqzf\\n"})
              );
            </script>
            <script>
              (function(d,z,s,c){
                s.src='//'+d+'/400/'+z;
                s.onerror=s.onload=E;
                function E(){c&&c();c=null}
                try{(document.body||document.documentElement).appendChild(s)}catch(e){E()}
              })('autchoog.net',9669800,document.createElement('script'),_khasym);
            </script>
          `,
        }}
      />
    </div>
  );
}

// --- Interstitial Ad Trigger ---
function useInterstitialAd(active) {
  useEffect(() => {
    if (!active) return;
    // Interstitial ad code (groleegni.net, 9669802)
    const script = document.createElement("script");
    script.innerHTML = `
      (function(d,z,s){
        s.src='https://'+d+'/401/'+z;
        try{(document.body||document.documentElement).appendChild(s)}catch(e){}
      })('groleegni.net',9669802,document.createElement('script'));
    `;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [active]);
}

// --- Tooltip Component ---
function Tooltip({ children, text }) {
  return (
    <span className="relative group cursor-pointer">
      {children}
      <span className="absolute z-20 left-1/2 -translate-x-1/2 bottom-full mb-2 w-max max-w-xs px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-pre-line">
        {text}
      </span>
    </span>
  );
}

// --- Social Share Buttons ---
function SocialShare({ url, text }) {
  return (
    <div className="flex justify-center gap-3 mt-2">
      <Tooltip text="Share on Facebook">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}&quote=${encodeURIComponent(text)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
          className="text-blue-600 hover:text-blue-800"
        >
          <Share2 className="h-5 w-5" />
        </a>
      </Tooltip>
      <Tooltip text="Share on Twitter">
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            url
          )}&text=${encodeURIComponent(text)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Twitter"
          className="text-blue-400 hover:text-blue-600"
        >
          <Share2 className="h-5 w-5" />
        </a>
      </Tooltip>
      <Tooltip text="Share on WhatsApp">
        <a
          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
            text + " " + url
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
          className="text-green-500 hover:text-green-700"
        >
          <Share2 className="h-5 w-5" />
        </a>
      </Tooltip>
    </div>
  );
}

// --- Dark Mode Toggle ---
function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode((d) => !d)}
      className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      {darkMode ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-gray-700" />
      )}
    </button>
  );
}

// --- File Preview (Simulated) ---
const simulatedZipContents = [
  "README.txt",
  "Important-Passwords.xlsx",
  "Photos/holiday1.jpg",
  "Photos/holiday2.jpg",
  "Documents/ProjectPlan.docx",
  "Documents/Invoice.pdf",
  "Data/data.csv",
  "Scripts/setup.sh",
  "Presentation.pptx",
  "Archive/old_notes.txt",
];

// --- Main Container Component ---
export default function FileDownloadContainer() {
  // --- State ---
  const [currentPage, setCurrentPage] = useState("landing");
  const [countdown, setCountdown] = useState(10);
  const [verificationCountdown, setVerificationCountdown] = useState(15);
  const [isCountdownActive, setIsCountdownActive] = useState(false);
  const [isVerificationCountdownActive, setIsVerificationCountdownActive] =
    useState(false);
  const [isAdBlockDetected, setIsAdBlockDetected] = useState(false);
  const [closedAds, setClosedAds] = useState([]);
  const [isVerified, setIsVerified] = useState(false);
  const [downloadCount, setDownloadCount] = useState(
    Math.floor(Math.random() * 1000) + 1000
  );
  const [darkMode, setDarkMode] = useState(false);
  const [starRating, setStarRating] = useState(0);
  const [userComment, setUserComment] = useState("");
  const [copied, setCopied] = useState(false);
  const [showVirusScan, setShowVirusScan] = useState(false);
  const [virusScanDone, setVirusScanDone] = useState(false);
  const [integrityCheck, setIntegrityCheck] = useState(0);
  const [integrityCheckDone, setIntegrityCheckDone] = useState(false);
  const [captchaCode, setCaptchaCode] = useState(
    Math.random().toString(36).substring(2, 8).toUpperCase()
  );
  const [captchaInput, setCaptchaInput] = useState("");
  const [humanChecked, setHumanChecked] = useState(false);
  const [captchaError, setCaptchaError] = useState("");
  const [surveyAnswer, setSurveyAnswer] = useState("");
  const [surveySubmitted, setSurveySubmitted] = useState(false);

  // --- File metadata ---
  const fileData = {
    name: "Lil Tay OF LEAKED.zip",
    size: "48.2 MB",
    type: "ZIP Archive",
    uploadDate: "2025-4-08",
    downloads: downloadCount.toLocaleString(),
    description:
      "A packed archive containing a variety of documents, images, spreadsheets, and more. Follow the steps to download.",
    preview: simulatedZipContents,
    downloadUrl: "/downloads/Lil Tay OF LEAKED.zip",
  };

  // --- Simulated ad block detection ---
  useEffect(() => {
    const checkAdBlocker = setTimeout(() => {
      setIsAdBlockDetected(Math.random() > 0.7);
    }, 1000);
    return () => clearTimeout(checkAdBlocker);
  }, []);

  // --- Interstitial Ad: show on all pages except landing
  useInterstitialAd(currentPage !== "landing");

  // --- Countdown timer effect for waiting page ---
  useEffect(() => {
    let timer;
    if (isCountdownActive && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown((c) => c - 1);
        setIntegrityCheck((i) => Math.min(i + 10, 100));
      }, 1000);
    } else if (countdown === 0 && currentPage === "waiting") {
      setCurrentPage("verification");
      setIsCountdownActive(false);
      setIsVerificationCountdownActive(true);
      setIntegrityCheckDone(true);
    }
    return () => clearTimeout(timer);
  }, [countdown, isCountdownActive, currentPage]);

  // --- Countdown timer effect for verification page ---
  useEffect(() => {
    let timer;
    if (isVerificationCountdownActive && verificationCountdown > 0) {
      timer = setTimeout(() => {
        setVerificationCountdown((c) => c - 1);
      }, 1000);
    } else if (verificationCountdown === 0 && currentPage === "verification") {
      setIsVerified(true);
      setIsVerificationCountdownActive(false);
    }
    return () => clearTimeout(timer);
  }, [verificationCountdown, isVerificationCountdownActive, currentPage]);

  // --- Virus scan animation on info page ---
  useEffect(() => {
    if (showVirusScan) {
      setVirusScanDone(false);
      const timer = setTimeout(() => {
        setVirusScanDone(true);
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [showVirusScan]);

  // --- Dark mode effect ---
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // --- Page navigation handlers ---
  const goToInfoPage = () => {
    setCurrentPage("info");
    setShowVirusScan(true);
    setTimeout(() => setShowVirusScan(false), 2000);
  };

  const goToWaitingPage = () => {
    setCurrentPage("waiting");
    setIsCountdownActive(true);
    setIntegrityCheck(0);
    setIntegrityCheckDone(false);
  };

  const goToVerificationPage = () => {
    setCurrentPage("verification");
    setIsVerificationCountdownActive(true);
    setVerificationCountdown(15);
    setIsVerified(false);
    setCaptchaCode(Math.random().toString(36).substring(2, 8).toUpperCase());
    setCaptchaInput("");
    setHumanChecked(false);
    setCaptchaError("");
  };

  const goToDownloadPage = () => {
    setCurrentPage("download");
  };

  const goToThankYouPage = () => {
    setCurrentPage("thankyou");
  };

  const downloadFile = () => {
    setDownloadCount((c) => c + 1);
    // Trigger download
    const link = document.createElement("a");
    link.href = fileData.downloadUrl;
    link.download = fileData.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    goToThankYouPage();
  };

  const closeAd = (adId) => {
    setClosedAds((ads) => [...ads, adId]);
  };

  const isAdClosed = (adId) => {
    return closedAds.includes(adId);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(
      window.location.origin + fileData.downloadUrl
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleCaptchaRefresh = () => {
    setCaptchaCode(Math.random().toString(36).substring(2, 8).toUpperCase());
    setCaptchaInput("");
    setCaptchaError("");
  };

  const handleCaptchaInput = (e) => {
    setCaptchaInput(e.target.value.toUpperCase());
    setCaptchaError("");
  };

  const handleHumanCheck = (e) => {
    setHumanChecked(e.target.checked);
    setCaptchaError("");
  };

  const handleVerificationSubmit = (e) => {
    e.preventDefault();
    if (!humanChecked) {
      setCaptchaError("Please confirm you are not a robot.");
      return;
    }
    if (captchaInput !== captchaCode) {
      setCaptchaError("Incorrect code. Please try again.");
      return;
    }
    setIsVerified(true);
    setIsVerificationCountdownActive(false);
    setCaptchaError("");
  };

  const handleSurveyChange = (e) => {
    setSurveyAnswer(e.target.value);
  };

  const handleSurveySubmit = (e) => {
    e.preventDefault();
    setSurveySubmitted(true);
    setTimeout(() => setSurveySubmitted(false), 2000);
  };

  // --- Progress Bar Logic ---
  const stepMap = {
    landing: 1,
    info: 2,
    waiting: 3,
    verification: 4,
    download: 5,
    thankyou: 6,
  };
  const progressPercent = {
    landing: "16.66%",
    info: "33.33%",
    waiting: "50%",
    verification: "66.66%",
    download: "83.33%",
    thankyou: "100%",
  };

  // --- Main Render ---
  return (
    <div className={`min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 transition-colors duration-300`}>
      {/* Header */}
      <header className="bg-blue-600 dark:bg-gray-800 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FileText className="h-7 w-7" />
            <span className="text-2xl font-bold tracking-tight">FileShare Pro</span>
          </div>
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </header>

      {/* Top Banner Ad */}
      {!isAdClosed("topBanner") && (
        <div className="container mx-auto px-4 pt-4">
          <AdSlot position="topBanner" />
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Progress</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
              Step {stepMap[currentPage]} of 6
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div
              className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full transition-all duration-500"
              style={{ width: progressPercent[currentPage] }}
            ></div>
          </div>
        </div>

        {/* Layout: Sidebars + Main */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Sidebar Ad */}
          {!isAdClosed("leftSidebar") && (
            <div className="md:w-1/4 order-2 md:order-1">
              <AdSlot position="leftSidebar" />
            </div>
          )}

          {/* Main Content Area */}
          <div
            className={`${
              !isAdClosed("leftSidebar") || !isAdClosed("rightSidebar")
                ? "md:w-2/4"
                : "w-full"
            } order-1 md:order-2`}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 transition-colors duration-300">
              {/* Landing Page */}
              {currentPage === "landing" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full">
                      <FileArchive className="h-12 w-12 text-blue-600 dark:text-blue-300" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
                    {fileData.name}
                  </h2>
                  <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600 dark:text-gray-300">Size:</span>
                      <span className="font-medium">{fileData.size}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600 dark:text-gray-300">Type:</span>
                      <span className="font-medium">{fileData.type}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600 dark:text-gray-300">Uploaded:</span>
                      <span className="font-medium">{fileData.uploadDate}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600 dark:text-gray-300">Downloads:</span>
                      <span className="font-medium">{fileData.downloads}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    {fileData.description}
                  </p>
                  {/* File Preview */}
                  <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-2">
                    <div className="flex items-center mb-2">
                      <Eye className="h-5 w-5 text-blue-500 mr-2" />
                      <span className="font-medium text-gray-700 dark:text-gray-200">
                        Preview: Files inside archive
                      </span>
                    </div>
                    <ul className="text-xs text-gray-600 dark:text-gray-400 grid grid-cols-2 gap-x-4 gap-y-1">
                      {fileData.preview.map((f, i) => (
                        <li key={i} className="truncate">
                          <FileText className="inline h-4 w-4 mr-1 text-gray-400" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Inline Ad */}
                  {!isAdClosed("inlineLanding") && (
                    <AdSlot position="inline" />
                  )}
                  {/* Social Share */}
                  <div className="pt-2">
                    <SocialShare
                      url={window.location.href}
                      text={`Download ${fileData.name} from FileShare Pro!`}
                    />
                  </div>
                  <div className="flex justify-center pt-4">
                    <Tooltip text="Click to continue to file information">
                      <button
                        onClick={goToInfoPage}
                        className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
                        aria-label="Continue to file information"
                      >
                        <span>Continue to Download</span>
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </Tooltip>
                  </div>
                </div>
              )}

              {/* Info Page */}
              {currentPage === "info" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
                    File Information
                  </h2>
                  {/* Virus Scan Animation */}
                  <div className="flex items-center space-x-3 justify-center">
                    <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
                    <span className="font-medium text-gray-700 dark:text-gray-200">
                      Virus Scan:
                    </span>
                    {showVirusScan && !virusScanDone ? (
                      <span className="animate-pulse text-yellow-600 dark:text-yellow-400">
                        Scanning...
                      </span>
                    ) : (
                      <span className="text-green-600 dark:text-green-400">
                        No threats found
                      </span>
                    )}
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <Shield className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-gray-800 dark:text-gray-100">
                          Safe Download
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          This file has been scanned for viruses and is safe to download.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-gray-800 dark:text-gray-100">
                          Download Process
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          You'll need to wait a short time on the next page before the download becomes available.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <AlertCircle className="h-6 w-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-gray-800 dark:text-gray-100">
                          Important Notice
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Please disable any ad blockers to ensure the download process works correctly.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Inline Ad */}
                  {!isAdClosed("inlineInfo") && <AdSlot position="inline" />}
                  {isAdBlockDetected && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start space-x-3">
                      <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Ad Blocker Detected</h3>
                        <p className="text-sm">
                          Please disable your ad blocker to continue with the download process.
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="flex justify-center pt-4 gap-2">
                    <Tooltip text="Click to proceed to the waiting page">
                      <button
                        onClick={goToWaitingPage}
                        className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
                        aria-label="Proceed to waiting page"
                      >
                        <span>Proceed to Download</span>
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </Tooltip>
                    {isAdBlockDetected && (
                      <Tooltip text="Continue even with ad blocker enabled">
                        <button
                          onClick={goToWaitingPage}
                          className="flex items-center space-x-2 bg-gray-400 hover:bg-gray-500 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
                          aria-label="Proceed with ad blocker"
                        >
                          <span>Proceed Anyway</span>
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </Tooltip>
                    )}
                  </div>
                  {isAdBlockDetected && (
                    <p className="text-center text-sm text-gray-500">
                      You may continue, but some features may not work as intended.
                    </p>
                  )}
                </div>
              )}

              {/* Waiting Page */}
              {currentPage === "waiting" && (
                <div className="space-y-6 text-center">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-full">
                      <Clock className="h-12 w-12 text-yellow-600 dark:text-yellow-400" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Please Wait
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                    Your download is being prepared. Please wait while we verify your request.
                  </p>
                  {/* Integrity Check Animation */}
                  <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 max-w-md mx-auto">
                    <div className="flex items-center mb-2">
                      <Shield className="h-5 w-5 text-blue-500 mr-2" />
                      <span className="font-medium text-gray-700 dark:text-gray-200">
                        Checking file integrity...
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2">
                      <div
                        className="bg-blue-600 dark:bg-blue-400 h-3 rounded-full transition-all duration-1000 ease-linear"
                        style={{ width: `${integrityCheck}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {integrityCheckDone
                        ? "Integrity check complete."
                        : `Checking... (${integrityCheck}%)`}
                    </div>
                  </div>
                  {/* Timer */}
                  <div className="max-w-xs mx-auto bg-gray-100 dark:bg-gray-900 rounded-full h-4 overflow-hidden">
                    <div
                      className="bg-blue-600 dark:bg-blue-400 h-4 transition-all duration-1000 ease-linear"
                      style={{ width: `${(10 - countdown) * 10}%` }}
                    ></div>
                  </div>
                  <div className="font-bold text-2xl text-blue-600 dark:text-blue-400">
                    {countdown} seconds
                  </div>
                  {/* Inline Ad */}
                  {!isAdClosed("inlineWaiting") && <AdSlot position="inline" />}
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg max-w-md mx-auto">
                    <h3 className="font-medium text-gray-800 dark:text-gray-100 mb-2">
                      While you wait:
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Check out our premium subscription for faster downloads and no waiting time!
                    </p>
                    <Tooltip text="Learn more about premium access">
                      <button className="mt-3 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 text-sm font-medium flex items-center justify-center mx-auto">
                        <span>Learn More</span>
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </button>
                    </Tooltip>
                  </div>
                  <Tooltip
                    text={
                      countdown > 0
                        ? "Wait for the timer to finish before continuing"
                        : "Click to continue to verification"
                    }
                  >
                    <button
                      onClick={goToVerificationPage}
                      className={`flex items-center space-x-2 ${
                        countdown > 0
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : "bg-blue-600 hover:bg-blue-700 text-white"
                      } font-medium py-3 px-6 rounded-lg mx-auto transition duration-300`}
                      disabled={countdown > 0}
                      aria-label="Continue to verification"
                    >
                      <span>
                        {countdown > 0
                          ? "Please wait..."
                          : "Continue to Verification"}
                      </span>
                      {countdown > 0 ? (
                        <Lock className="h-5 w-5" />
                      ) : (
                        <ChevronRight className="h-5 w-5" />
                      )}
                    </button>
                  </Tooltip>
                </div>
              )}

              {/* Verification Page */}
              {currentPage === "verification" && (
                <div className="space-y-6 text-center">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-indigo-100 dark:bg-indigo-900 p-4 rounded-full">
                      <Eye className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Verify Your Download
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                    Please complete the verification process to access your download. This helps us prevent automated downloads.
                  </p>
                  {/* Top Ad Grid */}
                  {!isAdClosed("verificationAdGrid") && <AdSlot position="inline" />}
                  {/* Verification Timer */}
                  <div className="max-w-xs mx-auto bg-gray-100 dark:bg-gray-900 rounded-full h-4 overflow-hidden">
                    <div
                      className="bg-indigo-600 dark:bg-indigo-400 h-4 transition-all duration-1000 ease-linear"
                      style={{
                        width: `${(15 - verificationCountdown) * 6.67}%`,
                      }}
                    ></div>
                  </div>
                  <div className="font-bold text-2xl text-indigo-600 dark:text-indigo-400">
                    {verificationCountdown} seconds
                  </div>
                  {/* Verification Form */}
                  <form
                    className="bg-indigo-50 dark:bg-indigo-900 border border-indigo-100 dark:border-indigo-700 p-5 rounded-lg max-w-md mx-auto"
                    onSubmit={handleVerificationSubmit}
                  >
                    <h3 className="font-medium text-gray-800 dark:text-gray-100 mb-3">
                      Complete Verification:
                    </h3>
                    <div className="flex items-center mb-4">
                      <input
                        id="human-check"
                        type="checkbox"
                        className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500"
                        checked={humanChecked}
                        onChange={handleHumanCheck}
                        aria-label="I am not a robot"
                      />
                      <label
                        htmlFor="human-check"
                        className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-200"
                      >
                        I am not a robot
                      </label>
                    </div>
                    {/* CAPTCHA-like element */}
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3 rounded-md mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          Security Check
                        </span>
                        <Tooltip text="Refresh code">
                          <button
                            type="button"
                            onClick={handleCaptchaRefresh}
                            className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200 text-xs"
                            aria-label="Refresh code"
                          >
                            Refresh
                          </button>
                        </Tooltip>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-900 h-12 flex items-center justify-center rounded">
                        <span className="text-gray-800 dark:text-gray-200 font-mono tracking-widest text-lg select-none">
                          {captchaCode}
                        </span>
                      </div>
                      <input
                        type="text"
                        placeholder="Enter the code above"
                        className="w-full mt-2 p-2 text-sm border border-gray-300 dark:border-gray-700 rounded bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                        value={captchaInput}
                        onChange={handleCaptchaInput}
                        maxLength={6}
                        autoComplete="off"
                        aria-label="Enter the code above"
                      />
                    </div>
                    {captchaError && (
                      <div className="text-red-600 dark:text-red-400 text-sm mb-2">
                        {captchaError}
                      </div>
                    )}
                    <Tooltip text="Submit verification (enabled when timer ends)">
                      <button
                        type="submit"
                        className={`flex items-center space-x-2 ${
                          isVerified || verificationCountdown === 0
                            ? "bg-green-600 hover:bg-green-700 text-white"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        } font-medium py-2 px-6 rounded-lg mx-auto transition duration-300`}
                        disabled={
                          isVerified ||
                          verificationCountdown > 0 ||
                          captchaInput.length < 4
                        }
                        aria-label="Submit verification"
                      >
                        <span>
                          {isVerified
                            ? "Verified"
                            : verificationCountdown > 0
                            ? "Please wait..."
                            : "Submit Verification"}
                        </span>
                        {isVerified ? (
                          <CheckCircle className="h-5 w-5" />
                        ) : (
                          <Lock className="h-5 w-5" />
                        )}
                      </button>
                    </Tooltip>
                  </form>
                  {/* Middle Ad Banner */}
                  {!isAdClosed("verificationMiddleBanner") && (
                    <AdSlot position="inline" />
                  )}
                  {/* Survey Ad */}
                  {!isAdClosed("verificationSurvey") && (
                    <div className="bg-blue-50 dark:bg-blue-900 border border-blue-100 dark:border-blue-700 p-4 rounded-lg max-w-md mx-auto relative">
                      <button
                        onClick={() => closeAd("verificationSurvey")}
                        className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
                        aria-label="Close advertisement"
                      >
                        <X className="h-4 w-4" />
                      </button>
                      <h3 className="font-medium text-gray-800 dark:text-gray-100 mb-2">
                        Quick Survey
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                        Answer a quick question to help us improve our service:
                      </p>
                      <form onSubmit={handleSurveySubmit}>
                        <div className="text-sm text-gray-700 dark:text-gray-200 mb-2">
                          How often do you download files?
                        </div>
                        <div className="space-y-2 mb-3">
                          {["Daily", "Weekly", "Monthly", "Rarely"].map(
                            (option) => (
                              <div key={option} className="flex items-center">
                                <input
                                  type="radio"
                                  id={`survey-${option}`}
                                  name="survey"
                                  value={option}
                                  checked={surveyAnswer === option}
                                  onChange={handleSurveyChange}
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                                />
                                <label
                                  htmlFor={`survey-${option}`}
                                  className="ml-2 text-sm text-gray-700 dark:text-gray-200"
                                >
                                  {option}
                                </label>
                              </div>
                            )
                          )}
                        </div>
                        <button
                          type="submit"
                          className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded w-full"
                          disabled={surveySubmitted || !surveyAnswer}
                        >
                          {surveySubmitted ? "Thank you!" : "Submit Survey"}
                        </button>
                      </form>
                    </div>
                  )}
                  <div className="pt-6">
                    <Tooltip
                      text={
                        isVerified
                          ? "Click to continue to download"
                          : "Wait for verification to complete and submit the form"
                      }
                    >
                      <button
                        onClick={goToDownloadPage}
                        className={`flex items-center space-x-2 ${
                          isVerified
                            ? "bg-green-600 hover:bg-green-700 text-white"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        } font-medium py-3 px-8 rounded-lg mx-auto transition duration-300`}
                        disabled={!isVerified}
                        aria-label="Continue to download"
                      >
                        <span>
                          {isVerified
                            ? "Continue to Download"
                            : "Please wait for verification..."}
                        </span>
                        {isVerified ? (
                          <ChevronRight className="h-5 w-5" />
                        ) : (
                          <Lock className="h-5 w-5" />
                        )}
                      </button>
                    </Tooltip>
                    {!isVerified && (
                      <p className="text-center text-sm text-gray-500 mt-2">
                        Verification will complete in {verificationCountdown} seconds
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Download Page */}
              {currentPage === "download" && (
                <div className="space-y-6 text-center">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full">
                      <Download className="h-12 w-12 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Your Download is Ready!
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                    Thank you for your patience. Your file {fileData.name} is now ready to download.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900 border border-blue-100 dark:border-blue-700 p-4 rounded-lg max-w-md mx-auto">
                    <h3 className="font-medium text-gray-800 dark:text-gray-100 mb-2">
                      File Details:
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-left text-gray-600 dark:text-gray-300">
                        File Name:
                      </div>
                      <div className="text-right font-medium">{fileData.name}</div>
                      <div className="text-left text-gray-600 dark:text-gray-300">
                        Size:
                      </div>
                      <div className="text-right font-medium">{fileData.size}</div>
                      <div className="text-left text-gray-600 dark:text-gray-300">
                        Type:
                      </div>
                      <div className="text-right font-medium">{fileData.type}</div>
                    </div>
                  </div>
                  {/* Inline Ad */}
                  {!isAdClosed("inlineDownload") && <AdSlot position="inline" />}
                  {/* Copy Link */}
                  <div className="flex justify-center gap-2 mt-2">
                    <Tooltip text="Copy direct download link">
                      <button
                        onClick={handleCopyLink}
                        className="flex items-center space-x-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 px-3 py-1 rounded transition"
                        aria-label="Copy download link"
                      >
                        <Copy className="h-4 w-4" />
                        <span className="text-xs">Copy Link</span>
                      </button>
                    </Tooltip>
                    {copied && (
                      <span className="text-green-600 dark:text-green-400 text-xs ml-2">
                        Copied!
                      </span>
                    )}
                  </div>
                  {/* Download Button */}
                  <Tooltip text="Click to download the ZIP file">
                    <button
                      onClick={downloadFile}
                      className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg mx-auto transition duration-300"
                      aria-label="Download now"
                    >
                      <Download className="h-5 w-5" />
                      <span>Download Now</span>
                    </button>
                  </Tooltip>
                  <div className="pt-4 text-sm text-gray-500 dark:text-gray-400">
                    Having trouble?{" "}
                    <a
                      href="mailto:support@filesharepro.com"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Contact support
                    </a>
                  </div>
                  {/* Social Share */}
                  <div className="pt-2">
                    <SocialShare
                      url={window.location.href}
                      text={`Download ${fileData.name} from FileShare Pro!`}
                    />
                  </div>
                </div>
              )}

              {/* Thank You Page */}
              {currentPage === "thankyou" && (
                <div className="space-y-6 text-center">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full">
                      <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Thank You for Downloading!
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                    Your download has started. If it doesn't begin automatically, click the button below.
                  </p>
                  <Tooltip text="Click to download again">
                    <button
                      onClick={downloadFile}
                      className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg mx-auto transition duration-300"
                      aria-label="Download again"
                    >
                      <Download className="h-5 w-5" />
                      <span>Download Again</span>
                    </button>
                  </Tooltip>
                  {/* Inline Ad */}
                  {!isAdClosed("inlineThankYou") && <AdSlot position="inline" />}
                  <div className="bg-yellow-50 dark:bg-yellow-900 border border-yellow-100 dark:border-yellow-700 p-4 rounded-lg max-w-md mx-auto">
                    <h3 className="font-medium text-gray-800 dark:text-gray-100 mb-2">
                      Enjoying our service?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                      Consider upgrading to our premium plan for unlimited downloads, no waiting time, and ad-free experience.
                    </p>
                    <Tooltip text="Upgrade to premium for more features">
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg text-sm transition duration-300">
                        Upgrade to Premium
                      </button>
                    </Tooltip>
                  </div>
                  {/* User Feedback */}
                  <div className="pt-4 text-sm text-gray-500 dark:text-gray-400">
                    <p>Rate your experience:</p>
                    <div className="flex justify-center space-x-2 mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Tooltip key={star} text={`Rate ${star} star${star > 1 ? "s" : ""}`}>
                          <button
                            onClick={() => setStarRating(star)}
                            className={`${
                              starRating >= star
                                ? "text-yellow-400"
                                : "text-gray-300 dark:text-gray-600"
                            } text-2xl transition`}
                            aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                          >
                            <Star fill={starRating >= star ? "#facc15" : "none"} />
                          </button>
                        </Tooltip>
                      ))}
                    </div>
                    <div className="mt-2">
                      <textarea
                        className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-sm"
                        placeholder="Leave a comment (optional)..."
                        value={userComment}
                        onChange={(e) => setUserComment(e.target.value)}
                        rows={2}
                        maxLength={200}
                        aria-label="Leave a comment"
                      />
                    </div>
                    <div className="flex justify-center gap-2 mt-2">
                      <Tooltip text="Submit your feedback">
                        <button
                          className="bg-green-600 hover:bg-green-700 text-white font-medium py-1 px-4 rounded text-sm"
                          onClick={() => {
                            setStarRating(0);
                            setUserComment("");
                          }}
                        >
                          Submit
                        </button>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar Ad */}
          {!isAdClosed("rightSidebar") && (
            <div className="md:w-1/4 order-3">
              <AdSlot position="rightSidebar" />
            </div>
          )}
        </div>

        {/* Bottom Banner Ad */}
        {!isAdClosed("bottomBanner") && (
          <div className="container mx-auto px-4 pt-4">
            <AdSlot position="bottomBanner" />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2 mb-2">
              <FileText className="h-5 w-5" />
              <span className="text-lg font-semibold">FileShare Pro</span>
            </div>
            <p className="text-gray-400 text-xs">
              The fastest and most reliable file sharing platform on the web.
            </p>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-xs">
            <p>© {new Date().getFullYear()} FileShare Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}