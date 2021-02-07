//visibility
$( '[data-invisible]' ).click(function() {
    $(".ship" ).hide();
});

$( '[data-visible]' ).click(function() {
    $( ".ship" ).show();
});

//sizing

$( '[data-default-size]' ).click(function() {
    $(".ship").animate({ "width": "188px", "height": "100px" }, "fast");
});

$( '[data-plus-size]' ).click(function() {
    $(".ship" ).animate({ "width": "+=10%", "height": "+=10%" }, "fast");
});

$( '[data-minus-size]' ).click(function() {
    $(".ship" ).animate({ "width": "-=10%", "height": "-=10%" }, "fast");
});

//controles

class position {
    constructor (xAxis,yAxis){
    this.xAxis=xAxis
    this.yAxis=yAxis
    }
    
    upMovement() {
        let moveup
        const currentHeight=parseInt(this.xAxis)
        if (currentHeight >= 10) {
        moveup=currentHeight - 10
        this.xAxis = moveup
        xAxis=this.xAxis
        $('.ship').last().offset({top : xAxis})
        }
    };
    
    leftMovement() {
        let moveLeft
        const currentYPosition=parseInt(yAxis)
        if (currentYPosition >= 10) {
        moveLeft=currentYPosition - 10
        this.yAxis = moveLeft
        yAxis=this.yAxis
        console.log(yAxis)
        $('.ship').last().offset({left : yAxis})
        }
    };
    
    
    downMovement () {
        let moveDown
        const currentHeight=parseInt(xAxis)
        if (currentHeight <= 490) {
        moveDown=currentHeight + 10
        this.xAxis = moveDown
        xAxis=this.xAxis
        console.log(xAxis)
        $('.ship').last().offset({top : xAxis})
        }
    };
    
    rightMovement () {
        let moveRight
        const currentYPosition=parseInt(yAxis)
        if (currentYPosition <= 800) {
        moveRight = currentYPosition + 10
        this.yAxis = moveRight
        yAxis=this.yAxis
        console.log(yAxis)
        $('.ship').last().offset({left : yAxis})
        }
    };
   
}

var xAxis= $(".ship").css( "top" );
var yAxis= $(".ship").css( "left" );

const currentPosition = new position (xAxis,yAxis)

$( '[data-up]' ).click(function() {
    currentPosition.upMovement();
});

$( '[data-left]' ).click(function() {
    currentPosition.leftMovement();
});

$( '[data-down]' ).click(function() {
    currentPosition.downMovement();
});

$( '[data-right]' ).click(function() {
    currentPosition.rightMovement();
});
