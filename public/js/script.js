$(document).ready(function(){
    //jquery function to toggle design explanation paragraph with image
    $(".designimg").click(function(){
        $(".designimg").toggle();
        $(".designexplain").toggle();
    })
    $(".designexplain").click(function(){
        $(".designexplain").toggle();
        $(".designimg").toggle();
    })

    //jquery function to toggle development explanation paragraph with image
    $(".devimg").click(function(){
        $(".devimg").toggle();
        $(".devexplain").toggle();
    })
    $(".devexplain").click(function(){
        $(".devexplain").toggle();
        $(".devimg").toggle();
    })

    //jquery function to toggle product management explanation paragraph with image
    $(".pmimg").click(function(){
        $(".pmimg").toggle();
        $(".pmexplain").toggle();
    })
    $(".pmexplain").click(function(){
        $(".pmexplain").toggle();
        $(".pmimg").toggle();
    })

    $("#portfolioimg1").hover(
        function(){
        $("#hover1").show();
        },
        function(){
            $("#hover1").hide();
        }
    )

    $("#portfolioimg2").hover(
        function(){
        $("#hover2").show();
        },
        function(){
            $("#hover2").hide();
        }
    )

    $("#portfolioimg3").hover(
        function(){
        $("#hover3").show();
        },
        function(){
            $("#hover3").hide();
        }
    )

    $("#portfolioimg4").hover(
        function(){
        $("#hover4").show();
        },
        function(){
            $("#hover4").hide();
        }
    )

    $("#portfolioimg5").hover(
        function(){
        $("#hover5").show();
        },
        function(){
            $("#hover5").hide();
        }
    )

    $("#portfolioimg6").hover(
        function(){
        $("#hover6").show();
        },
        function(){
            $("#hover6").hide();
        }
    )

    $("#portfolioimg7").hover(
        function(){
        $("#hover7").show();
        },
        function(){
            $("#hover7").hide();
        }
    )

    $("#portfolioimg8").hover(
        function(){
        $("#hover8").show();
        },
        function(){
            $("#hover8").hide();
        }
    )

    
})