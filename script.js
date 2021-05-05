m =0;
var y;
function start ()
{
    y = setInterval(run , 100);
    function run()
    {
        if (m == 1400)
        {
            clearInterval(car);
            m=0;
        }
        else
        {
            m+=5;
            var car = document.getElementById("car");
            car.style.marginLeft = m+'px';    
        }
    }
}
function stop ()
{
    clearInterval(y);
}