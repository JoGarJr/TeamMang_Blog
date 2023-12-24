var reacted = false;
var like = false;
var heart = false;
var sad = false;
var angry = false;

function react(react) {
    switch (react.value) {
        case 'like':
            if (reacted == false && like == false || reacted == true && like == false) {
                document.getElementById('react').style.display = 'none';
                document.getElementById('reacted').style.display = 'block';
                document.getElementById('reactH').style.display = 'block';
                document.getElementById('reactedH').style.display = 'none';
                document.getElementById('reactS').style.display = 'block';
                document.getElementById('reactedS').style.display = 'none';
                document.getElementById('reactA').style.display = 'block';
                document.getElementById('reactedA').style.display = 'none';
                like = true;
                heart = false;
                sad = false;
                angry = false;
                reacted = true;
            }
            else {
                document.getElementById('react').style.display = 'block';
                document.getElementById('reacted').style.display = 'none';
                document.getElementById('reactH').style.display = 'block';
                document.getElementById('reactedH').style.display = 'none';
                document.getElementById('reactS').style.display = 'block';
                document.getElementById('reactedS').style.display = 'none';
                document.getElementById('reactA').style.display = 'block';
                document.getElementById('reactedA').style.display = 'none';
                like = false;
                heart = false;
                sad = false;
                angry = false;
                reacted = false;
            }
            break;
        case 'heart':
            if (reacted == false && heart == false || reacted == true && heart == false) {
                document.getElementById('react').style.display = 'block';
                document.getElementById('reacted').style.display = 'none';
                document.getElementById('reactH').style.display = 'none';
                document.getElementById('reactedH').style.display = 'block';
                document.getElementById('reactS').style.display = 'block';
                document.getElementById('reactedS').style.display = 'none';
                document.getElementById('reactA').style.display = 'block';
                document.getElementById('reactedA').style.display = 'none';
                like = false;
                heart = true;
                sad = false;
                angry = false;
                reacted = true;
            }
            else {
                document.getElementById('react').style.display = 'block';
                document.getElementById('reacted').style.display = 'none';
                document.getElementById('reactH').style.display = 'block';
                document.getElementById('reactedH').style.display = 'none';
                document.getElementById('reactS').style.display = 'block';
                document.getElementById('reactedS').style.display = 'none';
                document.getElementById('reactA').style.display = 'block';
                document.getElementById('reactedA').style.display = 'none';
                like = false;
                heart = false;
                sad = false;
                angry = false;
                reacted = false;
            }
            break;
        case 'sad':
            if (reacted == false && sad == false || reacted == true && sad == false) {
                document.getElementById('react').style.display = 'block';
                document.getElementById('reacted').style.display = 'none';
                document.getElementById('reactH').style.display = 'block';
                document.getElementById('reactedH').style.display = 'none';
                document.getElementById('reactS').style.display = 'none';
                document.getElementById('reactedS').style.display = 'block';
                document.getElementById('reactA').style.display = 'block';
                document.getElementById('reactedA').style.display = 'none';
                like = false;
                heart = false;
                sad = true;
                angry = false;
                reacted = true;
            }
            else {
                document.getElementById('react').style.display = 'block';
                document.getElementById('reacted').style.display = 'none';
                document.getElementById('reactH').style.display = 'block';
                document.getElementById('reactedH').style.display = 'none';
                document.getElementById('reactS').style.display = 'block';
                document.getElementById('reactedS').style.display = 'none';
                document.getElementById('reactA').style.display = 'block';
                document.getElementById('reactedA').style.display = 'none';
                like = false;
                heart = false;
                sad = false;
                angry = false;
                reacted = false;
            }
            break;
        case 'angry':
            if (reacted == false && angry == false || reacted == true && angry == false) {
                document.getElementById('react').style.display = 'block';
                document.getElementById('reacted').style.display = 'none';
                document.getElementById('reactH').style.display = 'block';
                document.getElementById('reactedH').style.display = 'none';
                document.getElementById('reactS').style.display = 'block';
                document.getElementById('reactedS').style.display = 'none';
                document.getElementById('reactA').style.display = 'none';
                document.getElementById('reactedA').style.display = 'block';
                like = false;
                heart = false;
                sad = false;
                angry = true;
                reacted = true;
            }
            else {
                document.getElementById('react').style.display = 'block';
                document.getElementById('reacted').style.display = 'none';
                document.getElementById('reactH').style.display = 'block';
                document.getElementById('reactedH').style.display = 'none';
                document.getElementById('reactS').style.display = 'block';
                document.getElementById('reactedS').style.display = 'none';
                document.getElementById('reactA').style.display = 'block';
                document.getElementById('reactedA').style.display = 'none';
                like = false;
                heart = false;
                sad = false;
                angry = false;
                reacted = false;
            }
            break;
    }
}

