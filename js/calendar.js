let highlight = {
start: new Date(2015,6,13),
end: new Date(2021,6,19),
}
let highlightSecond = {
    dstes: [
        {
            start: new Date(2015,6,6),
            end: new Date(2021,6,7),
        },
        {
            start: new Date(2015,6,22),
            end: new Date(2021,6,23),
        }
    ],
    backgroundColor: "#18a0fb",
    color:"#2c2c2c",
};

let datepicker = new Datepickk ({
    container:document.querySelector("#calendar"),
    inline:true,
    range:true,
    highlight:[highlight,highlightSecond]
})
datepicker.setDate = new Date(2020,6,1);