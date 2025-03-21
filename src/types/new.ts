export type TextComponent = { 
    title: string,
    date: string,
    desc: string,
    link: TextComponentList[];
}
type TextComponentList = {
    link: string,
    text: string,
}