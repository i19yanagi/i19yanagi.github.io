import { component$, useStylesScoped$ } from "@builder.io/qwik";
import logoStyle from "./logo.scss?inline";

export default component$(() => {
  useStylesScoped$(logoStyle);
  return (
    <svg
      width="256px"
      height="239px"
      viewBox="0 0 256 239"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
    >
      <title>Solid</title>
      <defs>
        <linearGradient
          x1="-5.859375%"
          y1="38.2703387%"
          x2="91.40625%"
          y2="60.9240123%"
          id="Solid-linearGradient-1"
        >
          <stop stop-color="#76B3E1" offset="10%"></stop>
          <stop stop-color="#DCF2FD" offset="30%"></stop>
          <stop stop-color="#76B3E1" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          x1="56.9960525%"
          y1="38.4398744%"
          x2="37.9414579%"
          y2="68.3745528%"
          id="Solid-linearGradient-2"
        >
          <stop stop-color="#76B3E1" offset="0%"></stop>
          <stop stop-color="#4377BB" offset="50%"></stop>
          <stop stop-color="#1F3B77" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          x1="10.7088533%"
          y1="34.5316722%"
          x2="104.336952%"
          y2="70.4544679%"
          id="Solid-linearGradient-3"
        >
          <stop stop-color="#315AA9" offset="0%"></stop>
          <stop stop-color="#518AC8" offset="50%"></stop>
          <stop stop-color="#315AA9" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          x1="61.992557%"
          y1="29.5796581%"
          x2="17.7619124%"
          y2="105.119304%"
          id="Solid-linearGradient-4"
        >
          <stop stop-color="#4377BB" offset="0%"></stop>
          <stop stop-color="#1A336B" offset="50%"></stop>
          <stop stop-color="#1A336B" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g>
        <path
          d="M256,50.4728872 C256,50.4728872 170.666667,-12.3195657 104.654088,2.17100038 L99.8238994,3.78106327 C90.163522,7.00118906 82.1132075,11.8313777 77.2830189,18.2716293 L74.0628931,23.101818 L49.9119497,64.9634532 L91.7735849,73.0137677 C109.484277,84.2842079 132.025157,89.1143966 152.955975,84.2842079 L227.018868,98.774774 L256,50.4728872 Z"
          fill="#76B3E1"
        ></path>
        <path
          d="M256,50.4728872 C256,50.4728872 170.666667,-12.3195657 104.654088,2.17100038 L99.8238994,3.78106327 C90.163522,7.00118906 82.1132075,11.8313777 77.2830189,18.2716293 L74.0628931,23.101818 L49.9119497,64.9634532 L91.7735849,73.0137677 C109.484277,84.2842079 132.025157,89.1143966 152.955975,84.2842079 L227.018868,98.774774 L256,50.4728872 Z"
          fill="url(#Solid-linearGradient-1)"
          opacity="0.3"
        ></path>
        <path
          d="M77.2830189,50.4728872 L70.8427673,52.0829501 C43.4716981,60.1332645 35.4213836,85.8942708 49.9119497,108.435151 C66.0125786,129.365969 99.8238994,140.636409 127.194969,132.586095 L227.018868,98.774774 C227.018868,98.774774 141.685535,35.9823211 77.2830189,50.4728872 Z"
          fill="#518AC8"
        ></path>
        <path
          d="M77.2830189,50.4728872 L70.8427673,52.0829501 C43.4716981,60.1332645 35.4213836,85.8942708 49.9119497,108.435151 C66.0125786,129.365969 99.8238994,140.636409 127.194969,132.586095 L227.018868,98.774774 C227.018868,98.774774 141.685535,35.9823211 77.2830189,50.4728872 Z"
          fill="url(#Solid-linearGradient-2)"
          opacity="0.3"
        ></path>
        <path
          d="M209.308176,122.925717 C190.868628,99.8890562 160.300607,90.3365494 132.025157,98.774774 L32.2012579,130.976032 L0,187.328233 L180.327044,217.919428 L212.528302,159.957164 C218.968553,148.686724 217.358491,135.806221 209.308176,122.925717 Z"
          fill="url(#Solid-linearGradient-3)"
        ></path>
        <path
          d="M177.106918,179.277919 C158.667371,156.241257 128.099349,146.688751 99.8238994,155.126975 L0,187.328233 C0,187.328233 85.3333333,251.730749 151.345912,235.63012 L156.176101,234.020057 C183.54717,225.969743 193.207547,200.208736 177.106918,179.277919 Z"
          fill="url(#Solid-linearGradient-4)"
        ></path>
      </g>
    </svg>
  );
});
