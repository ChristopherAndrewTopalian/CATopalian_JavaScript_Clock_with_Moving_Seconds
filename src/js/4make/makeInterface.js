// makeInterface.js

function makeInterface()
{
    let mainDiv = ce('div');
    mainDiv.id = 'mainDiv';
    mainDiv.title = 'mainDiv';
    mainDiv.className = 'mainDiv';
    mainDiv.style.position = 'absolute';
    mainDiv.style.top = '0px';
    ba(mainDiv);

    makeElementDraggable(mainDiv);

    //-//

    let titleOfApp = ce('a');
    titleOfApp.id = 'titleOfApp';
    titleOfApp.textContent = 'CATopalian JavaScript Clock with Moving Seconds';
    titleOfApp.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_JavaScript_Clock_with_Moving_Seconds';
    titleOfApp.target = '_blank';
    titleOfApp.style.fontSize = '17px';
    titleOfApp.style.fontWeight = 'bold';
    titleOfApp.style.textDecoration = 'none';
    titleOfApp.style.color = 'rgb(100, 100, 100)';
    mainDiv.append(titleOfApp);

    //-//

    let dateTimeDiv = ce('div');
    dateTimeDiv.id = 'dateTimeDiv';
    dateTimeDiv.title = 'dateTimeDiv';
    mainDiv.append(dateTimeDiv);

    //-//

    let clockContainer = ce('div');
    clockContainer.id = 'clockContainer';
    clockContainer.title = 'clockContainer';
    clockContainer.style.display = 'flex';
    clockContainer.style.flexDirection = 'column';
    mainDiv.append(clockContainer);

    //-//

    let timeLine = ce('div');
    timeLine.id = 'timeLine';
    timeLine.title = 'timeLine';
    timeLine.className = 'timeLine';
    clockContainer.append(timeLine);

    //-//

    let secondsRectangle = ce('div');
    secondsRectangle.id = 'secondsRectangle';
    secondsRectangle.className = 'secondsRectangle';
    clockContainer.append(secondsRectangle);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