function react2(react) {
    switch (react.value) {
        case 'like':
            if (reacted == false && like == false || reacted == true && like == false) {
                document.getElementById('react2').style.display = 'none';
                document.getElementById('reacted2').style.display = 'block';
                document.getElementById('reactH2').style.display = 'block';
                document.getElementById('reactedH2').style.display = 'none';
                document.getElementById('reactS2').style.display = 'block';
                document.getElementById('reactedS2').style.display = 'none';
                document.getElementById('reactA2').style.display = 'block';
                document.getElementById('reactedA2').style.display = 'none';
                like = true;
                heart = false;
                sad = false;
                angry = false;
                reacted = true;
            }
            else {
                document.getElementById('react2').style.display = 'block';
                document.getElementById('reacted2').style.display = 'none';
                document.getElementById('reactH2').style.display = 'block';
                document.getElementById('reactedH2').style.display = 'none';
                document.getElementById('reactS2').style.display = 'block';
                document.getElementById('reactedS2').style.display = 'none';
                document.getElementById('reactA2').style.display = 'block';
                document.getElementById('reactedA2').style.display = 'none';
                like = false;
                heart = false;
                sad = false;
                angry = false;
                reacted = false;
            }
            break;
        case 'heart':
            if (reacted == false && heart == false || reacted == true && heart == false) {
                document.getElementById('react2').style.display = 'block';
                document.getElementById('reacted2').style.display = 'none';
                document.getElementById('reactH2').style.display = 'none';
                document.getElementById('reactedH2').style.display = 'block';
                document.getElementById('reactS2').style.display = 'block';
                document.getElementById('reactedS2').style.display = 'none';
                document.getElementById('reactA2').style.display = 'block';
                document.getElementById('reactedA2').style.display = 'none';
                like = false;
                heart = true;
                sad = false;
                angry = false;
                reacted = true;
            }
            else {
                document.getElementById('react2').style.display = 'block';
                document.getElementById('reacted2').style.display = 'none';
                document.getElementById('reactH2').style.display = 'block';
                document.getElementById('reactedH2').style.display = 'none';
                document.getElementById('reactS2').style.display = 'block';
                document.getElementById('reactedS2').style.display = 'none';
                document.getElementById('reactA2').style.display = 'block';
                document.getElementById('reactedA2').style.display = 'none';
                like = false;
                heart = false;
                sad = false;
                angry = false;
                reacted = false;
            }
            break;
        case 'sad':
            if (reacted == false && sad == false || reacted == true && sad == false) {
                document.getElementById('react2').style.display = 'block';
                document.getElementById('reacted2').style.display = 'none';
                document.getElementById('reactH2').style.display = 'block';
                document.getElementById('reactedH2').style.display = 'none';
                document.getElementById('reactS2').style.display = 'none';
                document.getElementById('reactedS2').style.display = 'block';
                document.getElementById('reactA2').style.display = 'block';
                document.getElementById('reactedA2').style.display = 'none';
                like = false;
                heart = false;
                sad = true;
                angry = false;
                reacted = true;
            }
            else {
                document.getElementById('react2').style.display = 'block';
                document.getElementById('reacted2').style.display = 'none';
                document.getElementById('reactH2').style.display = 'block';
                document.getElementById('reactedH2').style.display = 'none';
                document.getElementById('reactS2').style.display = 'block';
                document.getElementById('reactedS2').style.display = 'none';
                document.getElementById('reactA2').style.display = 'block';
                document.getElementById('reactedA2').style.display = 'none';
                like = false;
                heart = false;
                sad = false;
                angry = false;
                reacted = false;
            }
            break;
        case 'angry':
            if (reacted == false && angry == false || reacted == true && angry == false) {
                document.getElementById('react2').style.display = 'block';
                document.getElementById('reacted2').style.display = 'none';
                document.getElementById('reactH2').style.display = 'block';
                document.getElementById('reactedH2').style.display = 'none';
                document.getElementById('reactS2').style.display = 'block';
                document.getElementById('reactedS2').style.display = 'none';
                document.getElementById('reactA2').style.display = 'none';
                document.getElementById('reactedA2').style.display = 'block';
                like = false;
                heart = false;
                sad = false;
                angry = true;
                reacted = true;
            }
            else {
                document.getElementById('react2').style.display = 'block';
                document.getElementById('reacted2').style.display = 'none';
                document.getElementById('reactH2').style.display = 'block';
                document.getElementById('reactedH2').style.display = 'none';
                document.getElementById('reactS2').style.display = 'block';
                document.getElementById('reactedS2').style.display = 'none';
                document.getElementById('reactA2').style.display = 'block';
                document.getElementById('reactedA2').style.display = 'none';
                like = false;
                heart = false;
                sad = false;
                angry = false;
                reacted = false;
            }
            break;
    }
}

