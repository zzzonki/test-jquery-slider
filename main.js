$( function() {
       
  } )

//   var changing = $("input[name ='color-radio']:checked").val()

$(function(){
    $( "input" ).checkboxradio({
        icon: false
    })

      

    function refreshSwatch() {
    var red = $(".sred").slider("value"),
        green = $(".sgreen").slider("value"),
        blue = $(".sblue").slider("value")
    $( ".swatch" ).css( "background-color", "rgba("+red+", "+green+", "+blue+", 0.3)")
    }

    function refreshText() {
        var red = $(".sred").slider("value"),
            green = $(".sgreen").slider("value"),
            blue = $(".sblue").slider("value")
        $( ".swatch" ).css( "color", "rgb("+red+", "+green+", "+blue+")")
    }

    function drawSlider(){
        if($("input[name ='color-radio']:checked").val() == 1){
            $(".selector").slider({
                animate: "slow",
                range: "min",    
                // value: 200,
                max: 255,
                slide: refreshSwatch,
                change: refreshSwatch
            })
        }if($("input[name ='color-radio']:checked").val() == 0){
            $(".selector").slider({
                animate: "slow",
                range: "min",    
                // value: 200,
                max: 255,
                slide: refreshText,
                change: refreshText
            })
        }
    }

    $(document).ready(drawSlider)

    $('input[name="color-radio"]').change(drawSlider)

})