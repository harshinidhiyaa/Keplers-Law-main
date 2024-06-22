setEq();
function setEq(){
// Row and Column div
    let divRow = document.createElement('div');
    let divCol1 = document.createElement('div');
    let divCol2 = document.createElement('div');
    divRow.setAttribute('class', 'row');
    divRow.setAttribute('id', 'row');
    divCol1.setAttribute('class', 'col-md-11');
    divCol1.setAttribute('id', 'col1');
    divCol2.setAttribute('class', 'col-md-1');
    divCol2.setAttribute('id', 'col2');
// Heading and lists
    let step1 = document.createElement('p');
    let step2 = document.createElement('p');
    let step3 = document.createElement('p');
    let step4 = document.createElement('p');
    step1.setAttribute('id', 'step1');
    step2.setAttribute('id', 'step2');
    step3.setAttribute('id', 'step3');
    step4.setAttribute('id', 'step4');
// Derivation steps
    let text1 = "Use the slider to derive the equation";
    let text2 = "Consider calculating the area of the triangle,<div class=\"der\" id=\"step\">$$ =dA = \\frac{1}{2}(r)(rd\\theta) $$</div>";
    let text3 = "Using angular momentum formula,<div class=\"der\" id=\"stepInt\">$$ \\frac{dA}{dt}=\\frac{1}{2}\\frac{L}{m}$$</div>";
    let text4 ="Angular momentum and mass is constant. So, $$\\frac{dA}{dt}=\\frac{1}{2}\\frac{L}{m}=constant$$ $$\\int dA = \\int \\frac{1}{2}(\\frac{L}{m})dt$$ $$A=\\frac{1}{2}\\frac{L}{m}T$$ $$A∝T$$ The region that is swept at regular intervals of time remains constant. Therefore, according to Kepler's law of equal areas, a planet's elliptical orbit around the sun causes its areal velocity to stay constant, which implies that its angular momentum likewise stays constant.";
// The Slider
// Setting the inner html
    step1.innerHTML = text1;
    step2.innerHTML = text2;
    step3.innerHTML = text3;
    step4.innerHTML = text4;
    step1.style.fontSize = '12px'; // Adjust the font size as needed

    // Change the font size for step2
    step2.style.fontSize = '12px'; // Adjust the font size as needed

    // Change the font size for step3
    step3.style.fontSize = '12px'; // Adjust the font size as needed

    // Change the font size for step4
    step4.style.fontSize = '12px';
    step2.style.visibility = "hidden";
    step3.style.visibility = "hidden";
    step4.style.visibility = "hidden";
// Properly adding to desired parent
    $('#exp').append(divRow);
    $('#row').append(divCol1);
    $('#row').append(divCol2);
    $('#col1').append(step1);
    $('#col1').append(step2);
    $('#col1').append(step3);
    $('#col1').append(step4);
//Navigation Button
    sliderReady();
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
}
function sliderReady()
{
    d3.select("#mySlider").on("input", function()
    {
        let value = d3.select(this).property("value");
        let max = d3.select(this).property("max");
        let min = d3.select(this).property("min");
        let length = value/(max - min);
        if(length < 1/4)
        {
            document.getElementById("moreSteps2").style.visibility = "hidden";
            document.getElementById("moreSteps").style.visibility = "hidden";
            step2.style.visibility = "hidden";
            step3.style.visibility = "hidden";
            step4.style.visibility = "hidden";
        }
        else if(length > 1/4 && length < 2/4)
        {
            document.getElementById("moreSteps2").style.visibility = "hidden";
            step2.style.visibility = "visible";
            step3.style.visibility = "hidden";
            step4.style.visibility = "hidden";
        }
        else if(length > 2/4 && length < 3/4)
        {
            document.getElementById("moreSteps2").style.visibility = "hidden";
            step2.style.visibility = "visible";
            step3.style.visibility = "visible";
            step4.style.visibility = "hidden";
        }
        else if(length > 3/5)
        {
            step2.style.visibility = "visible";
            step3.style.visibility = "visible";
            step4.style.visibility = "visible";
            d3.select(".arrowBody").style("visibility" , "visible")
            .on("click", ()=>{
                window.location = "overview.html";
            });
        }
    });
}

d3.select("#step").on("click", ()=>{
    document.getElementById("moreSteps").style.visibility = "visible";
});
d3.select("#stepInt").on("click", ()=>{
    document.getElementById("moreSteps2").style.visibility = "visible";
});