function react3(react) {
    switch (react.value) {
        case 'like':
            if (reacted == false && like == false || reacted == true && like == false) {
                document.getElementById('react3').style.display = 'none';
                document.getElementById('reacted3').style.display = 'block';
                document.getElementById('reactH3').style.display = 'block';
                document.getElementById('reactedH3').style.display = 'none';
                document.getElementById('reactS3').style.display = 'block';
                document.getElementById('reactedS3').style.display = 'none';
                document.getElementById('reactA3').style.display = 'block';
                document.getElementById('reactedA3').style.display = 'none';
                like = true;
                heart = false;
                sad = false;
                angry = false;
                reacted = true;
            }
            else {
                document.getElementById('react3').style.display = 'block';
                document.getElementById('reacted3').style.display = 'none';
                document.getElementById('reactH3').style.display = 'block';
                document.getElementById('reactedH3').style.display = 'none';
                document.getElementById('reactS3').style.display = 'block';
                document.getElementById('reactedS3').style.display = 'none';
                document.getElementById('reactA3').style.display = 'block';
                document.getElementById('reactedA3').style.display = 'none';
                like = false;
                heart = false;
                sad = false;
                angry = false;
                reacted = false;
            }
            break;
        case 'heart':
            if (reacted == false && heart == false || reacted == true && heart == false) {
                document.getElementById('react3').style.display = 'block';
                document.getElementById('reacted3').style.display = 'none';
                document.getElementById('reactH3').style.display = 'none';
                document.getElementById('reactedH3').style.display = 'block';
                document.getElementById('reactS3').style.display = 'block';
                document.getElementById('reactedS3').style.display = 'none';
                document.getElementById('reactA3').style.display = 'block';
                document.getElementById('reactedA3').style.display = 'none';
                like = false;
                heart = true;
                sad = false;
                angry = false;
                reacted = true;
            }
            else {
                document.getElementById('react3').style.display = 'block';
                document.getElementById('reacted3').style.display = 'none';
                document.getElementById('reactH3').style.display = 'block';
                document.getElementById('reactedH3').style.display = 'none';
                document.getElementById('reactS3').style.display = 'block';
                document.getElementById('reactedS3').style.display = 'none';
                document.getElementById('reactA3').style.display = 'block';
                document.getElementById('reactedA3').style.display = 'none';
                like = false;
                heart = false;
                sad = false;
                angry = false;
                reacted = false;
            }
            break;
        case 'sad':
            if (reacted == false && sad == false || reacted == true && sad == false) {
                document.getElementById('react3').style.display = 'block';
                document.getElementById('reacted3').style.display = 'none';
                document.getElementById('reactH3').style.display = 'block';
                document.getElementById('reactedH3').style.display = 'none';
                document.getElementById('reactS3').style.display = 'none';
                document.getElementById('reactedS3').style.display = 'block';
                document.getElementById('reactA3').style.display = 'block';
                document.getElementById('reactedA3').style.display = 'none';
                like = false;
                heart = false;
                sad = true;
                angry = false;
                reacted = true;
            }
            else {
                document.getElementById('react3').style.display = 'block';
                document.getElementById('reacted3').style.display = 'none';
                document.getElementById('reactH3').style.display = 'block';
                document.getElementById('reactedH3').style.display = 'none';
                document.getElementById('reactS3').style.display = 'block';
                document.getElementById('reactedS3').style.display = 'none';
                document.getElementById('reactA3').style.display = 'block';
                document.getElementById('reactedA3').style.display = 'none';
                like = false;
                heart = false;
                sad = false;
                angry = false;
                reacted = false;
            }
            break;
        case 'angry':
            if (reacted == false && angry == false || reacted == true && angry == false) {
                document.getElementById('react3').style.display = 'block';
                document.getElementById('reacted3').style.display = 'none';
                document.getElementById('reactH3').style.display = 'block';
                document.getElementById('reactedH3').style.display = 'none';
                document.getElementById('reactS3').style.display = 'block';
                document.getElementById('reactedS3').style.display = 'none';
                document.getElementById('reactA3').style.display = 'none';
                document.getElementById('reactedA3').style.display = 'block';
                like = false;
                heart = false;
                sad = false;
                angry = true;
                reacted = true;
            }
            else {
                document.getElementById('react3').style.display = 'block';
                document.getElementById('reacted3').style.display = 'none';
                document.getElementById('reactH3').style.display = 'block';
                document.getElementById('reactedH3').style.display = 'none';
                document.getElementById('reactS3').style.display = 'block';
                document.getElementById('reactedS3').style.display = 'none';
                document.getElementById('reactA3').style.display = 'block';
                document.getElementById('reactedA3').style.display = 'none';
                like = false;
                heart = false;
                sad = false;
                angry = false;
                reacted = false;
            }
            break;
    }
}

