import React from "react";
import { Box,SvgIcon } from "@mui/material";
import * as styles from "./sectionStyle3";
export interface ISection3 {}
function Icon1(props: any) {
  return (
      <SvgIcon viewBox="0 0 37 36" {...props}>
          <path d="M35.3551 0.890625L36.3905 2.96146L33.5564 4.37908V33.1971C33.5564 34.4178 32.6113 35.4185 31.4126 35.5065L31.24 35.5134H5.75995C4.53922 35.5134 3.53855 34.5684 3.45053 33.3696L3.44358 33.1971V19.4355L1.64491 20.3343L0.609497 18.2634L3.44358 16.847V7.71697H5.75995V15.6888L35.3551 0.890625ZM31.24 5.53727L5.75995 18.2773V33.1971H12.7091V21.6152C12.7091 20.3945 13.6541 19.3938 14.8529 19.3046L15.0254 19.2988H21.9746C23.1953 19.2988 24.196 20.2439 24.2851 21.4426L24.2909 21.6152V33.1971H31.24V5.53727ZM21.9746 21.6152H15.0254V33.1971H21.9746V21.6152ZM27.7655 12.3497C28.4048 12.3497 28.9237 12.8686 28.9237 13.5079C28.9237 14.1472 28.4048 14.6661 27.7655 14.6661C27.1262 14.6661 26.6073 14.1472 26.6073 13.5079C26.6073 12.8686 27.1262 12.3497 27.7655 12.3497Z" fill="white"/>
      </SvgIcon>
  );
}
function Icon2(props:any){
  return (
      <SvgIcon viewBox="0 0 37 36" {...props}>
        <path d="M30.4192 24.888C29.975 24.888 29.6788 24.5919 29.6788 24.1476V14.0042H12.3536V20.3716C12.3536 20.8158 12.0574 21.112 11.6132 21.112C11.169 21.112 10.8728 20.8158 10.8728 20.3716V13.2638C10.8728 12.8196 11.169 12.5234 11.6132 12.5234H30.4192C30.8634 12.5234 31.1596 12.8196 31.1596 13.2638V24.1476C31.1596 24.5919 30.8634 24.888 30.4192 24.888Z" fill="white"/>
        <path d="M33.3069 14.0041H8.72582C8.42966 14.0041 8.1335 13.856 8.05946 13.5599C7.91138 13.2637 7.98542 12.9676 8.20754 12.7454L20.4981 0.602978C20.7942 0.30682 21.2385 0.30682 21.5346 0.602978L33.8252 12.7454C34.0473 12.9676 34.1213 13.2637 33.9732 13.5599C33.8252 13.856 33.603 14.0041 33.3069 14.0041ZM10.5028 12.5233H31.4559L20.9423 2.1578L10.5028 12.5233ZM24.2741 26.6648C23.8299 26.6648 23.5337 26.3687 23.5337 25.9244V20.5196C23.5337 19.1869 22.4231 18.0022 21.0904 18.0022C19.7577 18.0022 18.6471 19.1128 18.6471 20.5196V22.7408C18.6471 23.185 18.3509 23.4811 17.9067 23.4811C17.4625 23.4811 17.1663 23.185 17.1663 22.7408V20.5196C17.1663 18.2984 18.9433 16.5214 21.0904 16.5214C23.2375 16.5214 25.0145 18.3724 25.0145 20.5196V25.9244C25.0145 26.3687 24.7183 26.6648 24.2741 26.6648Z" fill="white"/>
        <path d="M1.24772 35.92C1.09964 35.92 0.951561 35.92 0.877521 35.846C0.655403 35.6979 0.507324 35.4758 0.507324 35.1796V22.5189C0.507324 22.2227 0.729442 21.9265 1.0256 21.8525C1.76599 21.5563 8.28146 19.2611 10.6507 19.4092C13.1681 19.6313 19.5354 22.6669 19.8316 22.815C20.0537 22.9631 21.6086 23.8516 21.8307 25.2583C21.8307 25.4064 21.9047 25.6285 21.8307 25.8506L30.3452 23.6294C30.4192 23.5554 34.1952 22.2967 35.528 24.592C36.0462 25.4064 36.1943 26.2208 35.9722 27.0353C35.602 28.2939 34.4914 28.9603 34.3433 29.0343C22.5711 36.5863 17.9066 36.1421 12.1315 34.5132C6.72663 33.0325 1.61792 35.6979 1.54388 35.6979C1.46984 35.92 1.3958 35.92 1.24772 35.92ZM8.7257 32.7363C9.98437 32.7363 11.243 32.8844 12.5757 33.2546C18.1287 34.8094 22.2749 35.2536 33.6029 27.9237C33.677 27.9237 34.3433 27.4795 34.5654 26.7391C34.6395 26.3689 34.5654 25.9247 34.2693 25.4064C33.677 24.3698 31.5298 24.8881 30.7894 25.1102L18.8691 28.1459H18.4989L11.5392 26.1468C11.169 25.9987 10.9469 25.6285 11.0209 25.2583C11.169 24.8881 11.5392 24.666 11.9094 24.74L18.647 26.6651L20.0537 26.2949C20.3499 25.8506 20.3499 25.5545 20.3499 25.4804C20.2758 24.8141 19.3874 24.2218 19.1653 24.0737C17.4623 23.2593 12.4277 21.0381 10.5767 20.816C8.87378 20.7419 4.20929 22.2967 1.98811 23.0371V33.995C3.32082 33.4767 5.76412 32.7363 8.7257 32.7363Z" fill="white"/>
      </SvgIcon>
  )
}
function Icon3(props:any){
  return (
      <SvgIcon  viewBox="0 0 39 39" {...props}>
          <path d="M37.74 38.2462H1.23602C0.997953 38.2462 0.759884 38.0875 0.601171 37.9288C0.442458 37.6907 0.363102 37.4526 0.521815 37.2146L6.94968 18.0897C7.02904 17.7722 7.34646 17.5342 7.66389 17.5342H14.806C15.2821 17.5342 15.5995 17.8516 15.5995 18.3277C15.5995 18.8039 15.2821 19.1213 14.806 19.1213H8.21938L2.34701 36.6591H36.7083L31.8676 19.1213H24.2494C23.7732 19.1213 23.4558 18.8039 23.4558 18.3277C23.4558 17.8516 23.7732 17.5342 24.2494 17.5342H32.4231C32.7405 17.5342 33.0579 17.7722 33.2166 18.0897L38.5335 37.2146C38.6129 37.4526 38.5335 37.6907 38.3748 37.9288C38.2161 38.1668 37.978 38.2462 37.74 38.2462Z" fill="white"/>
          <path d="M19.488 26.1048C19.25 26.1048 19.0119 26.0255 18.8532 25.7874C18.5358 25.3112 10.4414 14.6775 10.4414 9.67804C10.4414 4.44052 14.4886 0.155273 19.488 0.155273C24.4875 0.155273 28.5347 4.44052 28.5347 9.67804C28.5347 14.6775 20.4403 25.3112 20.1229 25.7874C19.9642 26.0255 19.7261 26.1048 19.488 26.1048ZM19.488 1.7424C15.3615 1.7424 12.0285 5.31344 12.0285 9.67804C12.0285 13.0904 16.9486 20.4705 19.488 23.9622C22.0274 20.4705 26.9475 13.011 26.9475 9.67804C26.9475 5.23408 23.6939 1.7424 19.488 1.7424Z" fill="white"/>
          <path d="M19.4881 14.6776C16.8693 14.6776 14.7267 12.4556 14.7267 9.67816C14.7267 6.90069 16.8693 4.67871 19.4881 4.67871C22.1068 4.67871 24.2495 6.90069 24.2495 9.67816C24.2495 12.4556 22.1068 14.6776 19.4881 14.6776ZM19.4881 6.26584C17.7422 6.26584 16.3138 7.77361 16.3138 9.67816C16.3138 11.5827 17.7422 13.0905 19.4881 13.0905C21.2339 13.0905 22.6623 11.5827 22.6623 9.67816C22.6623 7.77361 21.2339 6.26584 19.4881 6.26584Z" fill="white"/>
      </SvgIcon>
  )
}
function Icon4(props:any){
    return (
        <SvgIcon  viewBox="0 0 39 39" {...props}>
            <path d="M29.2256 30.6462H5.87481C5.39826 30.6462 5.08057 30.3285 5.08057 29.8519V14.7613C5.08057 12.9345 6.51021 11.5049 8.33697 11.5049H15.7234C16.2 11.5049 16.5177 11.8226 16.5177 12.2991C16.5177 12.7757 16.2 13.0934 15.7234 13.0934H8.33697C7.4633 13.0934 6.66906 13.8876 6.66906 14.7613V29.0577H28.4314V20.6387C28.4314 20.1621 28.749 19.8444 29.2256 19.8444C29.7021 19.8444 30.0198 20.1621 30.0198 20.6387V29.8519C30.0198 30.3285 29.7021 30.6462 29.2256 30.6462Z" fill="white"/>
            <path d="M33.7528 38.8269H1.34763C1.02993 38.8269 0.791657 38.668 0.632809 38.4297C0.47396 38.1915 0.47396 37.8738 0.632809 37.6355L5.16 29.4548C5.31885 29.2165 5.55712 29.0576 5.87482 29.0576H29.2256C29.5433 29.0576 29.7816 29.2165 29.9404 29.4548L34.3882 37.4766C34.4676 37.6355 34.547 37.7943 34.547 37.9532C34.547 38.5092 34.2293 38.8269 33.7528 38.8269ZM2.69784 37.2384H32.4026L28.7491 30.6461H6.35137L2.69784 37.2384ZM35.4207 21.3535H17.4708C16.9942 21.3535 16.6765 21.0358 16.6765 20.5592V13.8082H15.0086C14.6909 13.8082 14.3732 13.6493 14.2938 13.3316C14.2144 13.0139 14.2144 12.6962 14.4527 12.4579L25.8898 0.941398C26.2075 0.623701 26.684 0.623701 27.0017 0.941398L38.4388 12.4579C38.6771 12.6962 38.7565 13.0139 38.5977 13.3316C38.4388 13.6493 38.2006 13.8082 37.8829 13.8082H36.215V20.5592C36.215 21.0358 35.8973 21.3535 35.4207 21.3535ZM18.265 19.765H34.6265V13.0139C34.6265 12.5374 34.9442 12.2197 35.4207 12.2197H35.9767L26.4457 2.60931L16.9148 12.2197H17.4708C17.9473 12.2197 18.265 12.5374 18.265 13.0139V19.765Z" fill="white"/>
            <path d="M26.4459 18.6531C25.9693 18.6531 25.6516 18.3354 25.6516 17.8588V12.2991C25.6516 11.8226 25.9693 11.5049 26.4459 11.5049C26.9224 11.5049 27.2401 11.8226 27.2401 12.2991V17.8588C27.2401 18.3354 26.9224 18.6531 26.4459 18.6531Z" fill="white"/>
        </SvgIcon>
    )
}
function Icon5(props:any){
    return (
        <SvgIcon  viewBox="0 0 37 38" {...props}>
            <path d="M14.3889 33.3519H4.96699C4.50361 33.3519 4.1947 33.043 4.1947 32.5796V15.2032H0.796649C0.487735 15.2032 0.178821 14.9715 0.101593 14.6626C0.0243641 14.3537 0.101592 14.0448 0.333278 13.8131L15.779 0.915952C16.0879 0.684266 16.474 0.684266 16.7829 0.915952L32.3059 13.8131C32.5375 14.0448 32.6148 14.3537 32.5375 14.6626C32.4603 14.9715 32.1514 15.2032 31.8425 15.2032H28.4444V17.2884C28.4444 17.7518 28.1355 18.0607 27.6721 18.0607C27.2088 18.0607 26.8999 17.7518 26.8999 17.2884V14.4309C26.8999 13.9676 27.2088 13.6586 27.6721 13.6586H29.6801L16.2423 2.53775L2.95905 13.6586H4.96699C5.43036 13.6586 5.73927 13.9676 5.73927 14.4309V31.8073H14.3889C14.8522 31.8073 15.1611 32.1162 15.1611 32.5796C15.1611 33.043 14.8522 33.3519 14.3889 33.3519Z" fill="white"/>
            <path d="M4.19465 12.346C3.73128 12.346 3.42236 12.0371 3.42236 11.5737V2.46076C3.42236 1.99739 3.73128 1.68848 4.19465 1.68848H9.13727C9.60064 1.68848 9.90955 1.99739 9.90955 2.46076V7.48061C9.90955 7.94398 9.60064 8.25289 9.13727 8.25289C8.6739 8.25289 8.36498 7.94398 8.36498 7.48061V3.23305H4.96693V11.5737C4.96693 12.0371 4.65802 12.346 4.19465 12.346ZM26.8226 37.9086C25.8958 37.9086 24.9691 37.5997 24.1196 36.8274C21.8027 34.665 18.4047 34.1244 17.8641 34.0472C17.3235 34.0472 15.1611 34.1244 13.9254 33.1977L13.8482 33.1205C13.6165 32.8888 12.9987 32.2709 13.1531 31.3442C13.3076 29.3363 15.2383 28.7184 16.2423 28.7184H16.3967L19.4087 29.3363L12.9987 18.2154C12.2264 16.9797 12.6125 15.3579 13.8482 14.5856C14.466 14.1995 15.2383 14.1223 15.8561 14.2767C16.5512 14.4312 17.0918 14.8945 17.4779 15.5124L22.4978 24.162C22.7295 24.5481 22.575 25.0115 22.1889 25.2432C21.8027 25.4748 21.3394 25.3204 21.1077 24.9342L16.2423 16.2847C16.0878 16.053 15.8561 15.8213 15.6245 15.8213C15.3928 15.7441 15.0839 15.8213 14.7749 15.9757C14.3116 16.2847 14.0799 16.9797 14.466 17.5203L21.7255 30.1085C21.88 30.3402 21.88 30.7264 21.6483 30.9581C21.4938 31.1897 21.1849 31.3442 20.876 31.267L16.2423 30.263C15.9334 30.263 14.8522 30.4947 14.7749 31.5759C14.7749 31.7303 14.7749 31.8076 15.0066 32.0393C15.6245 32.5026 17.0918 32.5799 17.9413 32.5799H18.0958C18.2502 32.5799 22.4206 33.1205 25.278 35.8235C27.4404 37.8314 31.3791 34.3561 31.3791 34.3561C31.4563 34.3561 31.4563 34.2789 31.5335 34.2789C31.5335 34.2789 33.7731 33.0432 34.9316 32.2709C35.7039 31.7303 35.7811 29.4135 34.2365 26.7105L29.4483 18.5243C29.2939 18.2154 28.985 18.0609 28.7533 17.9837C28.5988 17.9837 28.3671 17.9065 28.2127 18.0609C27.981 18.2154 27.8266 18.4471 27.7493 18.756C27.6721 19.0649 27.7493 19.2966 27.9038 19.6055L29.0622 21.5362C29.2939 21.9223 29.1394 22.3857 28.8305 22.6174C28.4444 22.8491 27.981 22.6946 27.7493 22.3857L26.5909 20.455C26.2048 19.9144 26.1275 19.2193 26.282 18.5243C26.4364 17.8292 26.8226 17.2114 27.4404 16.9025C27.9038 16.5936 28.5988 16.4391 29.2167 16.5936C29.9117 16.748 30.5295 17.2114 30.9157 17.9065L35.5494 25.7838C37.4029 28.8729 37.4801 32.1937 35.7811 33.3521C34.6227 34.1244 32.6919 35.2056 32.3058 35.4373C31.8424 35.8235 29.2939 37.9086 26.8226 37.9086Z" fill="white"/>
            <path d="M21.7255 24.8573C21.4938 24.8573 21.1849 24.7029 21.0304 24.4712L19.4086 21.691C19.0225 20.9959 18.9453 20.2236 19.0997 19.5286C19.2542 18.9107 19.7176 18.3701 20.2582 18.0612C20.7988 17.6751 21.4938 17.5979 22.1889 17.7523C22.8839 17.9068 23.4245 18.4474 23.7334 19.0652L25.5097 22.0771C25.7414 22.4633 25.5869 22.9266 25.2008 23.1583C24.8146 23.39 24.3513 23.2355 24.1196 22.8494L22.3433 19.7603C22.1889 19.4513 21.9572 19.2969 21.7255 19.2197C21.4938 19.1424 21.2621 19.2197 21.0304 19.2969C20.7215 19.4513 20.6443 19.683 20.5671 19.8375C20.4898 20.1464 20.5671 20.5325 20.7215 20.8415L22.3433 23.6217C22.575 24.0078 22.4206 24.4712 22.0344 24.7029C21.9572 24.8573 21.88 24.8573 21.7255 24.8573Z" fill="white"/>
            <path d="M24.8147 23.3128C24.583 23.3128 24.2741 23.1584 24.1196 22.9267L22.8067 20.6871C22.4206 19.992 22.3433 19.2197 22.4978 18.5247C22.6523 17.9068 23.1156 17.3662 23.6562 17.0573C24.1968 16.6712 24.8919 16.594 25.5869 16.7484C26.282 16.9029 26.8226 17.4435 27.1315 18.0613L28.5216 20.3781C28.7533 20.7643 28.5988 21.2277 28.2127 21.4593C27.8266 21.691 27.3632 21.5366 27.1315 21.1504L25.7414 18.7564C25.5869 18.4474 25.3553 18.293 25.1236 18.2158C24.8919 18.1385 24.6602 18.2158 24.4285 18.293C24.1196 18.4474 24.0424 18.6791 23.9651 18.8336C23.8879 19.1425 23.9651 19.5286 24.1196 19.8375L25.4325 22.0772C25.6642 22.4633 25.5097 22.9267 25.1236 23.1584C25.0463 23.3128 24.9691 23.3128 24.8147 23.3128Z" fill="white"/>
        </SvgIcon>
    )
}
function Icon6(props:any){
    return (
        <SvgIcon viewBox="0 0 37 37" {...props}>
            <path d="M31.6875 36.7329H5.31221C4.86263 36.7329 4.56291 36.4331 4.56291 35.9836V19.1244H1.266C0.966286 19.1244 0.666567 18.9745 0.591638 18.6748C0.441778 18.3751 0.516708 18.0754 0.741497 17.8506L17.9753 0.991391C18.275 0.691672 18.7246 0.691672 19.0243 0.991391L36.2582 17.8506C36.483 18.0754 36.5579 18.3751 36.408 18.6748C36.2582 18.9745 36.0334 19.1244 35.7337 19.1244H32.4368V35.9836C32.4368 36.4331 32.137 36.7329 31.6875 36.7329ZM6.06151 35.2343H30.9382V18.3751C30.9382 17.9255 31.2379 17.6258 31.6875 17.6258H33.8604L18.4998 2.56491L3.13925 17.6258H5.31221C5.76179 17.6258 6.06151 17.9255 6.06151 18.3751V35.2343Z" fill="white"/>
            <path d="M18.4999 28.7905C15.5776 28.7905 14.154 27.142 13.7793 25.5685C13.7044 25.1938 13.9292 24.7443 14.3788 24.6693C14.7534 24.5944 15.203 24.8192 15.2779 25.2688C15.3529 25.7183 15.9523 27.2919 18.4999 27.2919C19.9236 27.2919 21.647 26.9921 21.647 25.4186C21.647 24.3696 21.647 23.5454 18.1253 21.6721C14.6036 19.7989 14.4537 18.3003 14.6036 17.7009C14.6036 15.5279 15.8024 14.0293 17.7506 13.6547C19.6239 13.28 21.7968 14.0293 22.3213 15.2282C22.4712 15.6028 22.3213 16.0524 21.9467 16.2023C21.572 16.3521 21.1224 16.2023 20.9726 15.8276C20.8227 15.453 19.3991 14.8535 18.0503 15.0783C16.7765 15.378 16.1022 16.2772 16.1022 17.7758V17.9257C16.1022 18.0006 16.3269 18.9747 18.8746 20.3234C22.5461 22.3465 23.1455 23.4705 23.1455 25.4186C23.1455 26.2429 22.8458 28.7905 18.4999 28.7905Z" fill="white"/>
            <path d="M18.4998 14.6284C18.0502 14.6284 17.7505 14.3286 17.7505 13.8791V11.781C17.7505 11.3315 18.0502 11.0317 18.4998 11.0317C18.9494 11.0317 19.2491 11.3315 19.2491 11.781V13.8791C19.2491 14.3286 18.9494 14.6284 18.4998 14.6284ZM18.4998 31.4875C18.0502 31.4875 17.7505 31.1878 17.7505 30.7382V28.5653C17.7505 28.1157 18.0502 27.816 18.4998 27.816C18.9494 27.816 19.2491 28.1157 19.2491 28.5653V30.7382C19.2491 31.1878 18.9494 31.4875 18.4998 31.4875Z" fill="white"/>
        </SvgIcon>
    )
}
const Section3: React.FC<ISection3> = () => {
  return <Box css={styles.container}>
    <Box css={styles.title}>您能做什么投资项目</Box>
    <Box css={styles.gridContainer}>
      <Box css={styles.gridItem}>
      <Box css={styles.iconWrapper}>
          <Icon1 />
      </Box>
          <Box css={styles.itemTitle}>旧房翻新重售</Box>
          <Box css={styles.itemText}>{
              `RemoteREI集成了许多解决您痛点的功能:\n1.全网独家远程项目施工管理软件，帮助您实时监控施工进度与管理预算。\n2.AI合同语言模型，提供合同模版，合同风险规避服务。\n3.项目支付审计系统，定量按阶段支付项目开支款项，实时审计财税收支。\n4.项目过程中的其他痛点，都会开发与提供对应的功能服务。`
          }</Box>
      </Box>
      <Box css={styles.gridItem}>
          <Box css={styles.iconWrapper}>
              <Icon2 />
          </Box>
          <Box css={styles.itemTitle}>转售房产</Box>
          <Box css={styles.itemText}>{`RemoteREI拥有市场上最全最细的智能房产金融计算器，并且我们与多家市场头部的地产转售机构合作。如果您的项目满足一定条件的COC回报，我们将提供最低的开销保证您的项目能快速的顺利转售给二级市场投资者。`}</Box>
      </Box>
      <Box css={styles.gridItem}>
          <Box css={styles.iconWrapper}>
              <Icon3 />
          </Box>
          <Box css={styles.itemTitle}>改建项目 & 开发地块</Box>
          <Box css={styles.itemText}>{`RemoteREI的翻新重售相关的功能完全适用于这个场景。除此之外，RemoteREI的地产AI模型将集成所有投资市场的地产开发规范，政府文档等数据，可自动为您生成改建，新建项目规划以及投资回报计算结果。您可以快速对比不同的可行投资方案从而根据您的实际情况做最好的决定。`}</Box>
      </Box>
      <Box css={styles.gridItem}>
          <Box css={styles.iconWrapper}>
              <Icon4 />
          </Box>
          <Box css={styles.itemTitle}>自持有房产</Box>
          <Box css={styles.itemText}>{`RemoteREI远程项目管理办公空间集成了高效的房屋长租，中租，短租功能，并且我们在每个市场都有顶级的项目管理团队，确保您的项目得到最高效的管理,。
您只需要使用我们的远程办公空间操作面板，一切尽在掌握。`}</Box>
      </Box>
      <Box css={styles.gridItem}>
          <Box css={styles.iconWrapper}>
              <Icon5 />
          </Box>
          <Box css={styles.itemTitle}>投资托管</Box>
          <Box css={styles.itemText}>{`RemoteREI平台由多位经验丰富的地产投资人创立，除了提供远程地产投资服务，RemoteREI自己拥有地产投资基金，基金每个月定投市场中优质项目。如果您没有时间与精力自己投资，RemoteREI基金提供地产投资Syndicate的服务，您只需要把资金投入到平台的每个项目众筹，平台提供管理，项目完成后自动结算投资回报到您的账户。`}</Box>
      </Box>
      <Box css={styles.gridItem}>
          <Box css={styles.iconWrapper}>
              <Icon6 />
          </Box>
          <Box css={styles.itemTitle}>重做贷款</Box>
          <Box css={styles.itemText}>{`RemoteREI的合作伙伴包括多家顶级的金融融资机构，使用我们的融资计算器，我们将为您的项目或得最大的估值，并且我们的合作伙伴会以最快的速度和最优质的价格为不同国籍不同身份的投资者提供重贷款服务。
当您完成了重贷款，只需要使用我们的远程项目管理办公空间就可以把项目自动托管到我们的平台。`}</Box>
      </Box>
    </Box>
  </Box>;
};
export default Section3;
