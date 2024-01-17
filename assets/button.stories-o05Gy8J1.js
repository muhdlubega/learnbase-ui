import{c as L,a as t,b as Q,t as U,j as i}from"./index-W-C94MBx.js";import{F as u}from"./index.esm-R2O5XNOC.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";const X=L("flex items-center transition-all border",{variants:{variant:{outlined:" ",contained:""},color:t,size:{xs:"px-3 py-1 text-xs gap-1",sm:"px-3 py-1 text-sm gap-1",md:"px-4 py-1 text-md gap-1",lg:"px-5 py-2 text-lg gap-2",xl:"px-6 py-3 text-xl gap-2"},rounded:{none:"rounded-none",sm:"rounded",md:"rounded-md",lg:"rounded-lg",full:"rounded-full"},iconPosition:{start:"flex-row",end:"flex-row-reverse"},fullWidth:{true:"w-full"}},compoundVariants:[...Object.keys(t).map(r=>({variant:"contained",color:r,class:`text-white bg-${r} hover:text-${r} border-${r} hover:bg-transparent`})),...Object.keys(t).map(r=>({variant:"outlined",color:r,class:`hover:bg-${r} border-${r}`})),{variant:"outlined",color:Object.keys(t),class:"bg-transparent hover:text-white"}],defaultVariants:{variant:"outlined",color:"primary",size:"md",rounded:"md",iconPosition:"end",fullWidth:!1}}),P=({children:r,className:R,label:_,variant:M,color:T,size:q,rounded:G,iconPosition:H,fullWidth:J,icon:p,...K})=>Q("button",{type:"button",className:U(X({variant:M,color:T,size:q,rounded:G,iconPosition:H,fullWidth:J}),p?"justify-between":"justify-center",R),...K,children:[p,_]});P.displayName="Button";const m={icon:i(u,{}),none:null},te={component:P,title:"Components/Button",tags:["autodocs"],argTypes:{className:{table:{disable:!0}},icon:{description:"`ReactNode`",options:Object.keys(m),mapping:m,control:{type:"radio"},table:{defaultValue:{summary:"none"}}},label:{description:"`string`"},variant:{description:"`outlined` | `contained`",options:["outlined","contained"],control:{type:"radio"},table:{defaultValue:{summary:"outlined"}}},color:{description:"`ColorVariant`",options:Object.keys(t),control:{type:"select"},table:{defaultValue:{summary:"primary"}}},size:{description:"`xs` | `sm` | `md` | `lg` | `xl`",options:["xs","sm","md","lg","xl"],control:{type:"radio"},table:{defaultValue:{summary:"md"}}},rounded:{description:"`none` | `sm` | `md` | `lg` | `full`",options:["none","sm","md","lg","full"],control:{type:"radio"},table:{defaultValue:{summary:"sm"}}},iconPosition:{description:"`start` | `end`",options:["start","end"],control:{type:"radio"},table:{defaultValue:{summary:"start"}}},fullWidth:{description:"`boolean`",control:{type:"boolean",expanded:!0},table:{defaultValue:{summary:"false"}}}}},e={args:{label:"Button"}},a={args:{...e.args,variant:"contained"}},o={args:{...e.args,color:"error"}},s={args:{...e.args,color:"success"}},n={args:{...e.args,icon:i(u,{})}},l={args:{...e.args,fullWidth:!0}},c={args:{...e.args,rounded:"full"}},d={args:{icon:i(u,{}),rounded:"full",className:"p-3"}};var g,f,y;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(y=(f=e.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,x,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'contained'
  }
}`,...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var v,S,j;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    color: 'error'
  }
}`,...(j=(S=o.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var W,D,w;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    color: 'success'
  }
}`,...(w=(D=s.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var B,C,F;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    icon: <FiAlertCircle />
  }
}`,...(F=(C=n.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var N,O,k;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fullWidth: true
  }
}`,...(k=(O=l.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var V,$,I;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    rounded: 'full'
  }
}`,...(I=($=c.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};var z,A,E;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    icon: <FiAlertCircle />,
    rounded: 'full',
    className: 'p-3'
  }
}`,...(E=(A=d.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};const ae=["Default","Contained","Error","Success","WithIcon","FullWidth","Rounded","IconButton"];export{a as Contained,e as Default,o as Error,l as FullWidth,d as IconButton,c as Rounded,s as Success,n as WithIcon,ae as __namedExportsOrder,te as default};