function react4(react) {
    switch (react.value) {
        case 'like':
            if (reacted == false && like == false || reacted == true && like == false) {
                document.getElementById('react4').style.display = 'none';
                document.getElementById('reacted4').style.display = 'block';
                document.getElementById('reactH4').style.display = 'block';
                document.getElementById('reactedH4').style.display = 'none';
                document.getElementById('reactS4').style.display = 'block';
                document.getElementById('reactedS4').style.display = 'none';
                document.getElementById('reactA4').style.display = 'block';
                document.getElementById('reactedA44').style.display = 'none';
                like = true;
                heart = false;
                sad = false;
                angry = false;
                reacted = true;
            }
            else {
                document.getElementById('react4').style.display = 'block';
                document.getElementById('reacted4').style.display = 'none';
                document.getElementById('reactH4').style.display = 'block';
                document.getElementById('reactedH4').style.display = 'none';
                document.getElementById('reactS4').style.display = 'block';
                document.getElementById('reactedS4').style.display = 'none';
                document.getElementById('reactA4').style.display = 'block';
                document.getElementById('reactedA4').style.display = 'none';
                like = false;
                heart = false;
                sad = false;
                angry = false;
                reacted = false;
            }
            break;
        case 'heart':
            if (reacted == false && heart == false || reacted == true && heart == false) {
                document.getElementById('react4').style.display = 'block';
                document.getElementById('reacted4').style.display = 'none';
                document.getElementById('reactH4').style.display = 'none';
                document.getElementById('reactedH4').style.display = 'block';
                document.getElementById('reactS4').style.display = 'block';
                document.getElementById('reactedS4').style.display = 'none';
                document.getElementById('reactA4').style.display = 'block';
                document.getElementById('reactedA4').style.display = 'none';
                like = false;
                heart = true;
                sad = false;
                angry = false;
                reacted = true;
            }
            else {
                document.getElementById('react4').style.display = 'block';
                document.getElementById('reacted4').style.display = 'none';
                document.getElementById('reactH4').style.display = 'block';
                document.getElementById('reactedH4').style.display = 'none';
                document.getElementById('reactS4').style.display = 'block';
                document.getElementById('reactedS4').style.display = 'none';
                document.getElementById('reactA4').style.display = 'block';
                document.getElementById('reactedA4').style.display = 'none';
                like = false;
                heart = false;
                sad = false;
                angry = false;
                reacted = false;
            }
            break;
        case 'sad':
            if (reacted == false && sad == false || reacted == true && sad == false) {
                document.getElementById('react4').style.display = 'block';
                document.getElementById('reacted4').style.display = 'none';
                document.getElementById('reactH4').style.display = 'block';
                document.getElementById('reactedH4').style.display = 'none';
                document.getElementById('reactS4').style.display = 'none';
                document.getElementById('reactedS4').style.display = 'block';
                document.getElementById('reactA4').style.display = 'block';
                document.getElementById('reactedA4').style.display = 'none';
                like = false;
                heart = false;
                sad = true;
                angry = false;
                reacted = true;
            }
            else {
                document.getElementById('react4').style.display = 'block';
                document.getElementById('reacted4').style.display = 'none';
                document.getElementById('reactH4').style.display = 'block';
                document.getElementById('reactedH4').style.display = 'none';
                document.getElementById('reactS4').style.display = 'block';
                document.getElementById('reactedS4').style.display = 'none';
                document.getElementById('reactA4').style.display = 'block';
                document.getElementById('reactedA4').style.display = 'none';
                like = false;
                heart = false;
                sad = false;
                angry = false;
                reacted = false;
            }
            break;
        case 'angry':
            if (reacted == false && angry == false || reacted == true && angry == false) {
                document.getElementById('react4').style.display = 'block';
                document.getElementById('reacted4').style.display = 'none';
                document.getElementById('reactH4').style.display = 'block';
                document.getElementById('reactedH4').style.display = 'none';
                document.getElementById('reactS4').style.display = 'block';
                document.getElementById('reactedS4').style.display = 'none';
                document.getElementById('reactA4').style.display = 'none';
                document.getElementById('reactedA4').style.display = 'block';
                like = false;
                heart = false;
                sad = false;
                angry = true;
                reacted = true;
            }
            else {
                document.getElementById('react4').style.display = 'block';
                document.getElementById('reacted4').style.display = 'none';
                document.getElementById('reactH4').style.display = 'block';
                document.getElementById('reactedH4').style.display = 'none';
                document.getElementById('reactS4').style.display = 'block';
                document.getElementById('reactedS4').style.display = 'none';
                document.getElementById('reactA4').style.display = 'block';
                document.getElementById('reactedA4').style.display = 'none';
                like = false;
                heart = false;
                sad = false;
                angry = false;
                reacted = false;
            }
            break;
    }
}

