import React from 'react'

const svgSample = () => {
    return (
        <div>
        <svg
        style={{ width:"100%",height:"100%", opacity: "0.9"}}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        id="b"
        data-name="Layer 2"
        viewBox="0 0 194.2 194.2"
        dangerouslySetInnerHTML={{
          __html: `
          <style>
          .loader-3{
            width : 48px;
            height: 48px;
            border-radius: 50%;
            display: inline-block;
            position: relative;
            display: block;
            padding: 5px;
            &:after {
              content: '';
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50% , -50%);
              width:  calc(100% - 3px);
              height:  calc(100% - 3px);
              border-radius: 50%;
              border: 1px solid transparent;
              border-bottom-color: var(--theme-color);
              border-top-color: var(--theme-color);
              animation: rotation 1s linear infinite;
            }
          } 
          /* keyFrames */   
          @keyframes rotation {
            0% { transform: translate(-50% , -50%) rotate(0deg) }
            100% { transform: translate(-50% , -50%) rotate(360deg) }
          }</style>
          <span class="loader-3"></span>
          <defs><linearGradient id="d" x1="97.2" y1="185.5" x2="97.2" y2="9.4" gradientTransform="translate(0 196.2) scale(1 -1)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d5ffff"/><stop offset=".2" stop-color="#deffff"/><stop offset=".4" stop-color="#f7ffff"/><stop offset=".5" stop-color="#fff"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="e" x1="97.1" y1="194.6" x2="97.1" y2=".4" gradientTransform="translate(0 196.2) scale(1 -1)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#07c1a9"/><stop offset=".1" stop-color="#08b7a5"/><stop offset=".3" stop-color="#0b9e9b"/><stop offset=".5" stop-color="#0f748a"/><stop offset=".8" stop-color="#163b73"/><stop offset="1" stop-color="#1b1464"/></linearGradient><clipPath id="f"><circle cx="97.1" cy="97.3" r="88" fill="none" stroke-width="0"/></clipPath><linearGradient id="g" x1="-373" y1="6.1" x2="-373" y2="126.8" gradientTransform="translate(0 196.2) scale(1 -1)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#194491"/><stop offset="1" stop-color="#57bbc1" stop-opacity=".2"/></linearGradient><linearGradient id="h" x1="5.1" y1="6" x2="5.1" y2="126.7" xlink:href="#g"/><linearGradient id="i" x1="-92" y1="-.1" x2="-92" y2="120.5" xlink:href="#g"/></defs><g id="c">
<path d="M97.2,185.3c-48.6,0-88-39.4-88-88S48.6,9.3,97.2,9.3s88,39.4,88,88-39.4,88-88,88Z" fill="url(#d)" stroke-width="0"/>
<path d="M97.1,0C43.5,0,0,43.5,0,97.1s43.5,97.1,97.1,97.1,97.1-43.5,97.1-97.1S150.7,0,97.1,0ZM97.1,185.2c-48.6,0-88-39.4-88-88S48.5,9.1,97.1,9.1s88,39.4,88,88-39.4,88-88,88Z" fill="url(#e)" stroke-width="0"/>
<g clip-path="url(#f)">
<path d="M174,143.8c-106.3,0-140.2-65.4-277.3-65.3-136.8,0-171,65.3-269.8,65.3v43.3-43.3c-106.3,0-140.2-65.4-277.3-65.3-136.8,0-171,65.3-269.8,65.3v43.4H174v-43.4h0Z" fill="url(#g)" fill-rule="evenodd" stroke-width="0">
<animateTransform id="wave1" attributeName="transform" attributeType="XML" type="translate" dur="3.0s" values="540,0;0,0" repeatCount="indefinite"/>
</path>
<path d="M552.2,143.9c-106.3,0-140.2-65.4-277.3-65.3-136.8,0-171,65.3-269.8,65.3v43.3-43.3c-106.3,0-140.2-65.4-277.3-65.3-136.8,0-171,65.3-269.8,65.3v43.4H552.2v-43.4h0Z" fill="url(#h)" fill-rule="evenodd" stroke-width="0">
<animateTransform id="wave1" attributeName="transform" attributeType="XML" type="translate" dur="3.6s" values="540,0;0,0" repeatCount="indefinite"/>
</path>
<path d="M455.1,150c-106.3,0-140.2-65.4-277.3-65.3-136.8,0-171,65.3-269.8,65.3v43.3-43.3c-106.3,0-140.2-65.4-277.3-65.3-136.8,0-171,65.3-269.8,65.3v43.4H455.1v-43.4h0Z" fill="url(#i)" fill-rule="evenodd" stroke-width="0">
<animateTransform id="wave1" attributeName="transform" attributeType="XML" type="translate" dur="3.3s" values="540,0;0,0" repeatCount="indefinite"/>
</path>
</g> 
          `,
        }}
        >
  
        </svg> 
        </div>
    )
}

export default svgSample
