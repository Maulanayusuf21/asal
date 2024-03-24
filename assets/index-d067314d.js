import{j as e,R as j,r as b}from"./react-76f7fb99.js";import{c as I}from"./react-dom-22628c77.js";import{L as A,c as v}from"./react-router-dom-bca78886.js";import{r as D,u as R}from"./xlsx-04f2268f.js";import{R as U}from"./react-router-86827b19.js";import"./scheduler-765c72db.js";import"./@remix-run-5d0e6a0c.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function p(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerPolicy&&(d.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?d.credentials="include":o.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function r(o){if(o.ep)return;o.ep=!0;const d=p(o);fetch(o.href,d)}})();function L(){return e.jsxs("nav",{className:"flex items-center justify-between flex-wrap bg-teal-800 p-6 mb-10 rounded-b-xl",children:[e.jsx("div",{className:"flex items-center flex-shrink-0 text-teal-300 mr-6 uppercase",children:e.jsx(A,{to:"/",className:"font-semibold text-xl tracking-tight",children:"Wong Ampuh"})}),e.jsx("div",{className:" lg:flex lg:items-center lg:w-auto ",children:e.jsxs("div",{className:"text-lg space-x-15 uppercase",children:[e.jsx(A,{to:"/",className:"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mx-5",children:"Home"}),e.jsx(A,{to:"/label",className:"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mx-5",children:"Proses"})]})})]})}const O=({children:l})=>e.jsx(j.Fragment,{children:e.jsxs("div",{className:"container mx-auto ",children:[e.jsx(L,{}),l]})});function Q(){return e.jsx(O,{children:"Home"})}function Y(l){let c=[];const p=(r,o,d,h,f,s,n,x,y,N,T,i,g)=>e.jsx("div",{className:"max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3",children:e.jsxs("div",{className:"p-5",children:[e.jsx("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center",children:r}),e.jsx("div",{className:"relative overflow-x-auto",children:e.jsx("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-400",children:e.jsxs("tbody",{children:[e.jsxs("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700",children:[e.jsx("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"PO"}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("input",{value:d||"",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"})})]}),e.jsxs("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700",children:[e.jsx("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"ITEM CODE"}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("input",{value:h||"",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"})})]}),e.jsxs("tr",{className:"bg-white dark:bg-gray-800",children:[e.jsx("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"SPEC"}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("input",{value:f||JSON.parse(localStorage.getItem(s+"spec"))||"",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"})})]}),e.jsxs("tr",{className:"bg-white dark:bg-gray-800",children:[e.jsx("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"PCX"}),e.jsx("td",{className:"px-6 py-4 white",children:e.jsx("input",{value:g||"",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"})})]}),e.jsxs("tr",{className:"bg-white dark:bg-gray-800",children:[e.jsx("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"HS CODE"}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("input",{value:s||"",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"})})]}),e.jsxs("tr",{className:"bg-white dark:bg-gray-800",children:[e.jsx("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"COLOR"}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("input",{value:n,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"})})]}),e.jsxs("tr",{className:"bg-white dark:bg-gray-800",children:[e.jsx("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"QTY"}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("input",{value:x+" "+T,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"})})]}),e.jsxs("tr",{className:"bg-white dark:bg-gray-800",children:[e.jsx("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"WEIGHT"}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("input",{value:y+" "+i,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"})})]}),e.jsxs("tr",{className:"bg-white dark:bg-gray-800",children:[e.jsx("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"SHIPMENT"}),e.jsx("td",{className:"px-6 py-4 white",children:e.jsx("input",{value:N,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"})})]})]})})}),e.jsx("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900  text-center",children:o})]})});return e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-wrap w-full gap-6 md:grid-cols-3 mt-5",children:l.DATALOGIC.map((r,o)=>e.jsxs("div",{className:"border-solid rounded-lg border-4 border-black-600 m-auto",children:[c.push(r),r.QTY.ANAKAN>0&&e.jsxs(b.Fragment,{children:[e.jsxs("p",{className:"font-bold text-center m-4 text-white",children:[" ",r.QTY.JUMLAH_PACK," x ",r.QTY.PER_PACK," + ",r.QTY.ANAKAN," ="," ",r.QTY.TOTAL_QTY," "]}),p(r.DATA_CUSTOMER.customer,r.DATA_CUSTOMER.supliyer,r.PO,r.ITEM_CODE,r.SPEC,r.HSCODE,r.COLOR,r.QTY.PER_PACK,r.QTY.WEIGHT.BERAT_PERPACK,r.DATA_CUSTOMER.date,r.UNIT,r.QTY.WEIGHT.UNIT,r.PCX),p(r.DATA_CUSTOMER.customer,r.DATA_CUSTOMER.supliyer,r.PO,r.ITEM_CODE,r.SPEC,r.HSCODE,r.COLOR,r.QTY.ANAKAN,r.QTY.WEIGHT.BERAT_ANAKAN,r.DATA_CUSTOMER.date,r.UNIT,r.QTY.WEIGHT.UNIT,r.PCX)]},o),!r.QTY.ANAKAN&&e.jsxs(b.Fragment,{children:[e.jsxs("p",{className:"font-bold text-center m-4 text-white",children:[" ",r.QTY.JUMLAH_PACK," x ",r.QTY.PER_PACK," = ",r.QTY.TOTAL_QTY," "]}),p(r.DATA_CUSTOMER.customer,r.DATA_CUSTOMER.supliyer,r.PO,r.ITEM_CODE,r.SPEC,r.HSCODE,r.COLOR,r.QTY.PER_PACK,r.QTY.WEIGHT.BERAT_PERPACK,r.DATA_CUSTOMER.date,r.UNIT,r.QTY.WEIGHT.UNIT,r.PCX)]},o)]},o))})})}const w=[];function _(l){const[c,p]=b.useState(null),[r,o]=b.useState(!1),[d,h]=b.useState(null),[f,s]=b.useState(null),n={},x=w.filter(t=>t.PO in n&&t.COLOR in n&&t.ITEM_CODE in n&&t.HSCODE in n&&t.QTY.TOTAL_QTY in n?!1:(n[t.PO]=!0,n[t.COLOR]=!0,n[t.ITEM_CODE]=!0,n[t.HSCODE]=!0,n[t.QTY.TOTAL_QTY]=!0,!0)),y=(t,m)=>t.reduce(function(a,u){return(a[u[m]]=a[u[m]]||[]).push(u),a},{}),N=()=>{const t=y(x,"PO");s(x[0].QTY.WEIGHT.UNIT),l.PO.map(m=>{t[m]&&t[m].sort((a,u)=>{if(a.HSCODE<u.HSCODE)return-1})}),p(t),h(x[0].UNIT),o(!0)},T=t=>{const m=document.getElementById(t);let a=0;if(m!=null)for(let u=1;u<m.rows.length;u++){let k=m.rows[u].cells[3];a+=Number(k.innerText)}return a},i=t=>{const m=document.getElementById(t);let a=0;if(m!=null)for(let u=1;u<m.rows.length;u++){let k=m.rows[u].cells[5];a+=Number(k.innerText)}return a.toFixed(2)},g=t=>{const m=document.getElementById(t);let a=0;if(m!=null)for(let u=1;u<m.rows.length;u++){let k=m.rows[u].cells[8];a+=Number(k.innerText)}return a};return e.jsxs("div",{className:"overflow-x-auto border-solid rounded-lg border-4 border-black-600 mt-9 flex flex-col align-center justify-center",children:[e.jsx("br",{}),e.jsx("button",{className:"text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-auto mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700",onClick:()=>N(),children:"Buat / Update Data SJ"}),r&&l.PO.map((t,m)=>e.jsxs("div",{children:[e.jsxs("div",{className:"relative overflow-x-scroll",children:[e.jsxs("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed cek-table",id:t,children:[e.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center cek-table",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Jenis Barang"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Kode Barang"}),e.jsx("th",{scope:"col",className:"px-6 py-3 ",children:"Warna"}),e.jsx("th",{scope:"col",className:"px-6 py-3 ",children:"Panjang"}),e.jsx("th",{scope:"col",className:"px-6 py-3 "}),e.jsx("th",{scope:"col",className:"px-6 py-3 ",children:"Berat"}),e.jsx("th",{scope:"col",className:"px-6 py-3 "}),e.jsx("th",{scope:"col",className:"px-6 py-3 ",children:"Keterangan"}),e.jsx("th",{scope:"col",className:"px-6 py-3 "}),e.jsx("th",{scope:"col",className:"px-6 py-3 ",children:t})]})}),c[t]!==void 0&&c[t].map((a,u)=>e.jsx("tbody",{children:e.jsxs("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center cek-table border-solid border-2 border-sky-500",children:[e.jsx("td",{className:"px-6 py-4 text-left size-text ",children:JSON.parse(localStorage.getItem(a.HSCODE+"spec"))}),e.jsx("td",{className:"px-6 py-4 text-center size-text ",children:a.ITEM_CODE}),e.jsx("td",{className:"px-6 py-4 text-center size-text",children:a.COLOR}),e.jsx("td",{className:"px-6 py-4 text-center size-text",children:Number(a.QTY.TOTAL_QTY)}),e.jsx("td",{className:"px-6 py-4 text-center size-text",children:a.UNIT}),e.jsxs("td",{className:"px-6 py-4 text-center size-text",children:["=",Number(a.QTY.WEIGHT.BERAT_SATUAN),"*"]}),e.jsx("td",{className:"px-6 py-4 text-center size-text capitalize ",children:a.QTY.WEIGHT.UNIT}),e.jsxs("td",{className:"px-6 py-4 text-left size-text",children:[!a.QTY.ANAKAN&&`${a.QTY.JUMLAH_PACK} X ${a.QTY.PER_PACK} ${a.UNIT}`,Number(a.QTY.ANAKAN)>0&&`${a.QTY.JUMLAH_PACK}  X ${a.QTY.PER_PACK} ${a.UNIT} + ${a.QTY.ANAKAN} ${a.UNIT}`]}),e.jsxs("td",{className:"px-6 py-4 text-center size-text",children:[!a.QTY.ANAKAN&&`${a.QTY.JUMLAH_PACK} `,Number(a.QTY.ANAKAN)>0&&`${Number(a.QTY.JUMLAH_PACK+1)}`]}),e.jsx("td",{className:"px-6 py-4 text-center size-text"}),e.jsx("td",{className:"px-6 py-4 text-center size-text"}),e.jsx("td",{className:"px-6 py-4 text-center size-text"})]})},u))]}),e.jsx("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed",children:e.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center cek-table",children:e.jsxs("tr",{children:[e.jsx("td",{scope:"col",className:"px-6 py-3 ",children:"TOTAL"}),e.jsx("td",{scope:"col",className:"px-6 py-3  "}),e.jsx("td",{scope:"col",className:"px-6 py-3  "}),e.jsx("td",{scope:"col",className:"px-6 py-3 size-text",children:T(t)}),e.jsx("td",{scope:"col",className:"px-6 py-3 size-text",children:d&&d}),e.jsx("td",{scope:"col",className:"px-6 py-3 size-text",children:i(t)}),e.jsx("td",{scope:"col",className:"px-6 py-3 size-text",children:f&&f}),e.jsxs("td",{scope:"col",className:"px-6 py-3 size-text",children:[g(t)," pack"]}),e.jsx("td",{scope:"col",className:"px-6 py-3 "}),e.jsx("td",{scope:"col",className:"px-6 py-3 "}),e.jsx("td",{scope:"col",className:"px-6 py-3 "}),e.jsx("td",{scope:"col",className:"px-6 py-3 "})]})})}),e.jsx("br",{})]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsx("td",{})})}),e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{})})})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{})]},m)),e.jsx("br",{})]})}function M(l){const[c,p]=b.useState("");return b.useEffect(()=>{const r=l.PANJANG;let o=[];const d=(s,n,x,y)=>({PER_PACK:s,WEIGHT:f(s,y),JUMLAH_PACK:x,ANAKAN:y,TOTAL_QTY:n}),h=s=>{if(s>=r){const n=Math.floor(Number(s)/r),x=s-n*r;return s>r&&x==0,d(r,s,n,x)}else return{PER_PACK:s,WEIGHT:f(s),JUMLAH_PACK:1,ANAKAN:NaN,TOTAL_QTY:s}},f=(s,n)=>{const x=l.BERAT/r,y=x*s;return{BERAT_ANAKAN:(x*n).toFixed(2),BERAT_PERPACK:y.toFixed(2),BERAT_SATUAN:Number(x),UNIT:"Kg"}};return l.DATA.map(s=>{const n={PO:s.PO,QTY:h(s.QTY),HSCODE:s.KODE,ITEM_CODE:s.MATERIAL,SPEC:s.SPEC,COLOR:s.COLOUR,UNIT:s.UNIT,DATA_CUSTOMER:l.DATACUST,PCX:s.PCX};return s.QTY?w==n?void 0:(w.push(n),o.push(n)):p(null)}),p(o)},[l.DATA,l.PANJANG,l.BERAT]),e.jsxs(j.Fragment,{children:[c&&e.jsx(Y,{DATALOGIC:c}),c&&e.jsx(_,{NEWDATASJ:c,PO:l.PO,QTYALL:l.QtyAll})]})}function H(l){const[c,p]=b.useState(""),[r,o]=b.useState(null),[d,h]=b.useState(null),[f,s]=b.useState(),[n,x]=b.useState(),y=[...new Set(r)],N=[...new Set(d)];b.useEffect(()=>{const i=[],g=[];l.DATA.map(t=>{console.log(t),i.push(t.PO),g.push(t.KODE+" "+t.UNIT),t.PANJANG&&localStorage.setItem(t.KODE+" "+t.UNIT+"panjang",JSON.stringify(t.PANJANG)),t.BERAT&&localStorage.setItem(t.KODE+" "+t.UNIT+"berat",JSON.stringify(t.BERAT)),t.SPEC&&localStorage.setItem(t.KODE+" "+t.UNIT+"spec",JSON.stringify(t.SPEC))}),o(i.sort()),h(g.sort())},[]);const T=(i,g,t,m)=>{p(""),s(""),x("");const a=l.DATA.filter(S=>S.KODE==i.substring(0,i.length-2)),u=document.getElementById(g).value,k=document.getElementById(t).value,E=document.getElementById(g),C=document.getElementById(t),P=document.getElementById(m);localStorage.setItem(i+"panjang",JSON.stringify(u)),localStorage.setItem(i+"berat",JSON.stringify(k)),JSON.parse(localStorage.getItem(i+"spec"))==null&&localStorage.setItem(i+"spec",JSON.stringify(a[0].SPEC)),u==""||k==""?(P.className="text-white bg-red-400 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",E.className="mb-2 bg-gray-700 border border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 font-bold",C.className="mb-2 bg-gray-700 border border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 font-bold"):(E.className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-md rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500 font-bold",C.className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-md rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500 font-bold",s(Number(u)),x(Number(k)),P.className="focus:outline-none text-white bg-teal-800 hover:bg-teal-500 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"),p(a)};return e.jsxs(j.Fragment,{children:[N.sort()&&N.map((i,g)=>e.jsxs("div",{className:"m-2 flex gap-2",id:`parent${g}${i}${g}`,children:[e.jsx("input",{className:"mb-2 bg-gray-700 border border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 font-bold",type:"number",placeholder:"masukkan panjang",id:`panjang${i}${g}`,defaultValue:JSON.parse(localStorage.getItem(i+"panjang"))}),e.jsx("input",{className:"mb-2 bg-gray-700 border border-gray-300  text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-bold",type:"number",placeholder:"masukkan berat",id:`berat${i}${g}`,defaultValue:JSON.parse(localStorage.getItem(i+"berat"))}),e.jsx("button",{type:"submit",id:`button${g}${i}${g}`,className:"text-white bg-red-400 dark:bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",onClick:()=>T(i,`panjang${i}${g}`,`berat${i}${g}`,`button${g}${i}${g}`),children:i})]},g)),f&&n&&e.jsx(M,{DATA:c,DATACUST:l.DATACUST,PANJANG:f,BERAT:n,PO:y,QtyAll:l.DATA.length})]})}function K(l){const[c,p]=b.useState(""),[r,o]=b.useState("");return b.useEffect(()=>{const d=new FileReader;d.onload=h=>{const f=h.target.result,s=D(f,{type:"binary"}),n=s.SheetNames[0],x=s.Sheets[n],y=R.sheet_to_json(x,{raw:!0}),N={date:y[0].DATE,customer:y[0].CUSTOMER,supliyer:y[0].SUPLIYER};y[0].QTY==null?(p(null),o(null)):(o(N),p(y))},d.readAsBinaryString(l.FILE)},[]),e.jsxs(j.Fragment,{children:[c&&e.jsx("h1",{className:"text-center text-white mb-[20px]",children:r.customer}),c&&e.jsx(H,{DATA:c,DATACUST:r}),!c&&e.jsxs("div",{className:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 mx-2",role:"alert",children:[e.jsx("svg",{"aria-hidden":"true",className:"flex-shrink-0 inline w-5 h-5 mr-3",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"File Yang Anda Masukkan Tidak Sesuai"}),e.jsxs("ul",{className:"mt-1.5 ml-4 list-disc list-inside",children:[e.jsx("li",{children:"Pastikan File Anda Berformat xlsx atau xls"}),e.jsx("li",{children:"Pastikan Anda Mengisi QTY Pada Line Pertama"}),e.jsx("li",{children:"Pastikan Anda Mengisi CUSTOMER Pada Line Pertama"}),e.jsxs("li",{children:["Silahkan Tekan Tombol REMOVE ",l.FILENAME," Di Atas"]}),e.jsx("li",{children:"Dan Ulangi Lagi"})]})]})]})]})}const B=j.memo(K);function F(){const[l,c]=b.useState(""),[p,r]=b.useState(""),o=h=>{c(h.target.files[0]),r(h.target.files[0].name)},d=()=>{c(null)};return e.jsxs(j.Fragment,{children:[!l&&e.jsx("div",{className:"flex items-center justify-center w-80 mx-auto",children:e.jsxs("label",{forform:"dropzone-file",className:"flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-800 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center pt-5 pb-6",children:[e.jsx("svg",{"aria-hidden":"true",className:"w-10 h-10 mb-3 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})}),e.jsxs("p",{className:"mb-2 text-sm text-gray-500 dark:text-gray-400",children:[e.jsx("span",{className:"font-semibold",children:"Click to upload"})," or drag and drop"]}),e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Excel"})]}),e.jsx("input",{type:"file",className:"hidden",onChange:h=>{o(h)}})]})}),l&&e.jsx(e.Fragment,{children:l&&e.jsxs("div",{className:"container flex flex-col align-center justify-center",children:[e.jsxs("button",{type:"button",className:"text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-lg text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 px-10 py-3 my-10 mx-auto",onClick:d,children:["REMOVE ",p]}),e.jsx(B,{FILE:l,FILENAME:p})]})})]})}function J(){return b.useEffect(()=>{const l=c=>(c.preventDefault(),console.log("beforeunload event triggered"),c.returnValue="Are you sure you want to exit?");return window.addEventListener("beforeunload",l),()=>{window.removeEventListener("beforeunload",l)}},[]),e.jsx(O,{children:e.jsx(F,{})})}const $=v([{path:"/",element:e.jsx(Q,{})},{path:"/label",element:e.jsx(J,{})}]);I.createRoot(document.getElementById("root")).render(e.jsx(j.Fragment,{children:e.jsx(U,{router:$})}));