function react5(react) {
    switch (react.value) {
        case 'like':
            if (reacted == false && like == false || reacted == true && like == false) {
                document.getElementById('react5').style.display = 'none';
                document.getElementById('reacted5').style.display = 'block';
                document.getElementById('reactH5').style.display = 'block';
                document.getElementById('reactedH5').style.display = 'none';
                document.getElementById('reactS5').style.display = 'block';
                document.getElementById('reactedS5').style.display = 'none';
                document.getElementById('reactA5').style.display = 'block';
                document.getElementById('reactedA55').style.display = 'none';
                like = true;
                heart = false;
                sad = false;
                angry = false;
                reacted = true;
            }
            else {
                document.getElementById('react5').style.display = 'block';
                document.getElementById('reacted5').style.display = 'none';
                document.getElementById('reactH5').style.display = 'block';
                document.getElementById('reactedH5').style.display = 'none';
                document.getElementById('reactS5').style.display = 'block';
                document.getElementById('reactedS5').style.display = 'none';
                document.getElementById('reactA5').style.display = 'block';
                document.getElementById('reactedA5').style.display = 'none';
                like = false;
                heart = false;
                sad = false;
                angry = false;
                reacted = false;
            }
            break;
        case 'heart':
            if (reacted == false && heart == false || reacted == true && heart == false) {
                document.getElementById('react5').style.display = 'block';
                document.getElementById('reacted5').style.display = 'none';
                document.getElementById('reactH5').style.display = 'none';
                document.getElementById('reactedH5').style.display = 'block';
                document.getElementById('reactS5').style.display = 'block';
                document.getElementById('reactedS5').style.display = 'none';
                document.getElementById('reactA5').style.display = 'block';
                document.getElementById('reactedA5').style.display = 'none';
                like = false;
                heart = true;
                sad = false;
                angry = false;
                reacted = true;
            }
            else {
                document.getElementById('react5').style.display = 'block';
                document.getElementById('reacted5').style.display = 'none';
                document.getElementById('reactH5').style.display = 'block';
                document.getElementById('reactedH5').style.display = 'none';
                document.getElementById('reactS5').style.display = 'block';
                document.getElementById('reactedS5').style.display = 'none';
                document.getElementById('reactA5').style.display = 'block';
                document.getElementById('reactedA5').style.display = 'none';
                like = false;
                heart = false;
                sad = false;
                angry = false;
                reacted = false;
            }
            break;
        case 'sad':
            if (reacted == false && sad == false || reacted == true && sad == false) {
                document.getElementById('react5').style.display = 'block';
                document.getElementById('reacted5').style.display = 'none';
                document.getElementById('reactH5').style.display = 'block';
                document.getElementById('reactedH5').style.display = 'none';
                document.getElementById('reactS5').style.display = 'none';
                document.getElementById('reactedS5').style.display = 'block';
                document.getElementById('reactA5').style.display = 'block';
                document.getElementById('reactedA5').style.display = 'none';
                like = false;
                heart = false;
                sad = true;
                angry = false;
                reacted = true;
            }
            else {
                document.getElementById('react5').style.display = 'block';
                document.getElementById('reacted5').style.display = 'none';
                document.getElementById('reactH5').style.display = 'block';
                document.getElementById('reactedH5').style.display = 'none';
                document.getElementById('reactS5').style.display = 'block';
                document.getElementById('reactedS5').style.display = 'none';
                document.getElementById('reactA5').style.display = 'block';
                document.getElementById('reactedA5').style.display = 'none';
                like = false;
                heart = false;
                sad = false;
                angry = false;
                reacted = false;
            }
            break;
        case 'angry':
            if (reacted == false && angry == false || reacted == true && angry == false) {
                document.getElementById('react5').style.display = 'block';
                document.getElementById('reacted5').style.display = 'none';
                document.getElementById('reactH5').style.display = 'block';
                document.getElementById('reactedH5').style.display = 'none';
                document.getElementById('reactS5').style.display = 'block';
                document.getElementById('reactedS5').style.display = 'none';
                document.getElementById('reactA5').style.display = 'none';
                document.getElementById('reactedA5').style.display = 'block';
                like = false;
                heart = false;
                sad = false;
                angry = true;
                reacted = true;
            }
            else {
                document.getElementById('react5').style.display = 'block';
                document.getElementById('reacted5').style.display = 'none';
                document.getElementById('reactH5').style.display = 'block';
                document.getElementById('reactedH5').style.display = 'none';
                document.getElementById('reactS5').style.display = 'block';
                document.getElementById('reactedS5').style.display = 'none';
                document.getElementById('reactA5').style.display = 'block';
                document.getElementById('reactedA5').style.display = 'none';
                like = false;
                heart = false;
                sad = false;
                angry = false;
                reacted = false;
            }
            break;
    }
}

function react6(react) {
    switch (react.value) {
        case 'like':
            if (reacted == false && like == false || reacted == true && like == false) {
                document.getElementById('react6').style.display = 'none';
                document.getElementById('reacted6').style.display = 'block';
                document.getElementById('reactH6').style.display = 'block';
                document.getElementById('reactedH6').style.display = 'none';
                document.getElementById('reactS6').style.display = 'block';
                document.getElementById('reactedS6').style.display = 'none';
                document.getElementById('reactA6').style.display = 'block';
                document.getElementById('reactedA66').style.display = 'none';
                like = true;
                heart = false;
                sad = false;
                angry = false;
                reacted = true;
            }
            else {
                document.getElementById('react6').style.display = 'block';
                document.getElementById('reacted6').style.display = 'none';
                document.getElementById('reactH6').style.display = 'block';
                document.getElementById('reactedH6').style.display = 'none';
                document.getElementById('reactS6').style.display = 'block';
                document.getElementById('reactedS6').style.display = 'none';
                document.getElementById('reactA6').style.display = 'block';
                document.getElementById('reactedA6').style.display = 'none';
                like = false;
                heart = false;
                sad = false;
                angry = false;
                reacted = false;
            }
            break;
        case 'heart':
            if (reacted == false && heart == false || reacted == true && heart == false) {
                document.getElementById('react6').style.display = 'block';
                document.getElementById('reacted6').style.display = 'none';
                document.getElementById('reactH6').style.display = 'none';
                document.getElementById('reactedH6').style.display = 'block';
                document.getElementById('reactS6').style.display = 'block';
                document.getElementById('reactedS6').style.display = 'none';
                document.getElementById('reactA6').style.display = 'block';
                document.getElementById('reactedA6').style.display = 'none';
                like = false;
                heart = true;
                sad = false;
                angry = false;
                reacted = true;
            }
            else {
                document.getElementById('react6').style.display = 'block';
                document.getElementById('reacted6').style.display = 'none';
                document.getElementById('reactH6').style.display = 'block';
                document.getElementById('reactedH6').style.display = 'none';
                document.getElementById('reactS6').style.display = 'block';
                document.getElementById('reactedS6').style.display = 'none';
                document.getElementById('reactA6').style.display = 'block';
                document.getElementById('reactedA6').style.display = 'none';
                like = false;
                heart = false;
                sad = false;
                angry = false;
                reacted = false;
            }
            break;
        case 'sad':
            if (reacted == false && sad == false || reacted == true && sad == false) {
                document.getElementById('react6').style.display = 'block';
                document.getElementById('reacted6').style.display = 'none';
                document.getElementById('reactH6').style.display = 'block';
                document.getElementById('reactedH6').style.display = 'none';
                document.getElementById('reactS6').style.display = 'none';
                document.getElementById('reactedS6').style.display = 'block';
                document.getElementById('reactA6').style.display = 'block';
                document.getElementById('reactedA6').style.display = 'none';
                like = false;
                heart = false;
                sad = true;
                angry = false;
                reacted = true;
            }
            else {
                document.getElementById('react6').style.display = 'block';
                document.getElementById('reacted6').style.display = 'none';
                document.getElementById('reactH6').style.display = 'block';
                document.getElementById('reactedH6').style.display = 'none';
                document.getElementById('reactS6').style.display = 'block';
                document.getElementById('reactedS6').style.display = 'none';
                document.getElementById('reactA6').style.display = 'block';
                document.getElementById('reactedA6').style.display = 'none';
                like = false;
                heart = false;
                sad = false;
                angry = false;
                reacted = false;
            }
            break;
        case 'angry':
            if (reacted == false && angry == false || reacted == true && angry == false) {
                document.getElementById('react6').style.display = 'block';
                document.getElementById('reacted6').style.display = 'none';
                document.getElementById('reactH6').style.display = 'block';
                document.getElementById('reactedH6').style.display = 'none';
                document.getElementById('reactS6').style.display = 'block';
                document.getElementById('reactedS6').style.display = 'none';
                document.getElementById('reactA6').style.display = 'none';
                document.getElementById('reactedA6').style.display = 'block';
                like = false;
                heart = false;
                sad = false;
                angry = true;
                reacted = true;
            }
            else {
                document.getElementById('react6').style.display = 'block';
                document.getElementById('reacted6').style.display = 'none';
                document.getElementById('reactH6').style.display = 'block';
                document.getElementById('reactedH6').style.display = 'none';
                document.getElementById('reactS6').style.display = 'block';
                document.getElementById('reactedS6').style.display = 'none';
                document.getElementById('reactA6').style.display = 'block';
                document.getElementById('reactedA6').style.display = 'none';
                like = false;
                heart = false;
                sad = false;
                angry = false;
                reacted = false;
            }
            break;
    }
}



